import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import useInitial from "../js/screens/useInitial";
import { colors, controls } from "../styles";

export let InitialScreenUI = ({ onSignInPressed, onSignUpPressed }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View style={{}}>
        <Text style={{ fontSize: 80, ...colors.primaryTitle }}>Home</Text>
      </View>
      <View style={{ width: "70%" }}>
        <View style={{ alignContent: "center" }}>
          <Button
            onPress={onSignInPressed}
            style={{ ...colors.primaryButton, ...controls.buttons }}
          >
            <Text style={colors.primaryButton}>Sign In</Text>
          </Button>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <Button
            onPress={onSignUpPressed}
            style={{ ...colors.primaryButton, ...controls.buttons }}
          >
            <Text style={colors.primaryButton}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

let InitialScreen= () => {
  const initial = useInitial();
  return <InitialScreenUI {...initial} />;
};

InitialScreenUI.propTypes = {
  onSignInPressed: PropTypes.func,
  onSignUpPressed: PropTypes.func,
};

export default InitialScreen;