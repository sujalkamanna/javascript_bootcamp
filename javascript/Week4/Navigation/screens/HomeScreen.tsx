import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/(tabs)";

type HomeProp = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreens({ navigation }: HomeProp) {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate("Details",{productId:"12345"})}
      />
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
