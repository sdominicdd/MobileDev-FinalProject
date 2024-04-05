import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import NoteSummary from "./components/noteSummary";
import { useReducer, useEffect } from "react";

import * as utils from "./components/utilites";

import CreateOrEditNote from "./components/createOrEdit";

import styles from "./components/styles";

import moment from "moment";

const currentTime = moment().format("MMMM DD, YYYY");

import * as FileSystem from "expo-file-system";

const NotesList = ({ navigation, route }) => {
  const initialState = {
    notes: [],
  };

  const [state, dispatch] = useReducer(utils.reducer, initialState);

  useEffect(() => {
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

      // Write state to file
      writeNotesToFile();
    }

    ReadNotesFromFile();
  }, [route.params]);

  const writeNotesToFile = async () => {
    await FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + "notes",
      JSON.stringify(state.notes)
    );
    console.log("Write to file completed ");
  };

  const ReadNotesFromFile = async () => {
    var fileContents = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "notes"
    );
    console.log("file read done." + fileContents);
    dispatch({
      notes: JSON.parse(fileContents),
    });
  };

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
      params: note,
      merge: true,
    });
  };

  const onDeleteNote = (id) => {
    console.log("onDelete: " + id);
    let notes = state.notes.filter((note) => note.id !== id); // Corrected line
    dispatch({
      notes: notes,
    });
    // Write state to file
    writeNotesToFile();
  };

  return (
    <View style={styles.notesListContainer}>
      <View style={styles.addNoteButton}>
        <Button title="Add a note" onPress={onAddNote}></Button>
      </View>
      <View style={styles.notesList}>
        <FlatList
          data={state.notes.reverse()}
          renderItem={({ item }) => (
            <NoteSummary
              note={item}
              onEditNote={onEditNote}
              onDeleteNote={onDeleteNote}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default NotesList;
