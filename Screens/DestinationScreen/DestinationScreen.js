import React from 'react';
import { View, Text } from 'react-native';
import DestinationMap from '../../components/DestinationMap/DestinationMap';
import DestinationSearch from '../../components/DestinationSearch/DestinationSearch';
import styles from './style';

const DestinationScreen = () => {
    return (
        <View style={styles.container}>

            {/* Destination Map */}

            <DestinationMap />

            {/* Destination Search */}
            
            <DestinationSearch />

        </View>
    )
}

export default DestinationScreen
