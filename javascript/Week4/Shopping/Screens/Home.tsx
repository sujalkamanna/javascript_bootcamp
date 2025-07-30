import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackparamList } from "@/app/(tabs)";
import ProductItem from "@/components/ProductItem";
import { demoProducts } from "./constants";
import Seperator from "@/components/Seperator";

export type HomeProps = NativeStackScreenProps<RootStackparamList, "Home">;

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={demoProducts}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Details", {
                product: item,
              });
            }}
          >
            <ProductItem product={item}></ProductItem>
          </Pressable>
        )}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "FFFFFF",
  },
});
