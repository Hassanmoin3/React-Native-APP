import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Login from './Pages/Login-Signup/Login';
import {NavigationContainer} from "@react-navigation/native";
import { HomeStack } from './Navigations/HomeStack';
import BottomTab from './Navigations/BottomTab';


export default function App() {
  return (
    <NavigationContainer >
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
