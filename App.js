import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DestinationScreen from './Screens/DestinationScreen/DestinationScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SearchScreen from './Screens/SearchScreen/SearchScreen';
import DrawerF from './navigation/Drawer';

export default function App() {
  return (
    <>
      <DrawerF />
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
