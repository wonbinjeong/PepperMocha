import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {SignUp} from './src/screens/SignUp';
import {SignIn} from './src/screens/SignIn';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {Dashboard} from './src/screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}