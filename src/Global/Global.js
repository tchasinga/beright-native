import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingHorizontal: 18,
    borderRadius: 15,
  },

  designResult: {
    backgroundColor: "#fff95b",
    borderRadius: 9,
    paddingHorizontal: 6,
    paddingVertical: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",    
  },

  Texter : {
    fontSize: 15,
    color: "#181024",
    fontWeight: "heavy",
    marginVertical: 10,
  },

  ButionBtn: {
    backgroundColor: "coral",
    padding: 9,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15,
    marginBottom: 32,
  },

  AddingMargin: {
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
