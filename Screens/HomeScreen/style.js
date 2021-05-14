import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    covidText: {
        backgroundColor: "black",
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