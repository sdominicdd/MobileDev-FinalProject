/**
 *
 */

import { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as SMS from "expo-sms";
import * as MailComposer from "expo-mail-composer";

import styles from "./styles";

import IconButton from "./iconButton";

const NoteSummary = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

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

  const sendEmail = async () => {
    try {
      let isAvailable = await MailComposer.isAvailableAsync();
      if (isAvailable) {
        let options = {
          recipients: ["stanleydominicdd@gmail.com"],
          subject: "Sharing a note created by me",
          body: `Title:${props.note.title}\nNote:${props.note.content}`,
        };
        MailComposer.composeAsync(options).then((result) => {
          console.log(result.status);
        });
      } else {
        console.log("Email not available on this device.");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const onSummaryClicked = () => {
    Alert.alert(props.note.title, props.note.content);
  };

  return (
    <Pressable onPress={onSummaryClicked}>
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
            onPress={sendEmail}
            iconName="share"
            buttonText={"Email"}
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
    </Pressable>
  );
};

export default NoteSummary;
