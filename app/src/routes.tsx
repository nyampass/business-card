import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from './views/home'
import ReactNativeDemo from './views/reactNativeDemo'
import BusinessCardsIndex from './views/businessCards'
import labels from './shared/labels'

const BusinessCardsNavi = createStackNavigator()
const BusinessCardsStack = () => {
  return (
    <BusinessCardsNavi.Navigator>
      <BusinessCardsNavi.Screen name="BusinessCardsIndex" component={BusinessCardsIndex}
        options={({ navigation }) => ({
          headerLeft: () =>< HeaderBackButton onPress={() => navigation.goBack()} />,
          title: labels.pages.businessCard + labels.pages.index
        })} />
    </BusinessCardsNavi.Navigator>
  )
}

const RootNavi = createStackNavigator()
export default () => {
  return (
    <NavigationContainer>
      <RootNavi.Navigator>
        <RootNavi.Screen name="Home" component={Home} />
        <RootNavi.Screen name="ReactNativeDemo" component={ReactNativeDemo} />
        <RootNavi.Screen name="BusinessCardsStack" component={BusinessCardsStack}
          options={{ headerShown: false }} />
      </RootNavi.Navigator>
    </NavigationContainer>
  )
}
