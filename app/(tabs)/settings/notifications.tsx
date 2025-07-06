import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CustomSwitch from "../../../components/CustomSwitch";
import ScreenWrapper from "../../../components/ScreenWrapper";
import ThemedText from "../../../components/ThemedText";
import { Colors } from "../../../constants/Colors";
import { SPACING } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

const features = [
  { label: "{Feature label}", description: "{Description}" },
  { label: "{Feature label}", description: "{Description}" },
  { label: "{Feature label}", description: "{Description}" },
  { label: "{Feature label}", description: "{Description}" },
  { label: "{Feature label}", description: "{Description}" },
  { label: "{Feature label}", description: "{Description}" },
];

export default function NotificationsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [allowNotifications, setAllowNotifications] = useState(true);
  const [toggles, setToggles] = useState(features.map((_, i) => i < 3));

  const handleToggle = (idx: number) => {
    setToggles((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const divider = (
    <View
      style={{
        height: 1,
        backgroundColor: colors.icon,
        opacity: 0.2,
        marginVertical: SPACING.md,
        width: "100%",
      }}
    />
  );

  return (
    <ScreenWrapper>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: SPACING.lg }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ThemedText variant="body" style={{ fontWeight: "500" }}>
            Allow notifications
          </ThemedText>
          <CustomSwitch
            value={allowNotifications}
            onValueChange={setAllowNotifications}
            disabled={false}
          />
        </View>
        {divider}
        {features.map((feature, idx) => (
          <React.Fragment key={idx}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1 }}>
                <ThemedText variant="body" style={{ fontWeight: "500" }}>
                  {feature.label}
                </ThemedText>
                <ThemedText variant="caption" color={colors.headingText}>
                  {feature.description}
                </ThemedText>
              </View>
              <CustomSwitch
                value={toggles[idx] && allowNotifications}
                onValueChange={() => handleToggle(idx)}
                disabled={!allowNotifications}
              />
            </View>
            {divider}
          </React.Fragment>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
}
