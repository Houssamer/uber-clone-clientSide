import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: Dimensions.get('screen').height*0.4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -25,
        padding: 20,
        alignItems: "center",
    },
    carImg: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    upContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        justifyContent: "space-between",
    },
    price: {
        backgroundColor: "#FC3C0D",
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "lightgrey",
        borderWidth: 2,
    },
    priceText: {
        color: "white",
        fontWeight: "bold",
    },
    downContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 30,
    },
    acceptButton: {
        width: "45%",
        height: 60,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "#FC3C0D",
        borderColor: "lightgrey",
    },
    annulerButton: {
        width: "45%",
        height: 60,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        borderColor: "#FC3C0D",
    },
    acceptText: {
        color: "white",
        fontWeight: "bold",
    },
    annulerText: {
        fontWeight: "bold"
    },
    square: {
        width: 200,
        height: 200,
        backgroundColor: "lightgrey",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
    }
});