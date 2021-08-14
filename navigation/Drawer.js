import React from 'react'
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Route from '../navigation/Root';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerF = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={(props) => <CustomDrawer {...props} />}
                drawerContentOptions={{activeTintColor: "#FC3C0D"}}
            >
                <Drawer.Screen name="Home" component={Route}  />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerF
