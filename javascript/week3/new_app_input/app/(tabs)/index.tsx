import { Platform, Text, View, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [name, setname] = useState("");
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View>
        <Text>hello</Text>
        <TextInput style={styles.input} value={name} onChangeText={setname} />
        <Text>My name is {name}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});
