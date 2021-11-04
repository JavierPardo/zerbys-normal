import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function AddScreen() {
  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>ADD</Text>
      </View>
    </View>
  );
}

export default AddScreen;
