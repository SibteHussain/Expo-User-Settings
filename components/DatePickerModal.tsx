import { Image } from "expo-image";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Colors } from "../constants/Colors";
import { BORDER_RADIUS, ICONS, SPACING } from "../constants/Styles";
import { useColorScheme } from "../hooks/useColorScheme";
import ThemedText from "./ThemedText";

interface DatePickerModalProps {
  label?: string;
  error?: string;
  value: string;
  onValueChange: (value: string) => void;
  containerStyle?: ViewStyle;
  enabled?: boolean;
  placeholder?: string;
  rightIcon?: React.ReactNode;
  customStyle?: ViewStyle;
}

export default function DatePickerModal({
  label,
  error,
  value,
  onValueChange,
  containerStyle,
  enabled = true,
  placeholder = "Select date",
  rightIcon,
  customStyle = {},
}: DatePickerModalProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [isVisible, setIsVisible] = React.useState(false);

  const formatDate = (dateString: string) => {
    if (!dateString) return placeholder;
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleConfirm = (date: Date) => {
    onValueChange(date.toISOString());
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const viewStyle: ViewStyle = {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.lg,
    backgroundColor: colorScheme === "dark" ? "#373A37" : "#E0E0E0",
    borderColor: error
      ? "#FF6B6B"
      : colorScheme === "dark"
      ? "#373A37"
      : "#E0E0E0",
    paddingRight: 40 + SPACING.lg,
    justifyContent: "center",
    minHeight: 48,
    height: 48,
  };

  const defaultRightIcon = (
    <Image
      source={require("../assets/icons/Calendar.svg")}
      style={[ICONS.small, { tintColor: colors.icon }]}
    />
  );

  return (
    <View
      style={[
        { position: "relative", marginBottom: SPACING.md },
        containerStyle,
      ]}
    >
      {label && (
        <ThemedText
          variant="body"
          style={{ marginBottom: SPACING.xs }}
          color={colors.headingText}
        >
          {label}
        </ThemedText>
      )}

      <TouchableOpacity
        style={[viewStyle, { flexDirection: "row", alignItems: "center" }]}
        onPress={() => enabled && setIsVisible(true)}
        activeOpacity={0.8}
        disabled={!enabled}
      >
        <Text
          style={{
            flex: 1,
            color: value ? colors.text : colors.headingText,
            fontSize: 16,
          }}
        >
          {formatDate(value)}
        </Text>
        <View
          style={[customStyle, styles.iconContainer, { right: SPACING.lg }]}
        >
          {rightIcon || defaultRightIcon}
        </View>
      </TouchableOpacity>

      <DateTimePicker
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        maximumDate={new Date()}
        minimumDate={new Date(1900, 0, 1)}
        display={Platform.OS === "ios" ? "spinner" : "default"}
      />

      {error && (
        <ThemedText
          variant="caption"
          style={{
            marginTop: SPACING.xs,
            color: "#FF6B6B",
          }}
        >
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 24,
  },
});
