import React from 'react'
import { View, Text, Linking } from 'react-native'
import { Card, Button } from 'react-native-elements'
import styles from '../shared/styles'

export default () => {
  return (
    <View>
      <Card>
        <Text>このアプリは名刺基板の情報を表示するためのものです。</Text>
        <Text>ニャンパス株式会社がBLEのデモ用に作成しました。</Text>
        <Text>利用している技術は下記のページで紹介しています。</Text>
      </Card>
      <Button
        containerStyle={styles.buttonContainer}
        title="ブログ記事"
        onPress={() => Linking.openURL('https://magazine.halake.com/entry/ble-business-card')}
      />
      <Button
        containerStyle={styles.buttonContainer}
        title="ソースコード"
        onPress={() => Linking.openURL('https://github.com/nyampass/business-card')}
      />
    </View>
  )
}
