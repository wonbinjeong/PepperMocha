import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigator, NavigationScreenProp } from 'react-navigation';

export interface WelcomeScreenProps {
    navigation: NavigationScreenProp<any,any>
};

export default class WelcomeScreen extends React.Component<WelcomeScreenProps, object> {
  render() {
      return (
        <View style={styles.container}>
            <Text>Welcome to Firebase/Firestore Example</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign Up')} >
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign In')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    }
})