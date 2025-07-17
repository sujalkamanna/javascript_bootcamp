import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform 
} from "react-native";

// Define a type for the experience object
interface Experience {
  title: string;
  location: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
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
      <View>
        <View/>
      </View>

      {experiences.map((exp, index) => (
        <View key={index} style={styles.entry}>
          <View style={styles.entryHeader}>
            <Text style={styles.title} numberOfLines={2}>
              {exp.title}
            </Text>
            <Text style={styles.location} numberOfLines={1}>
              {exp.location}
            </Text>
          </View>

          <View style={styles.entrySubheader}>
            <Text style={styles.company} numberOfLines={1}>
              {exp.company}
            </Text>
            <Text style={styles.duration} numberOfLines={1}>
              {exp.duration}
            </Text>
          </View>

          <Text style={styles.description}>{exp.description}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: '#1f2937',
    flex: 0.6,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  location: {
    fontSize: 14,
    color: '#6b7280',
    flex: 0.4,
    textAlign: "right",
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  entrySubheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  company: {
    fontSize: 14,
    fontStyle: "italic",
    color: '#374151',
    flex: 0.6,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  duration: {
    fontSize: 14,
    fontStyle: "italic",
    color: '#6b7280',
    flex: 0.4,
    textAlign: "right",
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