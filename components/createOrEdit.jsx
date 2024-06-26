import { useReducer, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles.jsx";

import uuid from "react-native-uuid";

import * as utils from "./utilites.js";

import moment from "moment";

const CreateOrEditNote = ({ navigation, route }) => {
  const initialState = {
    id: uuid.v4(),
    titleInput: "",
    contentInput: "",
    isSaveBtnActive: false,
  };

  const [state, dispatch] = useReducer(utils.reducer, initialState);

  // Method to check if inputs for title and content are valid, if yes. Button will be enabled
  const onInput = (input) => {
    let buttonMadeVisible = false;

    if (input.for === "title") {
      dispatch({
        titleInput: input.val,
      });
      buttonMadeVisible =
        input.val !== "" && state.contentInput.length > 0 ? true : false;
    } else {
      dispatch({
        contentInput: input.val,
      });
      buttonMadeVisible =
        input.val !== "" && state.titleInput.length > 0 ? true : false;
    }

    dispatch({
      isSaveBtnActive: buttonMadeVisible,
    });
  };

  // Below method will be called when the save button is clicked.
  const onSave = () => {
    navigation.navigate({
      name: "Notes List",
      params: {
        id: state.id,
        title: state.titleInput,
        content: state.contentInput,
        time: moment().format("MMMM DD, YYYY"),
      },
      merge: true,
    });
  };
  return (
    <View style={styles.createContainer}>
      <Text style={styles.pageTitle}>
        {route.params === undefined ? "Create a new note" : "Edit note"}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Enter title here"
          value={state.titleInput}
          onChangeText={(val) => {
            onInput({ for: "title", val: val });
          }}
        ></TextInput>

        <TextInput
          style={styles.contentInput}
          placeholder="Enter note contents here"
          value={state.contentInput}
          onChangeText={(val) => {
            onInput({ for: "content", val: val });
          }}
          numberOfLines={4}
          multiline={true}
        ></TextInput>

        <Button
          title="Save"
          disabled={!state.isSaveBtnActive}
          onPress={onSave}
        ></Button>
      </View>
    </View>
  );
};

export default CreateOrEditNote;
