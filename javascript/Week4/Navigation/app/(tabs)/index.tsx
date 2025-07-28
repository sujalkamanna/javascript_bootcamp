import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import React from "react";
import { PropsWithChildren } from "react";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//screen
import HomeScreens from "@/screens/HomeScreen";
import DetailsPage from "@/screens/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{
          title: "Trending Products",
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={{
          title: "Product details",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
