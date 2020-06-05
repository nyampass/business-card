import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import Home from './views/home'
import About from './views/about'
import BusinessCardIndex from './views/businessCards/index'
import BusinessCardShow from './views/businessCards/show'
import labels from './shared/labels'

const BusinessCardsNavi = createStackNavigator()
const BusinessCardsStack = () => {
  return (
    <BusinessCardsNavi.Navigator>
      <BusinessCardsNavi.Screen name="BusinessCardIndex" component={BusinessCardIndex}
        options={({ navigation }) => ({
          headerLeft: () => < HeaderBackButton onPress={() => navigation.goBack()} />,
          title: labels.pages.businessCards,
        })} />
      <BusinessCardsNavi.Screen name="BusinessCardShow" component={BusinessCardShow} />
    </BusinessCardsNavi.Navigator>
  )
}

const RootNavi = createStackNavigator()
export default () => {
  return (
    <NavigationContainer>
      <RootNavi.Navigator>
        <RootNavi.Screen name="Home" component={Home} />
        <RootNavi.Screen name="BusinessCardsStack" component={BusinessCardsStack}
          options={{ headerShown: false }} />
        <RootNavi.Screen name="About" component={About} options={{ title: labels.pages.about }} />
      </RootNavi.Navigator>
    </NavigationContainer>
  )
}
