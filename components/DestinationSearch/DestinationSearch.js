import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';


const DestinationSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upContainer}>
                <View style={styles.square}>
                    <Image 
                        source={require("../../assets/images/3d_car.png")}
                        style={styles.carImg}
                    />
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>Prix: 30dh</Text>
                </View>
            </View>
            <View style={styles.downContainer}>
                <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accepter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.annulerButton}>
                    <Text style={styles.annulerText}>Annuler</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DestinationSearch
