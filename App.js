import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CreateNote from "./components/createNote";
import NotesList from "./notesList";

import styles from "./components/styles";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes List">
        <Stack.Screen name="Notes List" component={NotesList}></Stack.Screen>
        <Stack.Screen
          name="Create New Note"
          component={CreateNote}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
