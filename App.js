import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./redux";
import RootStack from "./app/stacks/RootStack";
import { en, enGB, registerTranslation } from "react-native-paper-dates";
import "./initializeDates";

registerTranslation("en", en);
// on top of your index.android.js file

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
