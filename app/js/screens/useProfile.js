import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../../services/firebase";
import { setUser } from "../../../redux/actions/userActions";

export function Profile({ user, onUserDataRefresh }) {
  useEffect(() => {
    onUserDataRefresh();
    return () => {};
  }, [user]);

  return {
    user,
  };
}

//navigation action only
export default function () {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function fetchUserDataHandler() {
    if (user.loaded) return;

    try {
      const userData = await firestore.collection("users").get(user.userId);
      userData.forEach((doc) => {
        dispatch(setUser({ userId: doc.id, ...doc.data(), loaded: true }));
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  const { ...props } = Profile({
    onUserDataRefresh: fetchUserDataHandler,
    user,
  });
  return {
    ...props,
  };
}
