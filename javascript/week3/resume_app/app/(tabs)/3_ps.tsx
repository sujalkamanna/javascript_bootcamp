import React from "react";
import { View, Text } from "react-native";

export default function Profile_Summary() {
  return (
    <View>
      <View>
        <Text
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        >
          {" "}
          PROFILE SUMMARY
        </Text>
      </View>
      <View>
        <Text>
          Python Developer with expertise in Data Analysis and scalable web
          development. Skilled in Power BI visualization and Agile
          methodologies, with a strong ability to collaborate on innovative
          software solutions.
        </Text>
      </View>
    </View>
  );
}
