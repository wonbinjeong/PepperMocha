import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from "../style/styles";

interface WelcomeScreenProps {
    navigation: any,
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Text>Welcome to PepperMocha!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text>Sign In</Text>
        </TouchableOpacity>
    </View>
    )
}