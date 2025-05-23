import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    logBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,

    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: "#ffffff",
        fontWeight: "bold"
    },
    price: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    contextLeft: {
        width: "36%",
        height: "100%",
        alignItems: "flex-start"
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end"
    }
})

export default styles;