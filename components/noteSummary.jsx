/**
 *
 */

import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as SMS from "expo-sms";

import styles from "./styles";

import IconButton from "./iconButton";

const NoteSummary = (props) => {
  const EditNote = () => {
    props.onEditNote(props.note.id);
  };

  const sendSMS = async () => {
    let isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        [""],
        `Title:${props.note.title}\nNote:${props.note.content}`
      );
      console.log(result);
    } else {
      Alert("SMS not available on this device.");
    }
  };

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
          onPress={sendSMS}
          iconName="share"
          buttonText={"SMS"}
        ></IconButton>

        <IconButton
          style={styles.footerButton}
          onPress={EditNote}
          iconName="edit"
          buttonText={"Edit"}
        ></IconButton>

        <IconButton
          style={styles.footerButton}
          onPress={() => {
            props.onDeleteNote(props.note.id);
          }}
          iconName="remove"
          buttonText={"Delete"}
        ></IconButton>
      </View>
    </View>
  );
};

export default NoteSummary;
