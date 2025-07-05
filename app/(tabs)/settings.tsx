import { Image } from "expo-image";
import { View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import ThemedText from "../../components/ThemedText";
import { Colors } from "../../constants/Colors";
import {
  COMPONENTS,
  ICONS,
  LAYOUT,
  SPACING,
  TEXT,
} from "../../constants/Styles";
import { useColorScheme } from "../../hooks/useColorScheme";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <View style={LAYOUT.flex}>
        <View
          style={[
            LAYOUT.flexRow,
            LAYOUT.spaceBetween,
            LAYOUT.centerHorizontal,
            { paddingVertical: SPACING.md },
          ]}
        >
          <ThemedText variant="h3">MovieMan</ThemedText>
          <Image
            source={require("../../assets/icons/Edit.svg")}
            style={[ICONS.medium, { tintColor: colors.icon }]}
          />
        </View>

        <View
          style={[
            COMPONENTS.dividerFullWidth,
            { backgroundColor: colors.icon },
          ]}
        />

        <View style={[LAYOUT.flex, { paddingTop: SPACING.md }]}>
          <ThemedText
            variant="h4"
            style={[TEXT.bold, { marginBottom: SPACING.lg }]}
          >
            Account Settings
          </ThemedText>

          <View style={{ gap: SPACING.md }}>
            <View style={COMPONENTS.listItemWithIcon}>
              <Image
                source={require("../../assets/icons/User.svg")}
                style={[
                  ICONS.medium,
                  { tintColor: colors.icon, marginRight: SPACING.lg },
                ]}
              />
              <ThemedText variant="body" style={LAYOUT.flex}>
                Profile
              </ThemedText>
            </View>

            <View style={COMPONENTS.listItemWithIcon}>
              <Image
                source={require("../../assets/icons/Bell.svg")}
                style={[
                  ICONS.medium,
                  { tintColor: colors.icon, marginRight: SPACING.lg },
                ]}
              />
              <ThemedText variant="body" style={LAYOUT.flex}>
                Notifications
              </ThemedText>
            </View>

            <View style={COMPONENTS.listItemWithIcon}>
              <Image
                source={require("../../assets/icons/Lock.svg")}
                style={[
                  ICONS.medium,
                  { tintColor: colors.icon, marginRight: SPACING.lg },
                ]}
              />
              <ThemedText variant="body" style={LAYOUT.flex}>
                Privacy & Security
              </ThemedText>
            </View>

            <View style={COMPONENTS.listItemWithIcon}>
              <Image
                source={require("../../assets/icons/Preference.svg")}
                style={[
                  ICONS.medium,
                  { tintColor: colors.icon, marginRight: SPACING.lg },
                ]}
              />
              <ThemedText variant="body" style={LAYOUT.flex}>
                Preferences
              </ThemedText>
            </View>
          </View>

          <View style={{ marginTop: SPACING.xl }}>
            {/* Full width divider */}
            <View
              style={[
                COMPONENTS.dividerFullWidth,
                { backgroundColor: colors.icon },
              ]}
            />
            <View style={COMPONENTS.listItemWithIcon}>
              <Image
                source={require("../../assets/icons/Logout.svg")}
                style={[
                  ICONS.medium,
                  { tintColor: "#FF6B6B", marginRight: SPACING.lg },
                ]}
              />
              <ThemedText
                variant="body"
                style={[LAYOUT.flex, { color: "#FF6B6B" }]}
              >
                Logout
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
