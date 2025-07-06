import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Colors } from "../constants/Colors";
import { BORDER_RADIUS, SPACING } from "../constants/Styles";
import { useColorScheme } from "../hooks/useColorScheme";
import ThemedText from "./ThemedText";

interface InputProps extends TextInputProps {
  rightIcon?: React.ReactNode;
  label?: string;
  error?: string;
  containerStyle?: any;
}

export default function Input({
  rightIcon,
  label,
  error,
  containerStyle,
  style,
  placeholderTextColor,
  value,
  ...props
}: InputProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const inputStyle = {
    color: colors.text,
    fontSize: 16,
    paddingHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    paddingVertical: SPACING.md,
    paddingRight: rightIcon ? 40 + SPACING.lg * 2 : SPACING.lg,
    backgroundColor: colorScheme === "dark" ? "#373A37" : "#E0E0E0",
    borderColor: error
      ? "#FF6B6B"
      : colorScheme === "dark"
      ? "#333333"
      : "#E0E0E0",
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.sm,
    minHeight: 48,
    textAlignVertical: "center" as "center",
  };

  return (
    <View
      style={[
        {
          position: "relative",
          marginBottom: SPACING.md,
          width: "100%",
        },
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

      <View style={{ position: "relative", width: "100%" }}>
        <TextInput
          style={[inputStyle, style]}
          placeholderTextColor={placeholderTextColor || colors.headingText}
          value={value}
          {...props}
        />
        {rightIcon && (
          <View
            style={{
              position: "absolute",
              right: SPACING.lg,
              top: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
            }}
          >
            {rightIcon}
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
