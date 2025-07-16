import React from "react";
import { View, Text } from "react-native";

export default function Publication() {
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
          PUBLICATIONS / RESEARCH PAPERS
        </Text>
      </View>
      <View>
        <Text>
          Decentralized Funding Solutions: A Blockchain Approach to Crowdfunding
          - Link
        </Text>
      </View>
      <View>
        <Text>
          International Research Journal of Modernization in Engineering
          Technology and Science
        </Text>
      </View>
      <View>
        <Text>January 2025</Text>
      </View>
      <View>
        <Text>
          The paper explores how blockchain can address issues in traditional
          crowdfunding, proposing decentralized platforms and smart contracts to
          reduce fees, increase transparency, and enhance security and
          efficiency.
        </Text>
      </View>
    </View>
  );
}
