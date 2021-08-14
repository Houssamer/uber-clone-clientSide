import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './style';

const SearchRow = ({data}) => {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Entypo name="location" size={24} color="#FC3C0D" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{data.description}</Text>
            </View>
        </View>
    )
}

export default SearchRow
