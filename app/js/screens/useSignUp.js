import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, firestore } from "../../services/firebase";
import { userModel } from "../../models/userModel";
import { setUserId } from "../../../redux/actions/userActions";

export function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function credentialsChangeHandler(propName, propValue) {
    setCredentials({ ...credentials, [propName]: propValue });
  }

  function signUpPressHandler() {
    console.log("userCredential");
    return auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredential) => {
        console.log("userCredential2");
        const user = userCredential.user;
        const userRef = firestore.collection("users").doc(user.uid);
        userRef.set(userModel);
        dispatch(setUserId(user.uid));
      })
      .catch((error) => {
        console.error(error.code);
      });
  }

  return {
    ...credentials,
    onCredentialsChanged: credentialsChangeHandler,
    onSignUpPressed: signUpPressHandler,
  };
}

//navigation action only
export default function () {
  const { onSignUpPressed, ...props } = SignUp();
  const navigation = useNavigation();

  function cancelPressHandler() {
    navigation.goBack();
  }

  function signUpPressHandler() {
    onSignUpPressed().then(function () {});
  }

  return {
    onSignUpPressed: signUpPressHandler,
    onCancelPressed: cancelPressHandler,
    ...props,
  };
}
