import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import {app, db} from "../firebase/firebase";
import {styles} from "../style/styles";

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