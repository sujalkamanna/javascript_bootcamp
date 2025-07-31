import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Redd</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    flex:1,
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#EF5354", // Red
  },
  cardTwo: {
    backgroundColor: "#50dbb4", // Green
  },
  cardThree: {
    backgroundColor: "#5DA3FA", // Blue
  },
});
