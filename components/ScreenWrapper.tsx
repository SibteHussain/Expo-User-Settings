import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "../hooks/useColorScheme";
import { hp, wp } from "../utils/responsive";

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeAreaEdges?: ("top" | "bottom" | "left" | "right")[];
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export default function ScreenWrapper({
  children,
  style,
  safeAreaEdges = ["top", "bottom", "left", "right"],
  backgroundColor,
  paddingHorizontal = wp(5),
  paddingVertical = hp(2),
}: ScreenWrapperProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const bgColor = backgroundColor || colors.background;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: bgColor }, style]}
      edges={safeAreaEdges}
    >
      <View
        style={[
          styles.content,
          {
            backgroundColor: bgColor,
            paddingHorizontal,
            paddingVertical,
          },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
