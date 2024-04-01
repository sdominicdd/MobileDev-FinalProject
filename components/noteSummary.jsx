/**
 *
 */

import { View, Text } from "react-native";
import styles from "./styles";

const NoteSummary = (props) => {
  console.log(props);
  return (
    <View style={styles.widget}>
      <View style={styles.widgetTitleBar}>
        <Text style={styles.widgetTitle}>{props.note.title}</Text>
        <Text style={styles.createdTimeLabel}>{props.note.time}</Text>
      </View>

      <Text style={styles.noteContent}>
        {props.note.content.substring(0, 95)}
        {props.note.content.length > 95 ? "..." : ""}
      </Text>
    </View>
  );
};

export default NoteSummary;
