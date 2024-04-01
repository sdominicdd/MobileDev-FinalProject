/**
 *
 */

import { View, Text, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import IconButton from "./iconButton";

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

      <View style={styles.footerBar}>
        <IconButton
          onPress={null}
          iconName="share"
          buttonText={"Share"}
        ></IconButton>

        <IconButton
          style={styles.footerButton}
          onPress={null}
          iconName="edit"
          buttonText={"Edit"}
        ></IconButton>

        <IconButton
          style={styles.footerButton}
          onPress={null}
          iconName="remove"
          buttonText={"Delete"}
        ></IconButton>
      </View>
    </View>
  );
};

export default NoteSummary;
