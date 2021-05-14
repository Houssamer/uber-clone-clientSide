import React from 'react';
import { View, Text } from 'react-native';
import CarRow from '../CarRow/CarRow';
import styles from './style';
import types from '../../assets/data/types';

const DestinationSearch = () => {
    return (
        <View style={styles.container}>
            {types.map(type => <CarRow car={type} key={type.id} />)}
        </View>
    )
}

export default DestinationSearch
