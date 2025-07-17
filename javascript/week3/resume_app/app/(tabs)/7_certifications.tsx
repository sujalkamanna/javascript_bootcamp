import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

// List of certifications
const certifications: string[] = [
  "NPTEL Introduction to Machine Learning",
  "NPTEL Python for Data Science",
  "Human Resource Management - HR Metrics",
  "C/C++ Certification",
  "Git and Github Bootcamp",
  "TechA Data Analytics Using Power BI",
  "Business Analyst and Project Manager Collaboration",
  "TCS Ion Introduction to Soft Skills",
  "TCS Ion Basics of Customer Services",
  "Microsoft Excel and Advance Excel"
];

export default function Certification() {
  return (
    <View style={styles.container}>
      <View >
        <View/>
      </View>
      
      <Text style={styles.certText}>
        {certifications.join(", ") + "."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerUnderline: {
    width: 4,
    height: 20,
    backgroundColor: '#1a73e8',
    marginRight: 10,
    borderRadius: 2,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    letterSpacing: 0.5,
    ...Platform.select({
      ios: { fontFamily: 'System' },
      android: { fontFamily: 'Roboto' },
    }),
  },
  certText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#374151',
    textAlign: 'justify',
    ...Platform.select({
      ios: { fontFamily: 'System' },
      android: { fontFamily: 'Roboto' },
    }),
  },
});
