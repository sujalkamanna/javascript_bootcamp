import { View, Text, Image, ImageBackground } from "react-native";

const local_image = require("../../assets/images/adaptive-icon.png");

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
          this is a <Text style={{ color: "white" }}>white text</Text>
        </Text>
      </View>

      <Image source={local_image} style={{ margin: 10, height: 100, width: 100 }} />

      <Image
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        style={{ margin: 10, height: 300, width: 300 }}
      />

      <ImageBackground
        source={local_image}
        style={{
          width: 200,
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
