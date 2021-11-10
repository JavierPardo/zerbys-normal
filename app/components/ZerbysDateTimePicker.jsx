import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TimePickerModal, DatePickerModal } from "react-native-paper-dates";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import PropTypes from "prop-types";

function ZerbysDateTimePicker({ label, time, date, onConfirm, isDate }) {
  const [open, setOpen] = useState(false);

  function confirmHandler({ date, minutes, hours }) {
    isDate ? onConfirm(date) : onConfirm({ hours, minutes });
    setOpen(false);
  }

  function openModalPressHandler() {
    setOpen(true);
  }

  const rightIcon = isDate ? "calendar-outline" : "time-outline";

  return (
    <View style={styles.container}>
      <Text style={styles.display}>
        {isDate
          ? moment(date).format("DD/MM/yyyy")
          : `${time.hours}:${time.minutes}`}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={openModalPressHandler}
        color="#900"
      >
        <Icon name={rightIcon} size={20} />
      </TouchableOpacity>
      {isDate ? (
        <DatePickerModal
          label={label}
          date={date}
          locale="en"
          mode="single"
          visible={open}
          onDismiss={setOpen.bind(null, false)}
          onConfirm={confirmHandler}
        />
      ) : (
        <TimePickerModal
          label={label}
          hours={time.hours.toString()}
          minutes={time.minutes.toString()}
          locale="en"
          mode="single"
          visible={open}
          onDismiss={setOpen.bind(null, false)}
          onConfirm={confirmHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    maxHeight: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  display: {
    flex: 11,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
  },
  button: {
    flex: 3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

ZerbysDateTimePicker.propTypes = {
  label: PropTypes.string,
  time: PropTypes.object,
  date: PropTypes.object,
  onConfirm: PropTypes.func,
  isDate: PropTypes.bool,
};
export default ZerbysDateTimePicker;
