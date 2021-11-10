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
};

export const USER_PROFILE_FIELDS = {
  phone: "phoneNumber",
  displayName: "displayName",
  email: "email",
  username: "username",
  password: "password",
};
export const labels = {
  [FIELDS.phone]: "Phone",
  [FIELDS.email]: "Email",
  [FIELDS.username]: "Username",
  [FIELDS.fullname]: "Fullname",
  [FIELDS.password]: "Password",
  [FIELDS.repassword]: "Repassword",
};

const Profile = ({
  user,
  goHome,
  onUserSaved,
  onSucess,
  onUserDataRefresh,
  onProfileUpdated,
  onError,
}) => {
  const [userData, setUserData] = useState({ ...user });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    onUserDataRefresh();
  }, []);

  function fieldChangeHandler(name, value) {
    setUserData({ ...userData, [name]: value });
  }

  function formSubmitValidateHandler() {
    return new Promise(function (res, rej) {
      let newErrors = {};
      let hasErrors = false;
      if (userData[FIELDS.password] !== userData[FIELDS.repassword]) {
        newErrors = {
          ...newErrors,
          [FIELDS.repassword]: "Password does not match.",
        };
        hasErrors = true;
      }

      if (!userData[FIELDS.username]) {
        newErrors = {
          ...newErrors,
          [FIELDS.username]: "Username cannot be empty.",
        };
        hasErrors = true;
      }

      setErrors({ ...newErrors });
      hasErrors ? rej() : res();
    });
  }

  useEffect(
    function () {
      setUserData({ ...user });
    },
    [user]
  );

  function mapUserDataToUserProfile() {
    const userProfile = {};
    if (userData[FIELDS.fullname] !== user[FIELDS.fullname])
      userProfile[USER_PROFILE_FIELDS.displayName] = userData[FIELDS.fullname];

    if (userData[FIELDS.phone] !== user[FIELDS.phone])
      userProfile[USER_PROFILE_FIELDS.phone] = userData[FIELDS.phone];

    if (userData[FIELDS.username] !== user[FIELDS.username])
      userProfile[USER_PROFILE_FIELDS.username] = userData[FIELDS.username];

    if (userData[FIELDS.email] !== user[FIELDS.email])
      userProfile[USER_PROFILE_FIELDS.email] = userData[FIELDS.email];

    if (userData[FIELDS.password])
      userProfile[USER_PROFILE_FIELDS.password] = userData[FIELDS.password];
    return userProfile;
  }

  function submitPressHandler() {
    return formSubmitValidateHandler()
      .then(onUserSaved.bind(null, userData))
      .then(mapUserDataToUserProfile)
      .then(onProfileUpdated)
      .then(onSucess.bind(null, "Success", "User saved successful."))
      .then(goHome)
      .catch(onError.bind(null, "Error"));
  }

  function cancelPressHandler() {
    goHome();
  }

  return {
    errors,
    user: userData,
    onFieldChanged: fieldChangeHandler,
    onFormSubmitPressed: submitPressHandler,
    onCancelPressed: cancelPressHandler,
  };
};

//navigation action only
function useProfile() {
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function fetchUserDataHandler() {
    const profileUser = auth.currentUser;
    if (user.loaded) return;

    try {
      const userProfile = auth.currentUser;
      if (!userProfile) return;

      const { email, phoneNumber } = userProfile;

      if (!userProfile.uid) return;

      const doc = await firestore
        .collection("users")
        .doc(userProfile.uid)
        .get();

      dispatch(
        setUser({
          userId: doc.id,
          loaded: true,
          email,
          phoneNumber,
          ...doc.data(),
        })
      );
    } catch (ex) {
      Alert.alert("Error", JSON.stringify(ex));
    }
  }

  function userDataSaveHandler(user) {
    const { userId, ...userData } = user;
    return firestore
      .collection("users")
      .doc(userId)
      .set({ ...userData });
  }

  function goHome() {
    navigation.navigate(routes.app.home);
  }

  function profileUpdateHandler(userProfile) {
    const currentUser = auth.currentUser;
    const { password, ...userProfileData } = userProfile;
    currentUser.updateProfile({ ...userProfileData });
    //do it later
    //currentUser.updatePhoneNumber({ [USER_PROFILE_FIELDS.phone]: currentUser[phone] })
    userProfile[USER_PROFILE_FIELDS.password] &&
      currentUser.updatePassword(userProfile[USER_PROFILE_FIELDS.password]);
  }

  const { ...props } = Profile({
    onUserDataRefresh: fetchUserDataHandler,
    onError: (error) => Alert.alert(JSON.stringify(error)),
    onSucess: Alert.alert,
    onUserSaved: userDataSaveHandler,
    onProfileUpdated: profileUpdateHandler,
    goHome,

    user,
  });

  return {
    ...props,
    labels,
  };
}

export default useProfile;
