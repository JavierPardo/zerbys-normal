import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function HomeScreen() {
  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>HOME</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
