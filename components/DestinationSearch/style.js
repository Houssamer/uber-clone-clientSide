import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: Dimensions.get('screen').height*0.4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -15,
        padding: 20,
    }
});