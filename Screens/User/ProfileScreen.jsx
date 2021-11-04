import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";

function ProfileScreenUI(props) {
  const { user } = props;

  return (
    <View>
      <AppHeader />
      <View style={{ flexDirection: "row" }}>
        <Text>Name:</Text>
        {user && <Text>{user.name}</Text>}
      </View>
    </View>
  );
}
ProfileScreenUI.propTypes = {
  user: PropTypes.obj,
};

export default ProfileScreenUI;
