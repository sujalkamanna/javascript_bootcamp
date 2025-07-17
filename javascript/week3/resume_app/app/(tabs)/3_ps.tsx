import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProfileSummary() {
  return (
    <View style={styles.card}>
      {/* Header with icon and title */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={22} color="#4F46E5" />
        </View>
        <Text style={styles.title}>Professional Summary</Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={18} color="#6B7280" />
        </TouchableOpacity>
      </View>
      
      {/* Content with subtle background */}
      <View style={styles.contentContainer}>
        <ScrollView>
          <Text style={styles.bodyText}>
            Python Developer with expertise in Data Analysis and scalable web
            development. Skilled in Power BI visualization and Agile
            methodologies, with a strong ability to collaborate on innovative
            software solutions.
          </Text>
        </ScrollView>
        
        {/* Signature element */}
        <View style={styles.signatureContainer}>
          <View style={styles.signatureLine} />
          <Text style={styles.signatureText}>Updated: July 2025</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 16,
    marginVertical: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
      },
      android: {
        elevation: 12,
        shadowColor: '#3F3D56',
      },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 16,
  },
  iconContainer: {
    backgroundColor: '#EEF2FF',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
    letterSpacing: 0.25,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'Roboto',
  },
  editButton: {
    padding: 6,
  },
  contentContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#4B5563',
    textAlign: 'left',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'Roboto',
    fontWeight: '400',
  },
  signatureContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  signatureLine: {
    width: 120,
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 4,
  },
  signatureText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'Roboto',
  },
});