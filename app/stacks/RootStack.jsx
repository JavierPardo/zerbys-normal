import React, { useEffect, useState } from "react";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

function RootStack() {
  const [userInfo, setUserInfo] = useState({ userId: null });

  // auth.onAuthStateChanged(function(user){
  //   setUserInfo({userId:user.uid})
  // })

  //simulate auth
  useEffect(() => {
    setUserInfo({ userId: "AhvrHPKvcVYSTvPHUWIfaEi4zoH3" });
    return () => {

    };
  }, []);

  return (
    <NavigationContainer>
      {userInfo.userId ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default RootStack;
