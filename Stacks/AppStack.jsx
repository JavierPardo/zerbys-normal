import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routes from "../routes";
import ProfileScreen from "../Screens/User/ProfileScreen";

const MainStack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={routes.private.profile}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}
