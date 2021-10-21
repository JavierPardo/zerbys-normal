import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { setUser, setUserId } from "../redux/actions/userActions";
import routes from "../routes";
import { signInWithEmailAndPassword } from "firebase/auth";

export function SignIn() {

    const [credentials, setCredentials] = useState({
        identifier: "",
        password: ""
    });

    const dispatch = useDispatch();

    function credentialsChangeHandler(propName, propValue) {
        setCredentials({ ...credentials, [propName]: propValue })
    }

    function signInByEmailAndPassword() {
        return auth.signInWithEmailAndPassword(credentials.identifier, credentials.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUserId(user.uid));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function signInByUsernameAndPassword() {

        return new Promise(function (res, rej) {

            dispatch(setUserId("asdasdad"));
            res();
        });
    }

    function signInValidation() {

        if (credentials.identifier.includes('@')) {
            return signInByEmailAndPassword();
        }
        else {
            return signInByUsernameAndPassword();
        }

    }

    return {
        ...credentials,
        onCredentialsChanged: credentialsChangeHandler,
        onSignInValidation: signInValidation
    }
}

//navigation action only
export default function () {

    const { onSignInValidation, ...props } = SignIn();

    const navigation = useNavigation();

    function cancelPressHandler() {
        navigation.goBack();
    }

    function signInPressHandler() {
        onSignInValidation().then(function () {

        })
    }

    return {
        onSignInPressed: signInPressHandler,
        onCancelPressed: cancelPressHandler,
        ...props
    }

}