import React from 'react'
import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<{}>
}
interface State {}

export default class Home extends React.Component<Props, State>{
  render() {
    return (
      <View>
        <ListItem
          title="react-nativeデモ"
          onPress={() => this.props.navigation.navigate('ReactNativeDemo' as any)}
          bottomDivider
        />
        <ListItem
          title="名刺一覧"
          onPress={() => this.props.navigation.navigate('BusinessCardsStack' as any)}
          bottomDivider
        />
      </View>
    )
  }
}
