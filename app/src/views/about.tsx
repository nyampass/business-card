import React from 'react'
import { View, Text, Linking, StyleProp, ViewStyle } from 'react-native'
import { Card, Button } from 'react-native-elements'

const buttonContainerStyle: StyleProp<ViewStyle> = {
  margin: 10,
  marginBottom: 0,
}

export default () => {
  return (
    <View>
      <Card>
        <Text>このアプリは名刺基板の情報を表示するためのものです。</Text>
        <Text>ニャンパス株式会社がBLEのデモ用に作成しました。</Text>
        <Text>利用している技術は下記のページで紹介しています。</Text>
      </Card>
      <Button
        containerStyle={buttonContainerStyle}
        title="ブログ記事"
        onPress={() => Linking.openURL('https://magazine.halake.com/entry/ble-business-card')}
      />
      <Button
        containerStyle={buttonContainerStyle}
        title="ソースコード"
        onPress={() => Linking.openURL('https://github.com/nyampass/business-card')}
      />
    </View>
  )
}
