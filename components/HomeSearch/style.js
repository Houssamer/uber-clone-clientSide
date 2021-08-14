import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height*0.43,
        backgroundColor: "white",
        alignItems: "center",
    },
    input: {
        backgroundColor: "lightgrey",
        height: 65,
        width: "95%",
        justifyContent: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    inputText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "grey",
        marginLeft: 10,
    },
    options: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        width: "95%",
        height: 70,
        shadowOpacity: 0.7,
        padding: 10,
        marginTop: 10,
    },
    home: {
        backgroundColor: "#FC3C0D",
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
    },
    icon: {
        backgroundColor: "lightgrey",
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
    },
    homeText: {
        fontSize: 16,
        fontWeight: "bold",
    }
});