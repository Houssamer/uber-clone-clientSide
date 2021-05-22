import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    textInput: {
        position: "absolute",
        top: 50,
        width: "100%",
    },
    input: {
        backgroundColor: "lightgrey",
        height: 50,
        margin: 10,
        marginLeft: 50,
        padding: 15,
        color: "black",
    },
    circle: {
        position: "absolute",
        top: 80,
        left: 25,
        width: 10,
        height: 10,
        backgroundColor: "black",
        borderRadius: 5,
    },
    line: {
        position: "absolute",
        top: 95,
        left: 29,
        width: 2,
        height: 50,
        backgroundColor: "black",

    },
    square: {
        position: "absolute",
        top: 150,
        left: 25,
        width: 10,
        height: 10,
        backgroundColor: "black",
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: "#FC3C0D",
        position: "absolute",
        bottom: 150,
        left: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    button_text: {
        color: "white",
        fontWeight: "bold",
    }
})