import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface WelcomeScreenProps {
    navigation: any,
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Text>Welcome to Firebase/Firestore Example</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} >
            <Text>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')}>
            <Text>Sign In</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    }
})