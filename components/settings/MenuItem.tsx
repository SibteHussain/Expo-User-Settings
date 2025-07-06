import { Colors } from "@/constants/Colors";
import { COMPONENTS, ICONS, LAYOUT, SPACING } from "@/constants/Styles";
import { Image } from "expo-image";
import React from "react";
import { Pressable, useColorScheme, View } from "react-native";
import ThemedText from "../ThemedText";

export default function MenuItem({
  title,
  icon,
  onPress,
  style,
}: {
  title: string;
  icon: React.ComponentType<{ style?: any }> | string; // added string for URI icons
  onPress: () => void;
  style?: any;
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Pressable onPress={onPress} style={{ gap: SPACING.md }}>
      <View
        style={[
          style ?? COMPONENTS.listItemWithIcon,
          { backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5" },
        ]}
      >
        <Image
          source={icon as any}
          style={[
            ICONS.medium,
            { tintColor: colors.icon, marginRight: SPACING.lg },
          ]}
        />
        <ThemedText variant="body" style={LAYOUT.flex}>
          {title}
        </ThemedText>
      </View>
    </Pressable>
  );
}
