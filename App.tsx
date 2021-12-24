import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import apiKeys from './src/firebase/config';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import LoadingScreen from './src/screens/LoadingScreen';
import Dashboard from './src/screens/Dashboard';
import {Text} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    initializeApp(apiKeys);
  }

  return (
    <NavigationContainer>
      <Text>HELLO</Text>
      <Stack.Navigator>
      {/* <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/> */}
      <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
      {/* <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}