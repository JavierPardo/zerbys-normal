import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../services/firebase";
import { setUser } from "../../../redux/actions/userActions";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";

export const FIELDS = {
  phone: "phoneNumber",
  username: "username",
  fullname: "fullname",
  email: "email",
  password: "password",
  repassword: "repassword",
}

export const labels = {
  [FIELDS.phone]: "Phone",
  [FIELDS.email]: "Email",
  [FIELDS.username]: "Username",
  [FIELDS.fullname]: "Fullname",
  [FIELDS.password]: "Password",
  [FIELDS.repassword]: "Repassword",
}

export function Profile({ user, onUserDataRefresh }) {

  const [userData, setUserData] = useState({ ...user });
  const [errors, setErrors] = useState({})

  function fieldChangeHandler(name, value) {
    setUserData({ ...userData, [name]: value });
  }

  function formSubmitValidateHandler() {
    return new Promise(function (res, rej) {
      let newErrors = {};
      let hasErrors = false;
      if (userData[FIELDS.password] !== userData[FIELDS.repassword]) {
        newErrors = { ...newErrors, [FIELDS.repassword]: "Password does not match." };
        hasErrors = true;
      }

      if (!userData[FIELDS.username]) {
        newErrors = { ...newErrors, [FIELDS.username]: "Username cannot be empty." };
        hasErrors = true;
      }

      setErrors({ ...newErrors })
      hasErrors ? rej() : res();
    });
  }
  useEffect(function () {
    setUserData({ ...user });
    return function () {

    }
  }, [user])

  return {
    errors,
    user: userData,
    onFieldChanged: fieldChangeHandler,
    onFormValidated: formSubmitValidateHandler,
  };
}

//navigation action only
export default function () {
  const user = useSelector((state) => state.user);
  const navigation=useNavigation();
  const dispatch = useDispatch();

  async function fetchUserDataHandler() {
    if (user.loaded) return;

    try {
      const userProfile = auth.currentUser;
      const { email, phoneNumber } = userProfile;

      if (!userProfile.uid) return;
      const doc = await firestore.collection("users")
        .doc(userProfile.uid).get();

      dispatch(setUser({ userId: doc.id, loaded: true, email, phoneNumber, ...doc.data() }));

    } catch (ex) {
      console.error(ex);
    }
  }



  useEffect(function () {
    fetchUserDataHandler()
    return function () {

    }
  }, [])

  const { onFormValidated, ...props } = Profile({
    onUserDataRefresh: fetchUserDataHandler,
    user,
  });

  async function userDataSaveHandler() {

    const userProfile = auth.currentUser;
    const { uid } = userProfile;
    try {
      await firestore.collection("users")
        .doc(uid).set({
          [FIELDS.email]: props.user[FIELDS.email],
          [FIELDS.fullname]: props.user[FIELDS.fullname],
          [FIELDS.phone]: props.user[FIELDS.phone],
          [FIELDS.username]: props.user[FIELDS.username],
        });
        navigation.navigate(routes.app.home);
    }
    catch (error) {
console.log(error)
      Alert.alert("Error", JSON.stringify(error));
    }
  }
  function saveDataHandler() {

  }

  function formSubmitHandler() {
    onFormValidated(user)
      .then(saveDataHandler)
      .catch(function (error) {
      })
  }

  return {
    ...props,
    onFormSubmit: formSubmitHandler,
    onFormSubmit: userDataSaveHandler,
    labels,
  };
}
