# business-card/pio

PlatformIO project for MDBT40.

# 書き込み環境

## PlatformIO

ビルドと書き込みはできるものの、実行されない不具合があるので、Arduino IDEを利用してください。

## Arduino IDE

下記の準備を行ってください。
- src/main.cppを~/Arduino/business-card/business-card.inoとしてリンクさせ、ArduinoIDEで読み込めるようにする
- [arduino-nRF5](https://github.com/sandeepmistry/arduino-nRF5)をArduinoIDEにインストールする
- [arduino-nRF5のsoftwaredeviceのflushプログラム](https://github.com/sandeepmistry/arduino-nRF5#flashing-a-softdevice)をArduinoIDEに設定する
- 上記のflushプログラムでMDBT40にプログラムを書き込む(メモリは16KB、SoftwareDeviceはs130、書き込み装置はBLENanoのdaplinkを利用するばあいはCMSIS-DAP)
- ArduinoIDEのライブラリマネージャでBLEPeripheralをインストールする

上記の設定をすれば、src/main.cppをMDBT20に書き込んでBLEの機能を使えます。

# References

- [RedBearLab BLE Nano 1.5](https://docs.platformio.org/en/latest/boards/nordicnrf51/redBearLabBLENano.html)
- [platform-nordicnrf51/examples/arduino-ble-led/src/led.cpp](https://github.com/platformio/platform-nordicnrf51/blob/6b0409c7c7752f9be6c459d3e1e5dd9296ed8009/examples/arduino-ble-led/src/led.cpp)
- [platform-nordicnrf51/examples/arduino-ble-led/platformio.ini](https://github.com/platformio/platform-nordicnrf51/blob/6b0409c7c7752f9be6c459d3e1e5dd9296ed8009/examples/arduino-ble-led/platformio.ini)
- [arduino-BLEPeripheral/API.md](https://github.com/sandeepmistry/arduino-BLEPeripheral/blob/161a4163f565be3cd5b62bbc59f0c2b522d82b02/API.md)
- [sandeepmistry/arduino-nRF5](https://github.com/sandeepmistry/arduino-nRF5)
