import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home';
import Quiz from './screen/quiz';
import Result from './screen/result';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz}  options={{headerShown:false}} />
        <Stack.Screen name="Result" component={Result}  options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151119',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
