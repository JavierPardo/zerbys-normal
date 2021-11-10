import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import ZerbysFormField from "../../../components/ZerbysFormField";
import useJobGeneral, { LABELS } from "../../../js/screens/useJobGeneral";
import { FIELDS } from "../../../js/screens/useJobGeneral";
import ZerbysDateTimePicker from "../../../components/ZerbysDateTimePicker";
import PropTypes from "prop-types";

function EditJobGeneralUI({ general, errors, onFieldChanged }) {
  return (
    <View style={styles.container}>
      <ZerbysFormField
        Component={TextInput}
        data={general}
        field={FIELDS.description}
        labels={LABELS}
        errors={errors}
        onFieldChanged={onFieldChanged}
      />
      <ZerbysFormField
        Component={TextInput}
        data={general}
        field={FIELDS.price}
        labels={LABELS}
        errors={errors}
        onFieldChanged={onFieldChanged}
      />
      <View style={{ flex: 1 }}>
        <ZerbysDateTimePicker
          locale="en"
          mode="single"
          label="Fecha"
          time={general[FIELDS.time]}
          onConfirm={onFieldChanged.bind(null, FIELDS.time)}
        />
        <ZerbysDateTimePicker
          locale="en"
          label="Hora"
          mode="single"
          isDate
          date={general[FIELDS.date]}
          onConfirm={onFieldChanged.bind(null, FIELDS.date)}
        />
      </View>
        {/*NOT IMPORTANTE THIS IS TEMPORAL WHILE WORKING ON WIZZARD*/}
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => console.log(general)}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

EditJobGeneralUI.propTypes = {
  general: PropTypes.object,
  errors: PropTypes.object,
  onFieldChanged: PropTypes.func,
};

function EditJobGeneral() {
  const props = useJobGeneral();
  return <EditJobGeneralUI {...props} />;
}

export default EditJobGeneral;
