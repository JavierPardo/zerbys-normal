import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import routes from "../routes";
import HomeScreen from "../screens/AppScreens/HomeScreen";
import WorkersScreen from "../screens/AppScreens/WorkersScreen";
import AddScreen from "../screens/AppScreens/AddScreen";
import InboxScreen from "../screens/AppScreens/InboxScreen";
import ProfileScreen from "../screens/AppScreens/ProfileScreen";

function AppStack() {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case routes.app.home:
              iconName = focused ? "home" : "home-outline";
              break;
            case routes.app.workers:
              iconName = focused ? "hammer" : "hammer-outline";
              break;
            case routes.app.add:
              iconName = focused ? "add-circle" : "add-circle-outline";
              break;
            case routes.app.inbox:
              iconName = focused
                ? "chatbox-ellipses"
                : "chatbox-ellipses-outline";
              break;
            case routes.app.profile:
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabStack.Screen name={routes.app.home} component={HomeScreen} />
      <TabStack.Screen name={routes.app.workers} component={WorkersScreen} />
      <TabStack.Screen name={routes.app.add} component={AddScreen} />
      <TabStack.Screen name={routes.app.inbox} component={InboxScreen} />
      <TabStack.Screen name={routes.app.profile} component={ProfileScreen} />
    </TabStack.Navigator>
  );
}

export default AppStack;
