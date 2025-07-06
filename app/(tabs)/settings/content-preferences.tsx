import Button from "@/components/Button";
import Input from "@/components/Input";
import ThemedText from "@/components/ThemedText";
import { wp } from "@/utils/responsive";
import { Image } from "expo-image";
import { View } from "react-native";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { Colors } from "../../../constants/Colors";
import { COMPONENTS, ICONS, LAYOUT, SPACING } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

export default function ContentPreferencesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <View style={[LAYOUT.flex, { paddingTop: SPACING.md }]}>
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
                marginBottom: SPACING.md,
              },
            ]}
          >
            <Image
              source={require("../../../assets/icons/ImagePlaceholder.svg")}
              style={[ICONS.medium, { tintColor: colors.icon }]}
            />
          </View>
          <ThemedText variant="underlined" color={colors.text}>
            Change Image
          </ThemedText>
        </View>
        <View style={{ gap: SPACING.md }}>
          <ThemedText variant="body" align="left" color={colors.headingText}>
            Username
          </ThemedText>
          <Input placeholder="Enter your username" defaultValue="MovieMan" />
        </View>
      </View>
      <Button title="Save" />
    </ScreenWrapper>
  );
}
