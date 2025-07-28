import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Button } from "react-native";

// Define the type of your navigation stack
type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "About"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export default function About({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Page</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
