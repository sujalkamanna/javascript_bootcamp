import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native";
import Box from "@/components/box";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text>flex box</Text>
        </View>
        <Box style={{ backgroundColor: "red" }}>Box1</Box>
        <Box style={{ backgroundColor: "#e0b9b9ff" }}>Box2</Box>
        <Box style={{ backgroundColor: "#fff000" }}>Box3</Box>
        {/* <Box style={{ backgroundColor: "#312d2dff" }}>Box4</Box>
        <Box style={{ backgroundColor: "plum" }}>Box5</Box> */}
      </View>
      {/* <View style = {{backgroundColor:"plum",flex:1}}>

      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-end",
    // flexDirection:"row",
    // marginTop: 50,
    borderWidth: 5,
    borderColor: "red",
    alignItems:"flex-start",
  },
});
