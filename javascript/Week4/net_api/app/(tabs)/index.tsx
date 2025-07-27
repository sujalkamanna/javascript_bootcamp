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
  TextInput,
  Button,
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
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postBody, setpostBody] = useState("");
  const [postTitle, setpostTitle] = useState("");
  const [isPosting, setisPosting] = useState(false);
  const [error, setError] = useState("")

  const fetchData = async (limit = 5) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data: Post[] = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("")
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setIsLoading(false);
      setError("Failed to fetch list")
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addPost = async () => {
    if (!postTitle || !postBody) return;

    setisPosting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
          }),
        }
      );

      const newPost: Post = await response.json();
      setPostList((prevPosts) => [newPost, ...prevPosts]);
      // Add the new post at the top of the list
      setPostList((prevPosts) => [newPost, ...prevPosts]);

      // Reset input fields
      setpostTitle("");
      setpostBody("");
    } catch (error) {
      console.error("Failed to add post:", error);
    } finally {
      setisPosting(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(20);
    setRefreshing(false);
  };

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
    postList.length > 0 ? (
      <Text style={styles.footerText}>End of List</Text>
    ) : null;
  const ListEmpty = () => (
    <Text style={styles.emptyText}>No posts found 😕</Text>
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          value={postTitle}
          onChangeText={setpostTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Post Body"
          value={postBody}
          onChangeText={setpostBody}
        />
        <Button
          title={isPosting ? "Adding..." : "Add Post"}
          onPress={addPost}
          disabled={isPosting || !postTitle || !postBody}
        />
      </View>

      <FlatList
        data={postList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#ffffff",
    fontSize: 16,
  },
  listContent: {
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
    color: "#222",
  },
  bodyText: {
    fontSize: 14,
    color: "#444",
  },
  separator: {
    height: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 10,
    textAlign: "center",
    color: "#111",
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
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
});
