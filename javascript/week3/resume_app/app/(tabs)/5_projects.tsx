import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform 
} from "react-native";

// Define a type for project entry
interface ProjectEntry {
  title: string;
  description: string;
}

const projects: ProjectEntry[] = [
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
      <View >
        <View/>
      </View>

      {projects.map((project, index) => (
        <View 
          key={index} 
          style={[
            styles.entry, 
            index !== projects.length - 1 && styles.entryBorder
          ]}
        >
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
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  entry: {
    marginBottom: 16,
    paddingBottom: 16,
  },
  entryBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 6,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#374151',
    textAlign: "justify",
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});
