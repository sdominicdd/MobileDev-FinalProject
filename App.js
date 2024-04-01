import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CreateOrEditNote from "./components/createOrEdit";
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
          component={CreateOrEditNote}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
