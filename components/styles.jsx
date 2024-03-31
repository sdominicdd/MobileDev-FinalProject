import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appView: {
    flex: 1,
    flexDirection: "column",
  },
  widget: {
    border: 20,
    backgroundColor: "#093145",
    margin: "3%",
    marginBottom: "5%",
    padding: "3%",
    maxHeight: "15vh",
    borderRadius: 10,
  },
  widgetTitleBar: {
    flexDirection: "row",
    display: "flex",
  },
  widgetTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10, // Adjust spacing as needed
    color: "#FFFFFF", // Change color as needed

    flex: 4,
  },
  createdTimeLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF", // Change color as needed

    flex: 2,
  },
  noteContent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // Change color as needed
    marginBottom: 10, // Adjust spacing as needed
  },
});