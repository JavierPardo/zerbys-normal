import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InitialScreen from "../screens/InitialScreen";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";
import SignInScreen from "../screens/AuthScreens/SignInScreen";
import routes from "../routes";

function AuthStack() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routes.auth.initial}
    >
      <RootStack.Screen name={routes.auth.initial} component={InitialScreen} />
      <RootStack.Screen name={routes.auth.signUp} component={SignUpScreen} />
      <RootStack.Screen name={routes.auth.signIn} component={SignInScreen} />
    </RootStack.Navigator>
  );
}

export default AuthStack;
