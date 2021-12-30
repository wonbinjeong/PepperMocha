import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getLoggedInUserInfo } from '../firebase/users';
import {loggingOut} from '../firebase/auth';

interface DashboardScreenProps {
    navigation: any,
};

export const Dashboard: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    async function getUserInfo() {
      let userInfo = await getLoggedInUserInfo();
      if (!userInfo?.exists) {
        Alert.alert("No user data found!");
      } else {
        let user = userInfo.data();
        setFirstName(user?.firstName);
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Hi {firstName}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  }
})