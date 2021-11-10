import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
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
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onCancelPressed}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSignInPressed}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let SignInScreen = () => {
  const signInProps = useSignIn();
  return <SignInScreenUI {...signInProps} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  buttonsContainer: {
    ...containers.buttons,
    flexDirection: "row",
    justifyContent: "space-evenly",
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
