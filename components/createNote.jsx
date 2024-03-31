import { useReducer } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";

import * as utils from "./utilites.js";

const CreateNote = ({ navigation, route }) => {
  const initialState = {
    titleInput: "",
    contentInput: "",
    isSaveBtnActive: false,
  };

  const [state, dispatch] = useReducer(utils.reducer, initialState);

  // Method to check if inputs for title and content are valid, if yes. Button will be enabled
  const validateInputs = () => {
    if (state.titleInput.length > 0 && state.contentInput.length > 0) {
      dispatch({
        isSaveBtnActive: true,
      });
    }
  };

  // Below method will be called when the save button is clicked.
  const onSave = () => {
    navigation.navigate({
      name: "Notes List",
      params: { title: state.titleInput, content: state.content },
      merge: true,
    });
  };

  return (
    <View>
      <Text style={styles.pageTitle}>Create a new note</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Enter title here"
          value={state.titleInput}
          onChangeText={(val) => {
            dispatch({ titleInput: val });
            validateInputs();
          }}
        ></TextInput>

        <TextInput
          style={styles.contentInput}
          placeholder="Enter note contents here"
          value={state.contentInput}
          onChangeText={(val) => {
            dispatch({ contentInput: val });
            validateInputs();
          }}
          numberOfLines={10}
        ></TextInput>

        <Button
          title="Save Note"
          disabled={!state.isSaveBtnActive}
          onPress={onSave}
        ></Button>
      </View>
    </View>
  );
};

export default CreateNote;
