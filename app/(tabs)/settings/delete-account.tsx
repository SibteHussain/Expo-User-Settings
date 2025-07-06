import { View } from "react-native";
import ScreenWrapper from "../../../components/ScreenWrapper";
import ThemedText from "../../../components/ThemedText";
import { Colors } from "../../../constants/Colors";
import { LAYOUT, SPACING } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

export default function DeleteAccountScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <View style={LAYOUT.flex}>
        <ThemedText variant="h2" style={{ marginBottom: SPACING.lg }}>
          Delete Account
        </ThemedText>

        <ThemedText variant="body" color={colors.headingText}>
          Permanently delete your account and all associated data.
        </ThemedText>

        {/* Add your delete account confirmation UI here */}
        <View style={{ marginTop: SPACING.xl }}>
          <ThemedText variant="body" color={colors.text}>
            Account deletion confirmation coming soon...
          </ThemedText>
        </View>
      </View>
    </ScreenWrapper>
  );
}
