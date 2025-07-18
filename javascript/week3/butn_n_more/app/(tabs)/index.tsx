import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextStyle,
  Button,
  Pressable,
  Alert,
  Modal,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { styles1 } from "./styles";

const local_image = require("../../assets/images/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>this is title</Text>

        <Image source={local_image} style={styles.img} />

        <Text style={styles1.styling}>
          this is a text with padding 16 and margin 10 imported from external
          file
        </Text>

        <Text style={{ backgroundColor: "blue", margin: 10, color: "plum" }}>
          this is some random text and added styling using inline css
        </Text>

        <Text style={containerStyle}>
          text written using object type declaration
        </Text>
      </View>

      <Button
        title="Press"
        onPress={() => Alert.alert("Button pressed")}
        color="midnightblue"
        disabled
      />

      <Pressable>
        <View>
          <Pressable onPress={() => alert("Image button pressed")}>
            <Image source={local_image} style={styles.img} />
          </Pressable>

          <Text
            style={{ backgroundColor: "green", padding: 10, color: "#fff" }}
            onPress={() => alert("Text button pressed")}
          >
            this is a pressable text button
          </Text>
        </View>
      </Pressable>

      <View style={{ height: 16 }} />

      <Pressable
        onLongPress={() => {
          alert("Opening modal...");
          setModalVisible(true);
        }}
        style={styles.lpbtn}
      >
        <Text style={styles.lpbtnText}>Long Press Button</Text>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="slide" //fade and slide
        transparent={false}
        presentationStyle="pageSheet" //formsheet or pagesheet
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <Text>Modal content</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <View>
        <StatusBar backgroundColor="#000000" barStyle="light-content" hidden />
      </View>
      <View>
        <ActivityIndicator />
        <ActivityIndicator size="large" color= "#999"/>
        <ActivityIndicator size="large" color="#3f3f3f" animating={true} />
      </View>
    </ScrollView>
  );
}

const containerStyle: TextStyle = {
  fontWeight: "100",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  lpbtn: {
    backgroundColor: "lightgray",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
  },
  lpbtnText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
