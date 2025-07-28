import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreens() {
  return (
    <View>
      <Text>HomeScreens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smallText: {
    color: "#000000",
  },
});
