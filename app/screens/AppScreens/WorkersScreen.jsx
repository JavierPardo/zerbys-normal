import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function WorkersScreen() {
  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>WORKERS</Text>
      </View>
    </View>
  );
}

export default WorkersScreen;
