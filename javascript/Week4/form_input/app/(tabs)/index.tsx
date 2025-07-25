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
  Button,
  Image,
  KeyboardAvoidingView,

} from "react-native";
import { useState } from "react";
export default function HomeScreen() {
  const [name, setname] = useState("");
  const [isDarkMode, setisDarkMode] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

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
            trackColor={{ false: "#ebd5e6ff", true: "plum" }}
            thumbColor="#ddd0d0ff"
          />
        </View>

        <KeyboardAvoidingView behavior="padding"
        style={styles.container1}>
          <View style={styles.form}>
            <Image
              source={require("../../assets/images/adaptive-icon.png")}
              style={{ height: 50, width: 50, alignSelf: "center" }}
            />

            <Text>UserName</Text>
            <TextInput
              placeholder="Enter Username"
              style={styles.formInput}
              value={userName}
              onChangeText={setuserName}
              keyboardType="email-address"
            />
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.formInput}
              value={password}
              onChangeText={setpassword}
            />
            <Button title="login" onPress={() => {}} />
          </View>
        </KeyboardAvoidingView>
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
  container1: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  formInput: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: "white",
  },
});
