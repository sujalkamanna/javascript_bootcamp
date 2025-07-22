import { Platform, View, StyleSheet } from "react-native";
import { Text, Dimensions } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}
const window_width = Dimensions.get("window").width;
const window_height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: window_width > 500 ? "70%" : "90%",
    height: window_width > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: window_width > 500 ? 50 : 24,
  },
});
