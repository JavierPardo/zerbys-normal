import React, { useEffect, useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../services/firebase";

function RootStack() {
  const [userInfo, setUserInfo] = useState({ userId: null });

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      setUserInfo({ userId: user.uid });
    });
    return () => {};
  }, []);

  return (
    <NavigationContainer>
      {userInfo.userId ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default RootStack;
