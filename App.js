import React from "react";
import RootStack from "./Stacks/RootStack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <RootStack />
      </StoreProvider>
    </PaperProvider>
  );
}

export default App;
