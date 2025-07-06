import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View, ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";
import { BORDER_RADIUS, SPACING } from "../constants/Styles";
import { useColorScheme } from "../hooks/useColorScheme";
import ThemedText from "./ThemedText";

interface SelectProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode | null;
  containerStyle?: ViewStyle;
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  enabled?: boolean;
  pickerProps?: any;
  customStyle?: ViewStyle;
}

export default function Select({
  label,
  error,
  rightIcon,
  containerStyle,
  value,
  onValueChange,
  items,
  enabled = true,
  pickerProps,
  customStyle = {},
}: SelectProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

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
      <View style={viewStyle}>
        <Picker
          selectedValue={value}
          onValueChange={onValueChange}
          placeholder="Select"
          enabled={enabled}
          style={{
            color: value ? colors.text : colors.headingText,
            backgroundColor: "transparent",

            textAlignVertical: "center",
          }}
          itemStyle={{
            textAlignVertical: "center",
            fontSize: 16,
          }}
          dropdownIconColor={colorScheme === "dark" ? "#373A37" : "black"}
          dropdownIconRippleColor={colorScheme === "dark" ? "#373A37" : "black"}
          {...pickerProps}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
        {rightIcon && (
          <View
            style={[
              customStyle,
              {
                position: "absolute",
                right: SPACING.lg,
                top: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                width: 24,
              },
            ]}
          >
            {rightIcon !== null ? rightIcon : null}
          </View>
        )}
      </View>

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
