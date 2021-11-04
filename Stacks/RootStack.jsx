import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useDispatch } from "react-redux";

function RootStack() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ userId: "testID" }));
  }, [dispatch]);

  return user.userId ? <AppStack /> : <AuthStack />;
}

export default RootStack;
