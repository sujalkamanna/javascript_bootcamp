import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile_Summary() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>PROFILE SUMMARY</Text>
      </View>
      <View>
        <Text style={styles.bodyText}>
          Python Developer with expertise in Data Analysis and scalable web
          development. Skilled in Power BI visualization and Agile
          methodologies, with a strong ability to collaborate on innovative
          software solutions.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20, // Ensures consistency with other sections
  },
  headerContainer: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 5, // reduced from 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Times New Roman",
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Times New Roman",
    textAlign: "justify",
    marginBottom: 5, // add to keep consistency
  },
});
