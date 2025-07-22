import { View, Text, StyleSheet ,ViewStyle, StyleProp } from "react-native";
import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function Box({ children, style }: BoxProps) {
  return (
    <View>
      <View style={[styles.box, style]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
    borderColor: "black",
    // width:40,
    // height :50,

  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color:"white"
  },
});
