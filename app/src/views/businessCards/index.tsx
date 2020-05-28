import React from 'react'
import { ListItem } from 'react-native-elements'
import { View, ActivityIndicator, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import bleUtils from '../..//shared/bleUtils'
import { BusinessCardAd } from '../../shared/types'

interface Props {
  navigation: StackNavigationProp<{}>
}
interface State {
  foundAdIds: string[]
  ads: { [key: string]: BusinessCardAd }
  scanning: boolean
}

export default class Home extends React.Component<Props, State>{
  constructor(p: Props) {
    super(p)
    this.state = {
      foundAdIds: [],
      ads: {},
      scanning: false,
    }
  }

  async componentDidMount() {
    await this.scan()
  }

  async componentWillUnmount() {
    await bleUtils.stopScan()
  }

  async scan() {
    if (this.state.scanning) {
      return
    }
    this.setState({ scanning: true })
    await bleUtils.startScan({
      onFindPeri: (peri) => {
        if (!BusinessCardAd.isItAd(peri)) return
        const ad = new BusinessCardAd(peri)
        const { ads } = this.state
        const oldAd = ads[peri.id]
        if (!oldAd || oldAd.info !== ad.info) {
          // console.log(ad)
          ads[peri.id] = ad
          this.setState({ ads })
        }
        if (this.state.foundAdIds.indexOf(peri.id) < 0) {
          const { foundAdIds } = this.state
          foundAdIds.push(peri.id)
          this.setState({ foundAdIds })
        }
      },
      onStopScan: () => {
        this.setState({ scanning: false })
      },
    })
  }

  render() {
    return (
      <View>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          {this.state.scanning
            ? <View style={{ flexDirection: 'row' }}><Text>検索中</Text><ActivityIndicator /></View>
            : <Text>検索終了</Text>
          }
        </View>
        {this.state.foundAdIds.map((id, i) => {
          const ad = this.state.ads[id]
          return (
            <ListItem
              key={i}
              title={ad.info}
              bottomDivider
            />
          )
        })}
      </View>
    )
  }
}
