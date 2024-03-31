import { View, Text, TextInput, Button } from "react-native";

const CreateNote = () => {
  return (
    <View>
      <Text>Create a new note</Text>
      <View>
        <TextInput placeholder="Enter title here">Title</TextInput>
        <TextInput placeholder="Enter note contents here">Content</TextInput>
        <Button title="Save Note"></Button>
      </View>
    </View>
  );
};

export default CreateNote;
