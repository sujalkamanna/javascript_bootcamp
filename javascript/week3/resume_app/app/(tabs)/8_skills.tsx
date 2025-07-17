import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

// Define interfaces for skill categories
interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "Java (Core)",
      "C/C++",
      "SQL",
      "HTML/CSS",
      "Django",
      "OOP",
    ],
  },
  {
    category: "Languages Frameworks & Libraries",
    skills: ["Django", "HTML/CSS", "Bootstrap", "Pandas", "NumPy", "Streamlit"],
  },
  {
    category: "Tools",
    skills: [
      "MS-Office",
      "VS Code",
      "Eclipse",
      "Pycharm",
      "Git",
      "GitHub",
      "Bootstrap",
      "PIP",
      "CMD",
      "Linux",
      "Windows",
      "SDLC",
      "Agile",
      "Versioning",
      "Version Controlling",
      "Excel",
      "Power Query",
      "Power Pivot",
      "Power BI",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Professionalism",
      "Problem Solving",
      "Communication",
      "Presentation",
      "Team Collaboration",
      "Adaptability",
      "Time Management",
      "Social Media Management",
      "Project Management",
      "Tech Support",
      "IT Support",
      "Consulting",
      "Data Analysis",
      "Dashboard Creation",
      "Management",
      "Talent Acquisition",
      "Technical Recruitment",
      "Data Entry",
      "Data Management",
      "Customer Service",
      "Client Support",
      "Document Preparation",
      "Editing",
      "Presentations",
    ],
  },
  {
    category: "Languages",
    skills: [
      "English (Fluent)",
      "Hindi (Fluent)",
      "Marathi (Fluent)",
      "Kannada (Fluent)",
      "German (Basic)",
    ],
  },
];

export default function Skills() {
  return (
    <View style={styles.container}>
      <View>
        <View />
      </View>

      {skillCategories.map((category, index) => (
        <View key={index} style={styles.skillCategory}>
          <Text style={styles.categoryTitle}>{category.category}: </Text>
          <Text style={styles.skillsList}>{category.skills.join(", ")}</Text>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  headerUnderline: {
    width: 4,
    height: 20,
    backgroundColor: "#1a73e8",
    marginRight: 10,
    borderRadius: 2,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    letterSpacing: 0.5,
    ...Platform.select({
      ios: {
        fontFamily: "System",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  skillCategory: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
    ...Platform.select({
      ios: {
        fontFamily: "System",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
  skillsList: {
    fontSize: 14,
    lineHeight: 22,
    color: "#374151",
    textAlign: "justify",
    ...Platform.select({
      ios: {
        fontFamily: "System",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});
