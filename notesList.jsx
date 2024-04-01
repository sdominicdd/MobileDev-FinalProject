import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import NoteSummary from "./components/noteSummary";
import { useReducer, useEffect } from "react";

import * as utils from "./components/utilites";

import CreateOrEditNote from "./components/createOrEdit";

import styles from "./components/styles";

import moment from "moment";

const currentTime = moment().format("MMMM DD, YYYY");

const NotesList = ({ navigation, route }) => {
  const initialState = {
    notes: [],
  };

  const [state, dispatch] = useReducer(utils.reducer, initialState);

  useEffect(() => {
    console.log("useEffect: " + route.params);
    if (route.params != undefined) {
      let existingNotes = state.notes;
      var existingIndex = existingNotes.findIndex(
        (note) => note.id == route.params.id
      );

      if (existingIndex == -1) {
        existingNotes.push(route.params);
      } else {
        existingNotes[existingIndex] = route.params;
      }

      dispatch({
        notes: existingNotes,
      });
    }
  }, [route.params]);

  const onAddNote = () => {
    navigation.navigate({
      name: "Create New Note",
      merge: true,
    });
  };

  return (
    <View>
      <FlatList
        data={state.notes}
        renderItem={({ item }) => <NoteSummary note={item} />}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Button title="Add a note" onPress={onAddNote}></Button>
      </View>
    </View>
  );
};

export default NotesList;
