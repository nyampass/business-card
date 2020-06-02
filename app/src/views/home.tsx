import React from 'react'
import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import labels from '../shared/labels'

interface Props {
  navigation: StackNavigationProp<{}>
}
interface State { }

export default class Home extends React.Component<Props, State>{
  render() {
    return (
      <View>
        <ListItem
          title={labels.pages.businessCards}
          onPress={() => this.props.navigation.navigate('BusinessCardsStack' as any)}
          bottomDivider
        />
        <ListItem
          title={labels.pages.about}
          onPress={() => this.props.navigation.navigate('About' as any)}
          bottomDivider
        />
      </View>
    )
  }
}
