import { Platform, PermissionsAndroid, EmitterSubscription, NativeModules, NativeEventEmitter } from "react-native"
import BleManager from 'react-native-ble-manager'
import AndroidLocationEnabler from 'react-native-android-location-enabler'
import { Advertising } from "./types"

const BleManagerModule = NativeModules.BleManager
export const emitter = new NativeEventEmitter(BleManagerModule)
export const emitterKeys = {
  stopScan: 'BleManagerStopScan',
  discoverPeripheral: 'BleManagerDiscoverPeripheral',
  updateForCharacteristic: 'BleManagerDidUpdateValueForCharacteristic',
}

const scanSeconds = 60

let subscriptionOnFindPeri: EmitterSubscription | undefined
let subscriptionOnStopScan: EmitterSubscription | undefined

const removeSubscriptions = () => {
  if (subscriptionOnFindPeri) {
    subscriptionOnFindPeri.remove()
    subscriptionOnFindPeri = undefined
  }
  if (subscriptionOnStopScan) {
    subscriptionOnStopScan.remove()
    subscriptionOnStopScan = undefined
  }
}

const startScan = async (p: {
  onFindPeri?: (ad: Advertising) => void
  onStopScan: () => void
}) => {
  await initBleIfNot()
  removeSubscriptions()
  subscriptionOnFindPeri = emitter.addListener(
    emitterKeys.discoverPeripheral,
    (rawPeri) => {
      const peri = new Advertising(rawPeri as Advertising)
      // console.log('find peri', peri)
      if (p && p.onFindPeri) {
        p.onFindPeri(peri)
      }
    }
  )
  subscriptionOnStopScan = emitter.addListener(
    emitterKeys.stopScan,
    () => {
      console.log('stop scan')
      p.onStopScan()
    }
  )
  await BleManager.scan([], scanSeconds, true, { scanMode: 2 })
  console.log('start scan')
}

let started = false
const initBleIfNot = async () => {
  if (Platform.OS === 'android') {
    let permitted = true
    if (!await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, {
      title: '場所情報を許可',
      message: 'BLE利用機器を使うために、場所情報の利用を許可しますか？',
      buttonPositive: 'はい',
      buttonNegative: 'いいえ',
    })) {
      permitted = false
    }
    if (permitted) {
      try {
        await AndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
      } catch (e) {
        console.log(e)
        permitted = false
      }
    }
    if (!permitted) {
      throw '許可されませんでした'
    }
    await new Promise((resolve) => setTimeout(resolve, 5000)) // bletoothが有効になるまで5秒くらい待つ
    await BleManager.enableBluetooth()
  }
  if (!started) {
    await BleManager.start()
    started = true
  } else {
    BleManager.checkState()
  }
}

const stopScan = async () => {
  await BleManager.stopScan()
}

export default {
  startScan,
  stopScan,
}
