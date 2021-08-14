import React from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './style';
import cars from '../../assets/data/cars'
import { useRoute } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API } from '../../config/keys';

const DestinationMap = () => {
    const route = useRoute();
    const {origin, destination } = route.params;

    const originLocation = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    };

    const destinationLocation = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
    };

    return (
        <View style={styles.container}>
            <MapView 
                provider={'google'}
                style={styles.map}
                showsUserLocation={true}
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

                <MapView.Marker coordinate={originLocation} />
                <MapView.Marker coordinate={destinationLocation} />
                <MapViewDirections 
                    origin={originLocation}
                    destination={destinationLocation}
                    apikey={GOOGLE_API}
                    strokeWidth={5}
                    strokeColor="#ff5000"
                />
            </MapView>
        </View>
    )
}

export default DestinationMap
