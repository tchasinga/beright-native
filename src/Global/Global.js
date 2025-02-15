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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    marginTop: 10,
  },
  designResult: {
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  Texter: {
    flex: 1,
    color: "#000", // Set text color to black
  },
  dateText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 10,
  },
  priorityText: {
    fontSize: 12,
    color: "#ff0000",
    marginLeft: 10,
  },
  labelText: {
    fontSize: 14,
    color: "#007bff",
    marginLeft: 10,
  },
  newText: {
    fontSize: 15,
    color: "#181024",
    fontWeight: "bold",
    marginTop: 5,
  },
  subText: {
    fontSize: 13,
    color: "#666",
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  datePickerText: {
    fontSize: 16,
    marginVertical: 10,
  },
  priorityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  priorityLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  priorityButton: {
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
  },
  selectedPriority: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  subtasksContainer: {
    marginTop: 10,
  },
  subtaskText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  todoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoBody: {
    marginTop: 10,
  },
  todoActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
});