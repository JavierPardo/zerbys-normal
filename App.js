import React from "react";
import RootStack from "./Stacks/RootStack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </StoreProvider>
    </PaperProvider>
  );
}
