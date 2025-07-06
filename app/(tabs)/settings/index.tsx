import MenuItem from "@/components/settings/MenuItem";
import { wp } from "@/utils/responsive";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";

import ScreenWrapper from "../../../components/ScreenWrapper";
import ThemedText from "../../../components/ThemedText";
import { Colors } from "../../../constants/Colors";
import {
  COMPONENTS,
  ICONS,
  LAYOUT,
  SPACING,
  TEXT,
} from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper paddingHorizontal={0}>
      <ScrollView style={LAYOUT.flex}>
        <View
          style={[
            LAYOUT.flexRow,
            LAYOUT.spaceBetween,
            LAYOUT.centerHorizontal,
            { paddingHorizontal: wp(5) },
            { paddingVertical: SPACING.md },
          ]}
        >
          <ThemedText variant="h3">MovieMan</ThemedText>
          <Image
            source={require("../../../assets/icons/Edit.svg")}
            style={[ICONS.medium, { tintColor: colors.icon }]}
          />
        </View>

        <View
          style={[
            COMPONENTS.dividerFullWidth,
            { backgroundColor: colors.icon },
          ]}
        />

        <View
          style={[
            LAYOUT.flex,
            { paddingTop: SPACING.md, paddingHorizontal: wp(5) },
          ]}
        >
          <View style={[LAYOUT.center, { marginBottom: SPACING.xl }]}>
            <View
              style={[
                COMPONENTS.avatarLarge,
                {
                  backgroundColor: "#9B9C9B",
                  borderWidth: 1,
                  borderColor: colorScheme === "dark" ? "#333333" : "#9B9C9B",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: wp(15),
                },
              ]}
            >
              <Image
                source={require("../../../assets/icons/ImagePlaceholder.svg")}
                style={[ICONS.medium, { tintColor: colors.icon }]}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            LAYOUT.flex,
            { paddingTop: SPACING.md, paddingHorizontal: wp(5) },
          ]}
        >
          <ThemedText
            variant="body"
            style={[TEXT.light, { marginBottom: SPACING.lg }]}
            color={colors.headingText}
          >
            Feed Preferences
          </ThemedText>

          <MenuItem
            title="Content Preferences"
            onPress={() => router.push("/settings/content-preferences" as any)}
            icon={require("../../../assets/icons/Preference.svg")}
          />

          <MenuItem
            title="Notifications"
            onPress={() => router.push("/settings/notifications" as any)}
            icon={require("../../../assets/icons/Bell.svg")}
          />
        </View>

        <View
          style={[
            LAYOUT.flex,
            { paddingTop: SPACING.md, paddingHorizontal: wp(5) },
          ]}
        >
          <ThemedText
            variant="body"
            style={[TEXT.light, { marginBottom: SPACING.lg }]}
            color={colors.headingText}
          >
            Account
          </ThemedText>

          <MenuItem
            title="Personal Information"
            onPress={() => router.push("/settings/personal-information" as any)}
            icon={require("../../../assets/icons/User.svg")}
          />

          <MenuItem
            title="Password"
            onPress={() => router.push("/settings/password" as any)}
            icon={require("../../../assets/icons/Lock.svg")}
          />

          <MenuItem
            title="Delete Account"
            onPress={() => router.push("/settings/delete-account" as any)}
            icon={require("../../../assets/icons/Trashcan.svg")}
          />
          <MenuItem
            title="Logout"
            onPress={() => {}}
            icon={require("../../../assets/icons/Logout.svg")}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
