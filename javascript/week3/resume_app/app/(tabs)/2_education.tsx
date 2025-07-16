import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Education() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EDUCATION</Text>

      {/* BE */}
      <View style={styles.entry}>
        <View style={styles.row}>
          <Text style={styles.institution}>RMD Sinhgad Technical Institute Campus</Text>
          <Text style={styles.location}>Pune, Maharashtra</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.details}>BE in Computer Science | CGPA: 8.06</Text>
          <Text style={styles.year}>2021</Text>
        </View>
      </View>

      {/* HSC */}
      <View style={styles.entry}>
        <View style={styles.row}>
          <Text style={styles.institution}>Nirmal Bethany Jr College</Text>
          <Text style={styles.location}>Pune, Maharashtra</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.details}>HSC | Percentage: 87.33%</Text>
          <Text style={styles.year}>2021</Text>
        </View>
      </View>

      {/* SSC */}
      <View style={styles.entry}>
        <View style={styles.row}>
          <Text style={styles.institution}>Sanjeevan Public School</Text>
          <Text style={styles.location}>Kolhapur, Maharashtra</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.details}>SSC | Percentage: 86.80%</Text>
          <Text style={styles.year}>2019</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  entry: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  institution: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    flexShrink: 1,
    maxWidth: "60%",
  },
  location: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    color: "#333",
    textAlign: "right",
  },
  details: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
  },
  year: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    textAlign: "right",
  },
});
