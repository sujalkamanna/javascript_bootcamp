import { View, Text, Image, ImageBackground, ScrollView } from "react-native";

const local_image = require("../../assets/images/adaptive-icon.png");

export default function App() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 60,
      }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
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

      <Image
        source={local_image}
        style={{ margin: 10, height: 100, width: 100 }}
        accessibilityLabel="Local app icon"
      />

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

      <Text style={{ margin: 20, paddingHorizontal: 10, textAlign: "center" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s...
      </Text>

      <Image
        source={local_image}
        style={{ margin: 10, height: 100, width: 100 }}
        accessibilityLabel="Local app icon"
      />
    </ScrollView>
  );
}
