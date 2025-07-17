import React from "react";
import { View, Text, StyleSheet } from "react-native";

const projects = [
  {
    title: "Django Employee Database",
    description:
      "Developed a Django-based Employee Management System to streamline and manage employee data within an organization, improving efficiency and data accessibility.",
  },
  {
    title: "Blinkit Sales Analysis Power BI Dashboard",
    description:
      "Developed a Power BI dashboard to analyze sales data for Blinkit, enhancing decision-making by providing insightful visualizations and reports.",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a responsive portfolio website with HTML, CSS, and JavaScript, featuring smooth navigation, interactive project sections, and seamless performance across devices.",
  },
];

export default function Projects() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PROJECTS</Text>

      {projects.map((project, index) => (
        <View key={index} style={styles.entry}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>
        </View>
      ))}
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
  entry: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  description: {
    fontSize: 14,
    fontFamily: "Times New Roman",
    textAlign: "justify",
    lineHeight: 20,
    color: "#444",
  },
});
