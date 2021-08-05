import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },
    textInput: {
        position: "absolute",
        top: 50,
        width: "90%",
        height: "100%",
    },
    input: {
        backgroundColor: "lightgrey",
        color: "black",
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: "#FC3C0D",
        position: "relative",
        top: Dimensions.get('window').height*0.75,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    button_text: {
        color: "white",
        fontWeight: "bold",
    }
})