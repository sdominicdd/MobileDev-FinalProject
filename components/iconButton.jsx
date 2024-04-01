import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const IconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.footerButton}>
      <View>
        <Icon name={props.iconName} size={25} color={"#FFFFFF"} />
        <Text style={styles.iconButtonText}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
