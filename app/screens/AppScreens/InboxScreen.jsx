import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function InboxScreen() {
  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>INBOX</Text>
      </View>
    </View>
  );
}

export default InboxScreen;
