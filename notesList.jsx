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

  const onEditNote = (id) => {
    console.log("onEditNote: " + id);
    let note = state.notes.filter((note) => note.id == id);
    console.log(note);
    navigation.navigate({
      name: "Create New Note",
      params: { note: note },
      merge: true,
    });
  };

  const onDeleteNote = (id) => {
    console.log("onDelete: " + id);
    let notes = state.notes.filter((note) => note.id !== id); // Corrected line
    dispatch({
      notes: notes,
    });
  };

  return (
    <View>
      <FlatList
        data={state.notes}
        renderItem={({ item }) => (
          <NoteSummary
            note={item}
            onEditNote={onEditNote}
            onDeleteNote={onDeleteNote}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Button title="Add a note" onPress={onAddNote}></Button>
      </View>
    </View>
  );
};

export default NotesList;
