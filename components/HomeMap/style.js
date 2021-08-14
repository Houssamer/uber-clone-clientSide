import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('screen').height*0.45,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
    menu: {
        zIndex: 1,
        position: "absolute",
        top: 50,
        left: 20,
    },
    menu_icon: {
        backgroundColor: "white",
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgrey",
        borderWidth: 2,
    }
});