import React from "react";
import { Pressable, Text, GestureResponderEvent } from "react-native";

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const CustomButtonAnd: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 5,
        padding: 10,
        paddingBottom:20,
      }}
    >
      <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButtonAnd;
