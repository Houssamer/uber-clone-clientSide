import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';


const HomeSearch = () => {
    const navigation = useNavigation();
    function toSearch() {
        navigation.navigate("SearchScreen");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.input} activeOpacity={0.7} onPress={toSearch}>
                <Text style={styles.inputText}>Where To?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.home}>
                    <AntDesign name="home" size={24} color="white" />
                </View>
                <Text style={styles.homeText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.icon}>
                    <MaterialIcons name="favorite" size={24} color="white" />
                </View>
                <Text style={styles.homeText}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
                <View style={styles.icon}>
                    <MaterialIcons name="work" size={24} color="white" />
                </View>
                <Text style={styles.homeText}>Work</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeSearch
