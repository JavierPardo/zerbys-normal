import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useSignIn from "../../js/screens/useSignIn";
import { containers, controls } from "../../styles";

export let SignInScreenUI = ({
  onCancelPressed,
  onSignInPressed,
  onCredentialsChanged,
  identifier,
  password,
}) => {
  return (
    <View style={containers.formContainer}>
      <View style={styles.form}>
        <TextInput
          style={controls.input}
          label="Email or username"
          value={identifier}
          onChangeText={onCredentialsChanged.bind(null, "identifier")}
        />
        <TextInput
          style={controls.input}
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onCredentialsChanged.bind(null, "password")}
        />
        <View style={{ ...containers.buttons, flexDirection: "row" }}>
          <Button onPress={onCancelPressed}>Cancel</Button>
          <Button onPress={onSignInPressed}>Sign In</Button>
        </View>
      </View>
    </View>
  );
};

let SignInScreen = () => {
  const signIn = useSignIn();
  return <SignInScreen {...signIn} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  form: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
  },
});

SignInScreenUI.propTypes = {
  onCancelPressed: PropTypes.func,
  onSignInPressed: PropTypes.func,
  onCredentialsChanged: PropTypes.func,
  identifier: PropTypes.string,
  password: PropTypes.string,
};

export default SignInScreen;
