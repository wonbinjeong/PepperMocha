import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from "../style/styles";

interface CreateFamilyScreenProps {
    navigation: any,
}

export const CreateFamilyScreen: React.FC<CreateFamilyScreenProps> = ({navigation}) => {
    const [familyName, setFamilyName] = useState('');
    const [familyCode, setFamilyCode] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert("Create Family")}>
                <Text>Start New Family</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("Have Family Code")}>
                <Text>Have Family Code</Text>
            </TouchableOpacity>

            <TextInput
                placeholder='Family Name'
                value={familyName}
                onChangeText={(name) => setFamilyName(name)}
            />

            <TextInput
                placeholder='Family Code'
                value={familyCode}
                onChangeText={(code) => setFamilyCode(code)}
            />
        </View>
    )
}