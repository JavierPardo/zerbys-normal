import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import routes from "../routes";
import HomeScreen from "../Screens/InitialScreen";
import SignInScreen from "../Screens/User/SignInScreen";
import SignUpScreen from "../Screens/User/SignUpScreen";

function AuthStack() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <RootStack.Screen name={routes.public.home} component={HomeScreen} />
      <RootStack.Screen name={routes.public.signUp} component={SignUpScreen} />
      <RootStack.Screen name={routes.public.signIn} component={SignInScreen} />
    </RootStack.Navigator>
  );
}

export default AuthStack;
