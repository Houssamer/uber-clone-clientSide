import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height*0.43,
        backgroundColor: "white",
        alignItems: "center",
    },
    input: {
        backgroundColor: "lightgrey",
        height: 70,
        width: "95%",
        justifyContent: "center",
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    inputText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "grey",
        marginLeft: 10,
    },
    home: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        width: "95%",
        borderTopWidth: 1,
        borderTopColor: "lightgrey",
        height: 70,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    icon: {
        backgroundColor: "#FC3C0D",
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
    },
    homeText: {
        fontSize: 16,
        fontWeight: "bold",
    }
});