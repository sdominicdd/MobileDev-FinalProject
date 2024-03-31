/**
 *
 */

import { View, Text } from "react-native";
import styles from "./styles";

const NoteListItem = (props) => {
  console.log(props);
  return (
    <View style={styles.widget}>
      <View style={styles.widgetTitleBar}>
        <Text style={styles.widgetTitle}>{props.note.noteTitle}</Text>
        <Text style={styles.createdTimeLabel}>{props.note.createdTime}</Text>
      </View>

      <Text style={styles.noteContent}>
        {props.note.noteContent.substring(0, 95)}
        {props.note.noteContent.length > 95 ? "..." : ""}
      </Text>
    </View>
  );
};

export default NoteListItem;
