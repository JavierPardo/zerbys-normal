import React, { useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

function RootStack() {
  const [userInfo] = useState({ userId: "testID" });

  return (
    <NavigationContainer>
      {userInfo.userId ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default RootStack;
