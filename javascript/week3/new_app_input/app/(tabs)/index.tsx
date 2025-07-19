import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput, Button } from "react-native";
import { useState } from "react";
import Greet from "@/components/greet";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [name1, setname1] = useState("");
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View>
        <Text>hello user</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setname}
          placeholder="email@example.com"
        />
        <TextInput
          style={styles.input}
          value={pass}
          onChangeText={setpass}
          placeholder="enter your password"
          secureTextEntry
          // keyboardType=""
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Text>My name is {name}</Text>
        <Button title="button" />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert("hello")}
          activeOpacity={0.7}
        >
          <Text style={styles.btnText}>TouchableOpac Button</Text>
        </TouchableOpacity>
        <View>
          <Greet />
          <Greet />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: { flex: 1, margin: 10, padding: 10, backgroundColor: "#fff" },
  btn: {
    padding: 12,
    margin: 10,
    backgroundColor: "#1692f7ff",
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    textDecorationColor: "#ffffff",
    // fontFamily: 'YourCustomFontName',
  },
});

// import React, { useState, useEffect } from "react";
// import {
//   Platform,
//   Text,
//   View,
//   ScrollView,
//   StyleSheet,
//   TextInput,
//   Button,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function HomeScreen() {
//   const [name, setName] = useState("");

//   // Load the stored name when the component mounts
//   useEffect(() => {
//     const loadName = async () => {
//       try {
//         const storedName = await AsyncStorage.getItem("name");
//         if (storedName) {
//           setName(storedName);
//         }
//       } catch (error) {
//         console.error("Error loading name:", error);
//       }
//     };
//     loadName();
//   }, []);

//   // Save the name to AsyncStorage whenever it changes
//   const handleSave = async () => {
//     try {
//       await AsyncStorage.setItem("name", name);
//       console.log("Name saved successfully!");
//     } catch (error) {
//       console.error("Error saving name:", error);
//     }
//   };

//   return (
//     <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
//       <View>
//         <Text>Hello</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//           placeholder="Enter your name"
//         />
//         <Button title="Save Name" onPress={handleSave} />
//         <Text>My name is {name}</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     flex: 1,
//     margin: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
// });
