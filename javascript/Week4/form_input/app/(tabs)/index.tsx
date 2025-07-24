import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Switch,
} from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [name, setname] = useState("");
  const [isDarkMode, setisDarkMode] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Add data</Text>
        <TextInput
          style={styles.text_input}
          onChangeText={setname}
          placeholder="email@example.com"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.text_input}
          placeholder="enter password"
          secureTextEntry
          // keyboardType= "numeric"
        />
        <Text>My name is {name}</Text>

        <TextInput
          style={[styles.text_input, styles.multiLineTExt]}
          placeholder="message"
          multiline
        />

        <View style={styles.switchContainer}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() =>
              setisDarkMode((previousState) => !previousState)
            }
            trackColor={{false:"#000000", true:"#lightblue"}}
            thumbColor="#f4f33f4"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text_input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  multiLineTExt: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});
