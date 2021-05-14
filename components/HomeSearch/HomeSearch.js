import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const HomeSearch = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
                <Text style={styles.inputText}>Where To?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home}>
                <View style={styles.icon}>
                    <AntDesign name="home" size={24} color="white" />
                </View>
                <Text style={styles.homeText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.home}>
                <View style={styles.icon}>
                    <MaterialIcons name="favorite" size={24} color="white" />
                </View>
                <Text style={styles.homeText}>Favorite</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeSearch
