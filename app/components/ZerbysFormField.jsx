import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Text } from "react-native-paper";
import PropTypes from "prop-types";

export default function ZerbysFormField({
  field,
  labels,
  Component,
  onFieldChanged,
  errors,
  data,
  ...props
}) {
  return (
    <View>
      {errors && errors[field] && (
        <Text style={styles.error}>{errors[field]}</Text>
      )}
      <Component
        {...props}
        label={labels[field]}
        onChangeText={onFieldChanged.bind(null, field)}
        value={data[field]}
      />
    </View>
  );
}

ZerbysFormField.propTypes = {
  field: PropTypes.string,
  labels: PropTypes.object,
  Component: PropTypes.object,
  onFieldChanged: PropTypes.func,
  errors: PropTypes.object,
  data: PropTypes.object,
  props: PropTypes.object,
};

const styles = StyleSheet.create({
  error: {
    color: Colors.red400,
  },
});
