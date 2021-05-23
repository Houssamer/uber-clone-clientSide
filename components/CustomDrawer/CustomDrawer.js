import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { MaterialIcons } from '@expo/vector-icons';

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Image source={require('../../assets/images/profile.png')} style={styles.image} />
                <Text style={styles.userName}>User</Text>
                <TouchableOpacity activeOpacity={0.7} style={styles.money}>
                    <View>
                        <MaterialIcons name="attach-money" size={24} color="green" />
                    </View>
                    <Text style={styles.text}>Start Making money driving</Text>
                </TouchableOpacity>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer
