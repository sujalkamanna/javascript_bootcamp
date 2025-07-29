import { StyleSheet, Text, View } from "react-native";
import React from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@/Screens/Home";
import Details from "@/Screens/Details";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  offerPercentage: number;
  rating: number;
  ratingCount: number;
  tags: string[];
}


export type RootStackparamList = {
  Home: undefined;
  Details: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackparamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Trending Products",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Product Details",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
