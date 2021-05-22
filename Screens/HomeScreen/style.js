import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    covidText: {
        backgroundColor: "#FC3C0D",
        height: Dimensions.get('screen').height*0.12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -15,
    }, 
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        margin: 15,
    },
    subtitle: {
        color: "white",
        fontSize: 12,
        marginRight: 15,
        marginLeft: 15,
    }
});