import { ICONS } from "@/constants/Styles";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Colors } from "../constants/Colors";
import Input from "./Input";

const DatePickerModal = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Input
        label="Select Date"
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        placeholder="Select a date"
        editable={false}
        onPressIn={showDatePicker}
        rightIcon={
          <TouchableOpacity onPress={showDatePicker}>
            <Image
              source={require("../assets/icons/Calendar.svg")}
              style={[ICONS.medium, { tintColor: colors.icon }]}
            />
          </TouchableOpacity>
        }
        style={{ width: "100%" }}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
  dateText: { marginTop: 16, fontSize: 16 },
});

export default DatePickerModal;
