import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        marginTop: 10,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    type: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        flex: 1,
    },
    money: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 20,
    }
});