import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import Quiz from '../screen/quiz';
const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Navigator