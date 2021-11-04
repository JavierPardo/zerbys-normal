import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function ProfileScreen() {
  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>PROFILE</Text>
      </View>
    </View>
  );
}

export default ProfileScreen;
