import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NoteListItem from "./components/noteListItem";
import styles from "./components/styles";

import moment from "moment";

const currentTime = moment().format("MMMM DD, YYYY");

export default function App() {
  const notebooks = [];
  notebooks.push(
    {
      noteTitle: "C++",
      noteContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      createdTime: currentTime,
    },
    {
      noteTitle: "Java",
      noteContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      createdTime: currentTime,
    },
    {
      noteTitle: "Python",
      noteContent:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
      createdTime: currentTime,
    }
  );

  console.log("Size of array is " + notebooks.length);

  return (
    <View>
      <FlatList
        data={notebooks}
        renderItem={({ item }) => <NoteListItem note={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
