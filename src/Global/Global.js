import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "#007bff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
  },
  designResult: {
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  Texter: {
    flex: 1,
  },
  dateText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 10,
  },
  newText: {
    fontSize: 15,
    color: "#181024",
    fontWeight: "bold",
    marginVertical: 10,
  },
  subText: {
    fontSize: 13,
    color: "#666",
    marginVertical: 5,
  },
  ImageStyle: {
    width: 300,
    height: 300,
    borderRadius: 25,
  },
  ButionBtn: {
    backgroundColor: "#007bff",
    padding: 12,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 32,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
