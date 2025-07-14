import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { styles1 } from "./styles";

const local_image = require("../../assets/images/adaptive-icon.png");
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>this is title</Text>
        <Image source={local_image} style={styles.img} />
        <Text style={styles1.styling}>
          this is a text with padding 16 and margin 10 imported from external
          file
        </Text>
        <Text style={{ backgroundColor: "blue", margin: 10, color: "plum" }}>
          this is some random text and added styling using inline css
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "100",
  },
  img: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
