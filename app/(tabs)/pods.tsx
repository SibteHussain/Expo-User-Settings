import { View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import ThemedText from "../../components/ThemedText";

export default function PodsScreen() {
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemedText variant="h2" align="center">
          Pods Tab
        </ThemedText>
        <ThemedText variant="body" align="center" style={{ marginTop: 10 }}>
          Connect with your pods
        </ThemedText>
      </View>
    </ScreenWrapper>
  );
}
