import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase";
import { clearUser, setUser } from "../redux/actions/userActions";
import routes from "../routes";

export function Profile({ user, onUserDataRefresh }) {

    useEffect(() => {
        onUserDataRefresh();
        return () => {
        }
    }, [user]);

    return {
        user
    }
}

//navigation action only
export default function () {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    async function fetchUserDataHandler() {
        if(user.loaded) return;

        try {
            const userData = await firestore.collection('users').get(user.userId);
            userData.forEach((doc) => {
                dispatch(setUser({ userId: doc.id, ...doc.data(), loaded:true }));
            });
        }
        catch (ex) {
            console.error(ex)
        }
    }

    const { ...props } = Profile({
        onUserDataRefresh: fetchUserDataHandler,
        user
    });
    return {
        ...props
    }

}