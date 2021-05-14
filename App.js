import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DestinationScreen from './Screens/DestinationScreen/DestinationScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SearchScreen from './Screens/SearchScreen/SearchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <DestinationScreen />
    </View>
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
