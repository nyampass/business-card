import React from 'react'
import { View, ActivityIndicator, Text, Alert } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import bleUtils from '../../shared/bleUtils'
import { RouteProp } from '@react-navigation/native'
import { BusinessCardAd } from '../../shared/types'
import styles from '../..//shared/styles'
import { Button } from 'react-native-elements'
import BleManager from 'react-native-ble-manager'

interface Props {
  navigation: StackNavigationProp<{}>
  route: RouteProp<{ show: { ad: BusinessCardAd } }, 'show'>
}
interface State {
  connected: boolean
}

const serviceUuid = "19b10000-e8f2-537e-4f6c-d104768a1214" // "1800"
const characteristicUuid = "19b10001-e8f2-537e-4f6c-d104768a1214" // "2a00"

export default class BusinessCardShow extends React.Component<Props, State>{
  constructor(p: Props) {
    super(p)
    this.state = {
      connected: false
    }
  }

  getPeriId() {
    return this.props.route.params.ad.raw.id
  }

  async componentDidMount() {
    await bleUtils.stopScan()
    await new Promise((resolve) => setTimeout(resolve, 2000)) // stopしてからすぐに接続すると挙動がおかしくなることがあるので、2秒待つ
    try {
      console.log(this.props.route, this.props.route.params)
      await bleUtils.startConnection(this.getPeriId())
      this.setState({ connected: true })
    } catch {
      Alert.alert('接続できませんでした')
      this.props.navigation.goBack()
    }
  }

  async componentWillUnmount() {
    await bleUtils.finishConnection(this.getPeriId())
  }

  async setPin(state: boolean) {
    await BleManager.writeWithoutResponse(this.getPeriId(), serviceUuid, characteristicUuid, [state ? 1 : 0], 1)
  }

  renderButtons() {
    return <View>
      <Text>接続しました</Text>
      <Button containerStyle={styles.buttonContainer} onPress={() => this.setPin(true)} title="high" />
      <Button containerStyle={styles.buttonContainer} onPress={() => this.setPin(false)} title="low" />
    </View>
  }

  render() {
    return (
      <View>
        {this.state.connected ?
          this.renderButtons() : <View><Text>接続中</Text><ActivityIndicator /></View>
        }
      </View>
    )
  }
}
