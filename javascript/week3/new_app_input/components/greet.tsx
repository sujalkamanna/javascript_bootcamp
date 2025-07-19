import React ,{useState} from "react";
import { View, Text, TextInput} from "react-native";
// import {App} from "../app/(tabs)/index"

function Greet() {
    const [name1, setname1] = useState("")
  return (
    <View>
        <TextInput value = {name1} onChangeText={setname1} />
      <Text >Hello , {name1}</Text>
    </View>
  );
}

export default Greet;
