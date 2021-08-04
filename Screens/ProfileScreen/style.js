import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image_container: {
        height: Dimensions.get('screen').height*0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    User: {
        marginTop: -15,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    inputs_container: {
        marginTop: 10,
    },
    input_container: {
        
    },
    input: {
        backgroundColor: "lightgrey",
        width: "90%",
        height: 40,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignSelf: "center"
    },
    text: {
        margin: 5,
        marginLeft: 30,
        fontWeight: "bold",
        textAlign: "left",
    },
    checkbox_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    checkbox: {
        marginRight: 5,
        marginLeft: 15,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#FC3C0D",
        height: 45,
        width: "80%",
    },
    button_text: {
        color: "white", 
        fontWeight: "bold",
    }
});