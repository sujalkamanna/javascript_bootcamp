import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailsPage() {
  return (
    <View>
      <Text>Details Screen </Text>
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
