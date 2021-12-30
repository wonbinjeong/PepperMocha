import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signIn} from '../firebase/auth';

interface SignInScreenProps {
    navigation: any,
}

export const SignIn: React.FC<SignInScreenProps> = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        if (!email) {
            Alert.alert("Email is required");
        }

        if (!password) {
            Alert.alert("Password is required");
        }

        console.log(email);
        console.log(password);

        signIn(email, password);
        setEmail('');
        setPassword('');
    }
    
    return (
        <View style={styles.container}>
            <Text>Sign in to your account: </Text>
            <TextInput 
                placeholder='Enter your email'
                value={email}
                onChangeText={((email) => setEmail(email))}
                autoCapitalize="none"
            />
            <TextInput 
                placeholder='Enter your password'
                value={password}
                onChangeText={((password) => setPassword(password))}
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={handlePress}>
                <Text>Sumbit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    },

})