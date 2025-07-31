import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>flatCard</Text>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    
  },
});
