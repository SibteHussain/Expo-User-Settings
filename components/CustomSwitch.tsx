import React from "react";
import { Pressable, View } from "react-native";

export default function CustomSwitch({
  value,
  onValueChange,
  disabled,
  style,
}: {
  value: boolean;
  onValueChange: (v: boolean) => void;
  disabled?: boolean;
  style?: any;
}) {
  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      style={[
        {
          width: 48,
          height: 28,
          borderRadius: 14,
          borderWidth: 1.5,
          borderColor: "#333",
          backgroundColor: "transparent",
          justifyContent: "center",
          padding: 2,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: value ? "#F89880" : "#373A37",
          alignSelf: value ? "flex-end" : "flex-start",
        }}
      />
    </Pressable>
  );
}
