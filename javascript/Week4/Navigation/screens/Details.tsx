import { StyleSheet, Text, View ,Button} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/(tabs)";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsPage({ route }: DetailsProps) {
  const { productId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text>Details :{productId} </Text>
      <Button title="Go to home" onPress={()=> navigation.navigate("Home") }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  smallText: {
    color: "#000000",
  },
});
