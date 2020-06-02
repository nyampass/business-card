# business-card/pio

MDBT40に書き込む名刺情報配信プログラムです。

## 必要なもの

- [PlatformIO](https://platformio.org/)
- 書き込み装置: DAPLinkもしくは[STLinkV2](https://www.amazon.co.jp/dp/B012VR3PVA)

## 書き込みコマンド

環境変数に情報を渡すことで、配信する情報を変えられます。
設定できる変数は `INFO_EMAIL`, `INFO_NAME`, `INFO_TEL` の3つです。
各変数の最大の長さは20です。

```
PLATFORMIO_BUILD_FLAGS="-D INFO_EMAIL=\\\"your@email.com\\\" -D INFO_NAME=\\\"yourname\\\" -D INFO_TEL=\\\"000-9999-8888\\\"" pio run -t upload
```

# References

- [RedBearLab BLE Nano 1.5](https://docs.platformio.org/en/latest/boards/nordicnrf51/redBearLabBLENano.html)
- [platform-nordicnrf51/examples/arduino-ble-led/src/led.cpp](https://github.com/platformio/platform-nordicnrf51/blob/6b0409c7c7752f9be6c459d3e1e5dd9296ed8009/examples/arduino-ble-led/src/led.cpp)
- [platform-nordicnrf51/examples/arduino-ble-led/platformio.ini](https://github.com/platformio/platform-nordicnrf51/blob/6b0409c7c7752f9be6c459d3e1e5dd9296ed8009/examples/arduino-ble-led/platformio.ini)
- [arduino-BLEPeripheral/API.md](https://github.com/sandeepmistry/arduino-BLEPeripheral/blob/161a4163f565be3cd5b62bbc59f0c2b522d82b02/API.md)
- [sandeepmistry/arduino-nRF5](https://github.com/sandeepmistry/arduino-nRF5)
- [PlatformIOのビルド時のコマンドでマクロの変数を定義する方法](https://asukiaaa.blogspot.com/2019/04/platformio.html)
- [arduino-nRF5/variants/BLENano/variant.cpp](https://github.com/sandeepmistry/arduino-nRF5/blob/master/variants/BLENano/variant.cpp)
- [arduino-nRF5/variants/BBCmicrobit/variant.cpp](https://github.com/sandeepmistry/arduino-nRF5/blob/master/variants/BBCmicrobit/variant.cpp)
