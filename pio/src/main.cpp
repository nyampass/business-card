#include <Arduino.h>
#include <BLEPeripheral.h>

#define INFO_CHANGE_INTERVAL_MS 10000UL
#define BLINK_INTERVAL_MS 1000UL

#ifndef INFO_EMAIL
#define INFO_EMAIL "info@nyampass.com"
#endif
#ifndef INFO_NAME
#define INFO_NAME "nyampass"
#endif
#ifndef INFO_TEL
#define INFO_TEL "080-0000-0000"
#endif

#ifndef LED_PIN
// #define LED_PIN 13
#endif

const String infoPrefix = "";
const String infoEmail = infoPrefix + INFO_EMAIL;
const String infoName = infoPrefix + INFO_NAME;
const String infoTel = infoPrefix + INFO_TEL;
String currentInfo = infoEmail;
char currentInfoType = 'e';
const uint8_t manufactureDataLen = 20;
unsigned char manufactureData[manufactureDataLen];

BLEPeripheral blePeripheral = BLEPeripheral();

char getNextInfo(char info) {
  if (info == 'e') {
    return 'n';
  } else if (info == 'n') {
    return 't';
  } else { // info == 't'
    return 'e';
  }
}

void replaceManufactureData(String d) {
  uint8_t strLen = d.length();
  for (uint8_t i = 0; i < manufactureDataLen; ++i) {
    manufactureData[i] = i < strLen ? d[i] : 0;
  }
}

void setup() {
  blePeripheral.setLocalName("business-card");
  replaceManufactureData(currentInfo);
  blePeripheral.setManufacturerData(manufactureData, manufactureDataLen);
  blePeripheral.begin();
  pinMode(LED_PIN, OUTPUT);
}

void handleManufactureData() {
  static unsigned long handledAt = 0;
  if (millis() - handledAt < INFO_CHANGE_INTERVAL_MS) {
    return;
  }
  handledAt = millis();
  currentInfoType = getNextInfo(currentInfoType);
  if (currentInfoType == 'e') {
    currentInfo = infoEmail;
  } else if (currentInfoType == 'n') {
    currentInfo = infoName;
  } else {
    currentInfo = infoTel;
  }
  replaceManufactureData(currentInfo);
  blePeripheral.begin();
}

void handleLed() {
  static unsigned long handledAt = 0;
  if (millis() - handledAt < BLINK_INTERVAL_MS) {
    return;
  }
  handledAt = millis();
  static bool ledState = false;
  ledState = !ledState;
  digitalWrite(LED_PIN, ledState);
}

void loop() {
  handleLed();
  handleManufactureData();
  delay(10);
}
