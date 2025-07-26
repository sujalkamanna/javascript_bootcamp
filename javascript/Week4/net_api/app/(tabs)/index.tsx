import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
// Define Post type
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async (Limit = 5) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${Limit}`
      );
      const data: Post[] = await response.json();
      setPostList(data);
      setisLoading(false);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  const ListHeader = () => (
    <Text style={styles.headerText}>📰 Latest Posts</Text>
  );

  const ListFooter = () =>
    loading ? (
      <ActivityIndicator size="small" color="#666" />
    ) : (
      <Text style={styles.footerText}>End of List</Text>
    );

  const ListEmpty = () => (
    <Text style={styles.emptyText}>No posts found 😕</Text>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="ffffff" />
        <Text>...Loading</Text>
      </SafeAreaView>
    );
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={ListEmpty}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 14,
    color: "#333",
  },
  separator: {
    height: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
    textAlign: "center",
  },
  footerText: {
    textAlign: "center",
    marginVertical: 15,
    color: "#888",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#888",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#00000f",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
