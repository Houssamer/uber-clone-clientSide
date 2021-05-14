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
    }
});