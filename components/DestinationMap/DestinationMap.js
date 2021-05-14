import React from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './style';
import cars from '../../assets/data/cars'

const DestinationMap = () => {
    return (
        <View style={styles.container}>
            <MapView 
                provider={'google'}
                style={styles.map}
                initialRegion={{
                    latitude: 30.472863493373456,
                    longitude: -8.877082002834296,
                    latitudeDelta: 0.045,
                    longitudeDelta: 0.045,
                  }}
            >
                {cars.map(car => (
                    <Marker 
                        key={car.id}
                        coordinate={{
                            latitude: car.latitude,
                            longitude: car.longitude,
                            latitudeDelta: 0,
                            longitudeDelta: 0,
                        }}
                    > 
                    <Image 
                        source={car.image}
                        style={{
                            width: 50, 
                            height: 50, 
                            resizeMode: "contain",
                            transform: [{
                                rotate: `${car.heading}deg`
                            }]
                        }}
                    />
                    </Marker>
                ))}
            </MapView>
        </View>
    )
}

export default DestinationMap
