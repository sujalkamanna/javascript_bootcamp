import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Linking, 
  TouchableOpacity,
  Platform 
} from "react-native";

// Define a type for publication entry
interface PublicationEntry {
  title: string;
  linkText: string;
  linkUrl: string;
  source: string;
  date: string;
  description: string;
}

const publications: PublicationEntry[] = [
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
      <View >
        <View  />
      </View>

      {publications.map((pub, index) => (
        <View 
          key={index} 
          style={[
            styles.entry, 
            index !== publications.length - 1 && styles.entryBorder
          ]}
        >
          <View style={styles.entryHeader}>
            <Text style={styles.title} numberOfLines={2}>
              {pub.title}{" "}
              <TouchableOpacity onPress={() => Linking.openURL(pub.linkUrl)}>
                <Text style={styles.link}>{pub.linkText}</Text>
              </TouchableOpacity>
            </Text>
            <Text style={styles.date} numberOfLines={1}>
              {pub.date}
            </Text>
          </View>

          <View style={styles.entrySubheader}>
            <Text style={styles.source} numberOfLines={2}>
              {pub.source}
            </Text>
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
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: '#1f2937',
    flex: 0.7,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
  link: {
    color: "#1a73e8",
    textDecorationLine: "underline",
    marginLeft: 4,
  },
  date: {
    fontSize: 14,
    fontStyle: "italic",
    color: '#6b7280',
    flex: 0.3,
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
    marginBottom: 8,
  },
  source: {
    fontSize: 14,
    fontStyle: "italic",
    color: '#374151',
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