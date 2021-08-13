import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DrawerF from './navigation/Drawer';
import * as Location from 'expo-location';
import SignInScreen from './Screens/SignInScreen/SignInScreen';

Location.installWebGeolocationPolyfill();
navigator.geolocation.getCurrentPosition();


export default function App() {
  const [user, setUser] = useState();
  return (
    <>
    {
      !user ? (
        <SignInScreen />
      )
      :
      (
        <DrawerF />
      )
    }
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
