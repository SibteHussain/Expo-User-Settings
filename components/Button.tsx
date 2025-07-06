import React from "react";
import { Pressable, PressableProps, Text, ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";
import { SPACING } from "../constants/Styles";
import { useColorScheme } from "../hooks/useColorScheme";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  containerStyle?: any;
  textStyle?: any;
}

export default function Button({
  title,
  variant = "primary",
  size = "medium",
  disabled = false,
  containerStyle,
  textStyle,
  style,
  ...props
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      opacity: disabled ? 0.6 : 1,
    };

    const sizeStyles: Record<string, ViewStyle> = {
      small: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
        minHeight: 36,
      },
      medium: {
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.lg,
        minHeight: 48,
      },
      large: {
        paddingVertical: SPACING.lg,
        paddingHorizontal: SPACING.xl,
        minHeight: 56,
      },
    };

    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: "#F89880",
        borderWidth: 0,
      },
      secondary: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#F89880",
      },
      danger: {
        backgroundColor: "#FF6B6B",
        borderWidth: 0,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...(style as ViewStyle),
    };
  };

  const getTextStyle = () => {
    const baseTextStyle = {
      fontSize: size === "small" ? 14 : size === "large" ? 18 : 16,
      fontWeight: "600" as const,
      textAlign: "center" as const,
    };

    const variantTextStyles = {
      primary: {
        color: "#FFFFFF",
      },
      secondary: {
        color: colors.tint,
      },
      danger: {
        color: "#FFFFFF",
      },
    };

    return [baseTextStyle, variantTextStyles[variant], textStyle];
  };

  return (
    <Pressable style={getButtonStyle()} disabled={disabled} {...props}>
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
}
