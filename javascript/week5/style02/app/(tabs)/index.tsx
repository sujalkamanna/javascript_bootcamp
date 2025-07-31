import {
  Platform,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FlatCard from "@/components/flatCard";
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
