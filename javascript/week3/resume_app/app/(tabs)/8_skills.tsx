import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SKILLS</Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Programming Languages: </Text>
        Python, Java (Core), C/C++, SQL, HTML/CSS, Django, OOP.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Languages Frameworks & Libraries: </Text>
        Django, HTML/CSS, Bootstrap, Pandas, NumPy, Streamlit.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Tools: </Text>
        MS-Office, VS Code, Eclipse, Pycharm, Git, GitHub, Bootstrap, PIP, CMD,
        Linux, Windows, SDLC, Agile, Versioning, Version Controlling, Excel
        (VLOOKUP, PIVOT Tables, PIVOT Charts), Advance Excel, Power Query, Power
        Pivot, Power BI.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Soft Skills: </Text>
        Professionalism, Problem Solving, Communication, Presentation, Team
        Collaboration, Adaptability, Time Management, Social Media Management,
        Project Management, Tech Support, IT Support, Consulting, Data Analysis,
        Dashboard Creation, Management, Talent Acquisition, Technical
        Recruitment, Data Entry, Data Management, Customer Service, Client
        Support, Document Preparation, Editing, Presentations.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Languages: </Text>
        English (Fluent), Hindi (Fluent), Marathi (Fluent), Kannada (Fluent),
        German (Basic).
      </Text>
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
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Times New Roman",
    textAlign: "justify",
    lineHeight: 20,
    color: "#000000",
  },
  bold: {
    fontWeight: "bold",
  },
});
