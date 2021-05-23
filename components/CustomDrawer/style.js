import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginBottom: 20,
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 10,
        marginTop: 20,
    },
    userName: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        margin: 20,
    },
    text: {
        color: "white",
        fontSize: 12,
        fontWeight: "normal",
    },
    money: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        margin: 20,
        backgroundColor: "rgba(252,60,13, 0.9)",
        height: 50,
        width: "80%",
        borderRadius: 5,
    }
});