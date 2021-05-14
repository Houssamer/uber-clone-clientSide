import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import HomeMap from '../../components/HomeMap/HomeMap';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import styles from './style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/** map */}
      <HomeMap />
      {/** Covid message */}
      <View style={styles.covidText}>
          <Text style={styles.title}>Covid-19 notice</Text>
          <Text style={styles.subtitle}>We will do all we can to keep our services running as smoothly as possible</Text>
      </View>
      {/** Search component */}
      <HomeSearch />

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
