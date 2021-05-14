import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';


const SearchScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textInput}>
            <TextInput 
                placeholder="Where from?"
                style={styles.input}
            />
            <TextInput 
                placeholder="Where to?"
                style={styles.input}
            />
        </View>
        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
    </View>
  );
};

export default SearchScreen;
