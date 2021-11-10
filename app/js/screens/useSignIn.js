import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../services/firebase";
import { setUserId } from "../../../redux/actions/userActions";

export function SignIn({ onSignInWithEmailProcess }) {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  const dispatch = useDispatch();

  function credentialsChangeHandler(propName, propValue) {
    setCredentials({ ...credentials, [propName]: propValue });
  }

  function signInByEmailAndPassword() {
    return onSignInWithEmailProcess({
      email: credentials.identifier,
      password: credentials.password,
    })
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUserId(user.uid));
      })
      .catch((error) => {
        console.error(error.code);
      });
  }

  function signInByUsernameAndPassword() {
    return new Promise(function (res) {
      dispatch(setUserId("asdasdad"));
      res();
    });
  }

  function signInValidation() {
    if (credentials.identifier.includes("@")) {
      return signInByEmailAndPassword();
    } else {
      return signInByUsernameAndPassword();
    }
  }

  return {
    ...credentials,
    onCredentialsChanged: credentialsChangeHandler,
    onSignInPressed: signInValidation,
  };
}

//navigation action only
export default function () {
  const navigation = useNavigation();

  function cancelPressHandler() {
    navigation.goBack();
  }

  function signInWithEmailHandler({ email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
    // .then((userCredential) => {

    // })
    // .catch((error) => {
    // });
  }

  const { ...props } = SignIn({
    onSignInWithEmailProcess: signInWithEmailHandler,
  });

  return {
    onCancelPressed: cancelPressHandler,
    ...props,
  };
}
