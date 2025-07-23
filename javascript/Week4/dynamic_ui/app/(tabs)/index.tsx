import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomButtonIos from "@/components/customButton/custombutton.ios";
import CustomButtonAnd from "@/components/customButton/custombutton.and";

export default function HomeScreen() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.texts}>Welcome!</Text>
          <CustomButtonAnd title="Press Me" onPress={() => alert("Pressed")} />
          <CustomButtonIos title="Press Me" onPress={() => alert("Pressed")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  texts: {
    fontWeight: "bold",
    textAlign: "center",
    ...Platform.select({
      ios: {
        colour: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        colour: "blue",
        fontSize: 25,
      },
      default: {
        colour: "white",
        fontSize: 24,
      },
    }),
  },
});
