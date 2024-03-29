import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import AppHeader from "../../components/AppHeader";
import ZerbysFormList from "../../components/ZerbysFormList";
import useProfile, { FIELDS } from "../../js/screens/useProfile";
import PropTypes from "prop-types";

let ProfileScreenUI = ({
  labels,
  onFieldChanged,
  onFormSubmitPressed,
  onCancelPressed,
  user,
  errors,
}) => {
  console.log("screen rendered");
  return (
    <View style={styles.container}>
      <AppHeader />
      <ZerbysFormList
        labels={labels}
        Component={TextInput}
        onFieldChanged={onFieldChanged}
        fieldList={[FIELDS.fullname, FIELDS.email, FIELDS.username]}
        data={user}
        errors={errors}
      />
      <ZerbysFormList
        labels={labels}
        Component={TextInput}
        onFieldChanged={onFieldChanged}
        fieldList={[FIELDS.phone]}
        data={user}
        errors={errors}
        keyboardType={"numeric"}
      />

      <ZerbysFormList
        labels={labels}
        Component={TextInput}
        onFieldChanged={onFieldChanged}
        fieldList={[FIELDS.password, FIELDS.repassword]}
        data={user}
        errors={errors}
        secureTextEntry={true}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={onCancelPressed} style={styles.container}>
          Cancel
        </Button>
        <Button onPress={onFormSubmitPressed} style={styles.container}>
          Submit
        </Button>
      </View>
    </View>
  );
};

ProfileScreenUI.propTypes = {
  labels: PropTypes.object,
  onFieldChanged: PropTypes.func,
  onCancelPressed: PropTypes.func,
  onFormSubmitPressed: PropTypes.func,
  user: PropTypes.object,
  errors: PropTypes.object,
};

let ProfileScreen = () => {
  const propsProfile = useProfile();

  return <ProfileScreenUI {...propsProfile} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flex: 1,
  },
});

export default ProfileScreen;
