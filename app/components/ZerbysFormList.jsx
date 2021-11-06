import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import ZerbysFormField from "./ZerbysFormField";

export default function ZerbysFormList({
  fieldList,
  labels,
  data,
  onFieldChanged,
  Component,
  ...props
}) {
  return (
    <View>
      {fieldList.map(function (field) {
        return (
          <ZerbysFormField
            key={field}
            labels={labels}
            Component={Component}
            onFieldChanged={onFieldChanged}
            f
            field={field}
            data={data}
            {...props}
          />
        );
      })}
    </View>
  );
}

ZerbysFormList.propTypes = {
  fieldList: PropTypes.arrayOf(PropTypes.string),
  labels: PropTypes.object,
  data: PropTypes.object,
  onFieldChanged: PropTypes.func,
  Component: PropTypes.object,
};
