import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screens/User/ProfileScreen";

function AppStack() {
  const MainTab = createBottomTabNavigator();

  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
}

export default AppStack;
