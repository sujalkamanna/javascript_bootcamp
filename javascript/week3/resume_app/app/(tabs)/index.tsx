import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Name_Social from "./1_name_social";
import Education from "./2_education";
import Profile_Summary from "./3_ps";
import Professional_Experience from "./4_pe";
import Projects from "./5_projects";
import Certification from "./7_certifications";
import Skills from "./8_skills";
import Publication from "./6_publications";
export default function HomeScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Name_Social />
      <Education />
      <Profile_Summary />
      <Professional_Experience />
      <Projects />
      <Publication />
      <Certification />
      <Skills />
    </ScrollView>
  );
}