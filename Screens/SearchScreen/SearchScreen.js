import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';


const SearchScreen = () => {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const navigation = useNavigation();

  function desti() {
    if (origin && destination)
    {
      navigation.navigate("DestinationScreen");
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.textInput}>
            <TextInput 
                placeholder="Where from?"
                style={styles.input}
                onChangeText={text => setOrigin(text)}
            />
            <TextInput 
                placeholder="Where to?"
                style={styles.input}
                onChangeText={text => setDestination(text)}
            />
        </View>
        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={desti}>
          <Text style={styles.button_text}>Next</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
