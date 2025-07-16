import React from "react";
import { View, Text } from "react-native";

export default function Projects() {
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
          PROJECTS
        </Text>
      </View>
      <View>
        <Text>Django Employee Database</Text>
      </View>
      <View>
        <Text>
          Developed a Django-based Employee Management System to streamline and
          manage employee data within an organization, improving efficiency and
          data accessibility.
        </Text>
      </View>

      <View>
        <Text>Blinkit Sales Analysis Power BI Dashboard</Text>
      </View>
      <View>
        <Text>
          Developed a Power BI dashboard to analyze sales data for Blinkit,
          enhancing decision-making by providing insightful visualizations and
          reports.
        </Text>
      </View>

      <View>
        <Text>Portfolio Website</Text>
      </View>
      <View>
        <Text>
          Developed a responsive portfolio website with HTML, CSS, and
          JavaScript, featuring smooth navigation, interactive project sections,
          and seamless performance across devices.
        </Text>
      </View>
    </View>
  );
}
