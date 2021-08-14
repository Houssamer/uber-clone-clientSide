import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';
import MapView from 'react-native-maps';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/routers';
import { useNavigation } from '@react-navigation/core';



const HomeMap = () => {

  const navigation = useNavigation();
  function OpenMenu() {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.menu} onPress={OpenMenu} >
        <View style={styles.menu_icon}>
          <Entypo name="menu" size={30} color="#FC3C0D" />
        </View>
      </TouchableOpacity>

      <MapView 
        provider={"google"}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 30.472863493373456,
          longitude: -8.877082002834296,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045,
        }}
      />
    </View>
  );
};

export default HomeMap;
