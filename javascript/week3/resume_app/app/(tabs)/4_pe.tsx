import React from "react";
import { View, Text, StyleSheet } from "react-native";

const experiences = [
  {
    title: "Web Developer Intern Python-Django",
    location: "Pune, Maharashtra",
    company: "Elite Softwares",
    duration: "Dec 2023 – Jan 2024",
    description:
      "Developed Django web apps, optimizing performance and delivering impactful solutions. Collaborated with senior developers to enhance teamwork and launch successful websites.",
  },
  {
    title: "Data Visualization Intern",
    location: "Pune, Maharashtra",
    company: "Infosys",
    duration: "Feb 2025 - Mar 2025",
    description:
      "Successfully completed a project-based internship at Infosys Springboard on Air Quality Index (AQI) Visualization, involving data analysis, visualization techniques, and interpretation of AQI trends.",
  },
];

export default function Professional_Experience() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PROFESSIONAL EXPERIENCE</Text>

      {experiences.map((exp, index) => (
        <View key={index} style={styles.entry}>
          {/* First row: Title left, Location right */}
          <View style={styles.row}>
            <Text style={styles.title}>{exp.title}</Text>
            <Text style={styles.location}>{exp.location}</Text>
          </View>

          {/* Second row: Company left, Duration right */}
          <View style={[styles.row, { marginBottom: 6 }]}>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.duration}>{exp.duration}</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>{exp.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20, // Added for consistency
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  entry: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    flexShrink: 1,
    maxWidth: "60%",
    textAlign: "left",
  },
  location: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    color: "#333",
    textAlign: "right",
    flexShrink: 1,
    maxWidth: "40%",
  },
  company: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    flexShrink: 1,
    maxWidth: "60%",
    textAlign: "left",
  },
  duration: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    textAlign: "right",
    flexShrink: 1,
    maxWidth: "40%",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Times New Roman",
    textAlign: "justify",
    color: "#444",
  },
});
