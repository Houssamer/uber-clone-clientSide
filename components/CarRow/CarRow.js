import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { FontAwesome } from '@expo/vector-icons';


const CarRows = ({car}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}> 
            <Image 
                source={car.image}
                style={styles.image}
            />
            <Text style={styles.type}>{car.type}</Text>
            <View style={styles.money}>
                <FontAwesome name="money" size={24} color="green" />
                <Text style={styles.price}>${car.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CarRows
