import { useState, useEffect } from "react";
import {
  Platform,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ViewStyle,
} from "react-native";

export default function HomeScreen() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });

    return () => subscription?.remove();
  }, []);

  const { width: window_width, height: window_height } = dimensions.window;

  const dynamicBoxStyle: ViewStyle = {
    width: window_width > 500 ? "70%" : "90%",
    height: window_width > 600 ? "60%" : "90%",
  };

  const dynamicTextStyle = {
    fontSize: window_width > 500 ? 50 : 24,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, dynamicBoxStyle]}>
        <Text style={dynamicTextStyle}>Welcome!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
