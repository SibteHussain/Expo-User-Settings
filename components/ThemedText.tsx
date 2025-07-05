import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "../hooks/useColorScheme";
import { fontScale } from "../utils/responsive";

type FontWeight =
  | "normal"
  | "bold"
  | "600"
  | "500"
  | "400"
  | "300"
  | "100"
  | "200"
  | "700"
  | "800"
  | "900";

interface ThemedTextProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "button";
  color?: string;
  weight?: FontWeight;
  align?: "auto" | "left" | "right" | "center" | "justify";
}

export default function ThemedText({
  children,
  style,
  variant = "body",
  color,
  weight,
  align,
  ...props
}: ThemedTextProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const textColor = color || colors.text;
  const textWeight = weight || getDefaultWeight(variant);
  const textAlign = align || "auto";

  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        {
          color: textColor,
          fontWeight: textWeight,
          textAlign: textAlign,
        } as TextStyle,
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

const getDefaultWeight = (variant: string): FontWeight => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
      return "bold";
    case "h4":
      return "600";
    case "button":
      return "600";
    case "body":
    case "caption":
    default:
      return "normal";
  }
};

const styles = StyleSheet.create({
  base: {
    fontFamily: undefined, // Use system font
  },
  h1: {
    fontSize: fontScale(32),
    lineHeight: fontScale(40),
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: fontScale(28),
    lineHeight: fontScale(36),
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: fontScale(24),
    lineHeight: fontScale(32),
    letterSpacing: -0.2,
  },
  h4: {
    fontSize: fontScale(20),
    lineHeight: fontScale(28),
    letterSpacing: -0.1,
  },
  body: {
    fontSize: fontScale(16),
    lineHeight: fontScale(24),
  },
  caption: {
    fontSize: fontScale(14),
    lineHeight: fontScale(20),
  },
  button: {
    fontSize: fontScale(16),
    lineHeight: fontScale(24),
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
