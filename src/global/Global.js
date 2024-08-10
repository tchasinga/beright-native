import { StyleSheet, Platform } from "react-native";

export default globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center",
    },
});