import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import DestinationScreen from '../Screens/DestinationScreen/DestinationScreen';



const Stack = createStackNavigator();

const Root = () => {
    return (
            <Stack.Navigator 
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen}  />
                <Stack.Screen name="DestinationScreen" component={DestinationScreen}  />
            </Stack.Navigator> 
    )
}

export default Root;
