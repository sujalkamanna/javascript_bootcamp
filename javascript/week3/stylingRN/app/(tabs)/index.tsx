import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (

    <View>
      <View style = {styles.darkMode}>
        <Text style = {styles.textcolor}>Style inheritance</Text>
      </View>

      <View style={[styles.container, styles.title]}>
        <Text>StyleSheet API</Text>
      </View>

      <View style={[styles.lightbluebox, styles.box, styles.boxShadow]}>
        <Text>Light blue box</Text>
      </View>
      <View
        style={[
          styles.lightgreenbox,
          styles.box,
          styles.boxShadow,
          styles.androidShadow,
        ]}
      >
        <Text>Light green box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 250,
    height: 250,
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
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 6,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  androidShadow: {
    elevation: 10,
  },
  darkMode:
  {
    backgroundColor:"black",
    
  },
  textcolor:{
    color :"#ffffff",
    fontWeight:"bold",
  }
});
