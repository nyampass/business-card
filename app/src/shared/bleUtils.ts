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
const defaultRetryCount = Platform.OS === 'android' ? 10 : 3

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

export interface NotificationUuid {
  serviceUuid: string
  characteristicUuid: string
}

const startConnectionBase = async (periId: string, options?: {
  neededToCancel?: () => boolean
  notificationUuids?: NotificationUuid[]
}) => {
  if (!options) options = {}
  const neededToCancel = options.neededToCancel || (() => false)
  if (neededToCancel()) return
  await BleManager.connect(periId)
  if (neededToCancel()) return
  const _services: any = await BleManager.retrieveServices(periId)
  console.log("services", _services)
  const { characteristics } = _services
  console.log("services.characteristics", characteristics)
  if (_services.characteristics) {
    for (const c of characteristics) {
      console.log(c)
    }
  }
  if (neededToCancel()) return
  for (const n of options.notificationUuids || []) {
    await BleManager.startNotification(
      periId,
      n.serviceUuid,
      n.characteristicUuid
    )
  }
}

interface StartConnectionOptions {
  retryCount?: number
  onRetry?: (triedCount: number) => Promise<void>
  neededToCancel?: () => boolean
  notificationUuids?: NotificationUuid[]
}

const isNotNullOrUndefined = (v: any) => {
  return !(v === null || v === undefined)
}

const startConnection = async (periId: string, options?: StartConnectionOptions) => {
  if (!options) options = {}
  const retryCount = isNotNullOrUndefined(options.retryCount) ? options.retryCount : defaultRetryCount
  console.log(`start connection to ${periId}`)
  for (const i of Array(retryCount + 1).keys()) {
    try {
      await startConnectionBase(periId, {
        neededToCancel: options.neededToCancel,
        notificationUuids: options.notificationUuids,
      })
      break
    } catch (e) {
      if (i === retryCount) {
        throw e
      }
      await finishConnection(periId)
      console.log(`failed connection with ${periId} ${i + 1} times`)
      if (options.onRetry) {
        await options.onRetry(i + 1)
      }
    }
  }
}

const finishConnection = async (
  periId: string,
  options?: { notificationUuids?: NotificationUuid[] },
) => {
  console.log(`finish connection with ${periId}`)
  if (!options) options = {}
  for (const n of options.notificationUuids || []) {
    try {
      await BleManager.stopNotification(
        periId,
        n.serviceUuid,
        n.characteristicUuid,
      )
    } catch (e) {
      // console.log(e)
      // ignore error about stop notification
    }
  }
  await BleManager.disconnect(periId)
}

const withConnection = async (periId: string, options: {
  startConnection: (periId: string) => Promise<void>
  onConnect: () => Promise<void>
  finishConnection: (periId: string) => Promise<void>
}) => {
  try {
    await initBleIfNot()
    await options.startConnection(periId)
    await options.onConnect()
    await options.finishConnection(periId)
  } catch (e) {
    await options.finishConnection(periId)
    throw e
  }
}

export default {
  startScan,
  stopScan,
  startConnection,
  finishConnection,
  withConnection,
}
