import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import useSignUp from "../../js/screens/useSignUp";
import { containers, controls } from "../../styles";

export let SignUpScreenUI = ({
  onSignUpPressed,
  onCancelPressed,
  onCredentialsChanged,
  email,
  password,
}) => {
  return (
    <View style={containers.formContainer}>
      <View style={styles.form}>
        <TextInput
          style={controls.input}
          label="Email"
          value={email}
          onChangeText={onCredentialsChanged.bind(null, "email")}
        />
        <TextInput
          style={controls.input}
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onCredentialsChanged.bind(null, "password")}
        />
        <View style={{ ...containers.buttons, flexDirection: "row" }}>
          <Button onPress={onSignUpPressed}>Sign Up</Button>
          <Button onPress={onCancelPressed}>Cancel</Button>
        </View>
      </View>
    </View>
  );
};

const SignUpScreen = (props) => {
  const signIn = useSignUp(props);
  return <SignUpScreenUI {...signIn} />;
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: "80%",
    justifyContent: "center",
  },
});

SignUpScreenUI.propTypes = {
  onSignUpPressed: PropTypes.func,
  onCancelPressed: PropTypes.func,
  onCredentialsChanged: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SignUpScreen;
