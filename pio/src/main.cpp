#include <Arduino.h>
#include <BLEPeripheral.h>

#define INFO_CHANGE_INTERVAL_MS 10000UL

#ifndef INFO_EMAIL
#define INFO_EMAIL "info@nyampass.com"
#endif
#ifndef INFO_NAME
#define INFO_NAME "nyampass"
#endif
#ifndef INFO_TEL
#define INFO_TEL "080-0000-0000"
#endif

#define LED_PIN 13

const String infoPrefix = "bc:";
const String infoEmail = infoPrefix + INFO_EMAIL;
const String infoName = infoPrefix + INFO_NAME;
const String infoTel = infoPrefix + INFO_TEL;
String currentInfo = infoEmail;
char currentInfoType = 'e';

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

void setup() {
  blePeripheral.setLocalName(currentInfo.c_str());
  blePeripheral.begin();
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  static bool ledState = false;
  ledState = !ledState;
  digitalWrite(LED_PIN, ledState);
  delay(INFO_CHANGE_INTERVAL_MS);
  currentInfoType = getNextInfo(currentInfoType);
  if (currentInfoType == 'e') {
    currentInfo = infoEmail;
  } else if (currentInfoType == 'n') {
    currentInfo = infoName;
  } else {
    currentInfo = infoTel;
  }
  blePeripheral.setLocalName(currentInfo.c_str());
  blePeripheral.begin();
}
