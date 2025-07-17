import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";

const publications = [
  {
    title: "Decentralized Funding Solutions: A Blockchain Approach to Crowdfunding -",
    linkText: "Link",
    linkUrl:
      "https://www.irjmets.com/uploadedfiles/paper//issue_1_january_2025/66020/final/fin_irjmets1736786511.pdf",
    source: "International Research Journal of Modernization in Engineering Technology and Science",
    date: "January 2025",
    description:
      "The paper explores how blockchain can address issues in traditional crowdfunding, proposing decentralized platforms and smart contracts to reduce fees, increase transparency, and enhance security and efficiency.",
  },
];

export default function Publication() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PUBLICATIONS / RESEARCH PAPERS</Text>

      {publications.map((pub, index) => (
        <View key={index} style={styles.entry}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {pub.title}{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(pub.linkUrl)}
              >
                {pub.linkText}
              </Text>
            </Text>
            <Text style={styles.date}>{pub.date}</Text>
          </View>

          <View style={[styles.row, { marginBottom: 6 }]}>
            <Text style={styles.source}>{pub.source}</Text>
            <View style={{ width: 40 }} /> {/* empty space for right alignment */}
          </View>

          <Text style={styles.description}>{pub.description}</Text>
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
    marginBottom: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    flexShrink: 1,
    maxWidth: "70%",
    textAlign: "left",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    textAlign: "right",
    flexShrink: 1,
    maxWidth: "30%",
  },
  source: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    flexShrink: 1,
    maxWidth: "100%",
    textAlign: "left",
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "Times New Roman",
    textAlign: "justify",
    lineHeight: 20,
    color: "#444",
  },
});
