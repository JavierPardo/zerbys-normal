import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import routes from "../routes";

export function Home() {

    return {}
}

//navigation action only
export default function () {

    const { ...props } = Home();

    const navigation = useNavigation();

    function signInPressHandler() {
        navigation.navigate(routes.public.signIn)
    }

    function signUpPressHandler() {
        navigation.navigate(routes.public.signUp);
    }

    return {
        onSignInPressed: signInPressHandler,
        onSignUpPressed: signUpPressHandler,
        ...props
    }

}