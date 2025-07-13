import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>this is a text</Text>
      </View>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>
          this is a<Text style={{ color: "white" }}> white text</Text>
        </Text>
      </View>
    </View>
  );
}
