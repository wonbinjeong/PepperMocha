import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from './src/screens/WelcomeScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {CreateFamilyScreen} from './src/screens/CreateFamilyScreen';
import {SignInScreen} from './src/screens/SignInScreen';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {DashboardScreen} from './src/screens/DashboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateFamily" component={CreateFamilyScreen} options={{headerShown: false}} />
        <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}