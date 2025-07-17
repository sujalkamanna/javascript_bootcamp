import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";

export default function Name_Social() {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>SUJAL KAMANNA</Text>

      <View style={styles.linksRow}>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+919325309121")}>
          <Text style={styles.linkText}>+91 - 9325309121</Text>
        </TouchableOpacity>

        <Text style={styles.separator}> | </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:sujalkamanna2003@gmail.com")}
        >
          <Text style={styles.linkText}>sujalkamanna2003@gmail.com</Text>
        </TouchableOpacity>

        <Text style={styles.separator}> | </Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/sujalkamanna")
          }
        >
          <Text style={styles.linkText}>LinkedIn: sujalkamanna</Text>
        </TouchableOpacity>

        <Text style={styles.separator}> | </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/sujalkamanna")}
        >
          <Text style={styles.linkText}>GitHub: sujalkamanna</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  nameText: {
    fontSize: 18,
    fontFamily: "timesnewroman",
    fontWeight: "bold",
    marginBottom: 5,
  },
  linksRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: "#007AFF",
    marginHorizontal: 4,
    fontFamily: "timesnewroman",
    fontStyle: "italic",
    fontSize: 14,
  },
  separator: {
    color: "#000000",
  },
});
