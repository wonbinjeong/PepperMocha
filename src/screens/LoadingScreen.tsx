import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {app, db} from "../firebase/firebase";

interface LoadingScreenProps {
    navigation: any,
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({navigation}) => {
    useEffect(() => {
        getAuth(app).onAuthStateChanged((user) => {
            if (user) {
                navigation.replace('Dashboard');
            } else {
                navigation.replace('Home');  
            }
        })
    })
    
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center", 
    }
})