import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View>
      <View style={[styles.container, styles.title]}>
        <Text>StyleSheet API</Text>
      </View>

      <View style={[styles.lightbluebox, styles.box]}>
        <Text>Light blue box</Text>
      </View>
      <View style={[styles.lightgreenbox, styles.box]}>
        <Text>Light green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  title: {
    padding: 10,
  },
  lightbluebox: {
    backgroundColor: "lightblue",
  },
  lightgreenbox: {
    backgroundColor: "lightgreen",
  },
});
