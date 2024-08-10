import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    titleText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
    },
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? 30 : 0,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: "#ddd",
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 15,
    },
    AddingMargin :{
        marginHorizontal: 10,
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center",
    },
});