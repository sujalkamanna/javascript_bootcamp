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

{/* 
  
  import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [name, setName] = useState("");

  // Load the stored name when the component mounts
  useEffect(() => {
    const loadName = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        if (storedName) {
          setName(storedName);
        }
      } catch (error) {
        console.error("Error loading name:", error);
      }
    };
    loadName();
  }, []);

  // Save the name to AsyncStorage whenever it changes
  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      console.log("Name saved successfully!");
    } catch (error) {
      console.error("Error saving name:", error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View>
        <Text>Hello</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Button title="Save Name" onPress={handleSave} />
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

  */}