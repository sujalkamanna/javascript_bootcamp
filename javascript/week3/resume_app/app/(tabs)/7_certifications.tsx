import React from "react";
import { View, Text, StyleSheet } from "react-native";

const certificationsText = `NPTEL Introduction to Machine Learning, NPTEL Python for Data Science, Human Resource Management - HR Metrics, C/C++ Certification, Git and Github Bootcamp, TechA Data Analytics Using Power BI, Business Analyst and Project Manager Collaboration, TCS Ion Introduction to Soft Skills, TCS Ion Basics of Customer Services, Microsoft Excel and Advance Excel.`;

export default function Certification() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CERTIFICATIONS</Text>
      <Text style={styles.certText}>{certificationsText}</Text>
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
    marginBottom: 10,
  },
  certText: {
    fontSize: 14,
    fontFamily: "Times New Roman",
    lineHeight: 20,
    textAlign: "justify",
    color: "#000000",
  },
});
