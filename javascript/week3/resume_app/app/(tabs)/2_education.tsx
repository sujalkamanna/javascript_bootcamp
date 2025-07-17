import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform 
} from "react-native";

// Define a type for education entry
interface EducationEntry {
  institution: string;
  location: string;
  details: string;
  year: string;
}

const educationEntries: EducationEntry[] = [
  {
    institution: "RMD Sinhgad Technical Institute Campus",
    location: "Pune, Maharashtra",
    details: "BE in Computer Science | CGPA: 8.06",
    year: "2021"
  },
  {
    institution: "Nirmal Bethany Jr College",
    location: "Pune, Maharashtra",
    details: "HSC | Percentage: 87.33%",
    year: "2021"
  },
  {
    institution: "Sanjeevan Public School",
    location: "Kolhapur, Maharashtra",
    details: "SSC | Percentage: 86.80%",
    year: "2019"
  }
];

export default function Education() {
  return (
    <View style={styles.container}>
      <View >
        <View />
      </View>

      {educationEntries.map((entry, index) => (
        <View 
          key={index} 
          style={[
            styles.entry, 
            index !== educationEntries.length - 1 && styles.entryBorder
          ]}
        >
          <View style={styles.entryHeader}>
            <Text style={styles.institution} numberOfLines={2}>
              {entry.institution}
            </Text>
            <Text style={styles.location} numberOfLines={1}>
              {entry.location}
            </Text>
          </View>

          <View style={styles.entryDetails}>
            <Text style={styles.details} numberOfLines={1}>
              {entry.details}
            </Text>
            <Text style={styles.year} numberOfLines={1}>
              {entry.year}
            </Text>
          </View>
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
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  institution: {
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
  entryDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
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
  year: {
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
});