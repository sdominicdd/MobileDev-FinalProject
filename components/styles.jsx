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
    textAlign: "right",

    flex: 2,
  },
  noteContent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // Change color as needed
    marginBottom: 10, // Adjust spacing as needed
  },
  footerBar: {
    display: "flex",
    flexDirection: "row",
    padding: 3,
  },
  footerButton: {
    flex: 1,
    margin: 2,
    padding: 2,
    backgroundColor: "#107896",
    alignItems: "center",
  },
  iconButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF", // Change color as needed
  },

  /* For CreateOrEditNote */
  createContainer: {
    backgroundColor: "#EFD469",
    height: "100vh",
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#373D3F",
  },
  inputContainer: {
    margin: 2,
    padding: 2,
    display: "flex",
    flexDirection: "column",
  },
  titleInput: {
    borderColor: "#373D3Fks",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 3,
    marginBottom: 8,
    fontSize: 20,
    color: "#093145",
  },
  contentInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 3,
    fontSize: 18,
    color: "#093145",
    textAlignVertical: "top", // To align text at the top
  },

  /**For the notes list page */
  notesList: {
    overflow: "scroll",
  },
});
