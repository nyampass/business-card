import { Buffer } from 'buffer'
import { Platform } from 'react-native'

const manufacturerDataStartIndex = Platform.OS === 'android' ? 5 : 0

export class Advertising {
  id: string
  name: string
  advertising: {
    manufacturerData: {
      bytes: Buffer
    } | Buffer
  }
  rssi: number

  constructor(p: Required<Advertising>) {
    this.id = p.id
    this.name = p.name
    this.advertising = p.advertising
    this.rssi = p.rssi
  }

  getManufactureBytes() {
    return Buffer.isBuffer(this.advertising.manufacturerData) ? this.advertising.manufacturerData : this.advertising.manufacturerData.bytes
  }
}

export class BusinessCardAd {
  raw: Advertising
  info: string

  static isItAd(ad: Advertising) {
    return ad.name === 'business-card'
  }

  constructor(ad: Advertising) {
    this.raw = ad
    const bytes = ad.getManufactureBytes()
    let startIndex = manufacturerDataStartIndex
    let endIndex = startIndex + 50
    // endIndex =  bytes.findIndex((v, i) => i > startIndex && v == 0)
    const codes = bytes.slice(startIndex, endIndex) // bytes.toString('utf8', manufacturerDataStartIndex)
    console.log('codes', codes, bytes)
    // this.info = codes.toString('utf8')
    let str = ""
    for (const v of codes.values()) {
      if (v !== 0)
      str += String.fromCharCode(v)
    }
    this.info = str
  }
}
