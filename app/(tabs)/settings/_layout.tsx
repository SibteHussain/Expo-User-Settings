import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import { Platform, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemedText from "../../../components/ThemedText";
import { Colors } from "../../../constants/Colors";
import { ICONS } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

function HeaderWithDivider({ title, colors }: { title: string; colors: any }) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const CustomBackButton = () => (
    <Pressable
      onPress={() => router.back()}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
          padding: 8,
        },
      ]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Image
        source={require("../../../assets/icons/ChevronLeft.svg")}
        style={[ICONS.xsmall, { tintColor: colors.text }]}
      />
    </Pressable>
  );

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingBottom: Platform.OS === "ios" ? 20 : 0,
      }}
    >
      <View
        style={{
          height: insets.top,
          backgroundColor: colors.background,
        }}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 56,
          flexDirection: "row",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 8,
            top: 0,
            bottom: 0,
            justifyContent: "center",
          }}
        >
          <CustomBackButton />
        </View>

        <ThemedText
          variant="body"
          style={{ color: colors.text, fontWeight: "bold" }}
        >
          {title}
        </ThemedText>
      </View>

      {/* Divider */}
      <View
        style={{
          height: 1,
          backgroundColor: colors.icon,
          opacity: 0.2,
          width: "100%",
        }}
      />
    </View>
  );
}

export default function SettingsLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
        },
        headerTitleAlign: "center",
        presentation: "transparentModal",
        // animation: "slide_from_right",
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="content-preferences"
        options={{
          title: "Edit Profile",
          headerShown: true,
          header: () => (
            <HeaderWithDivider title="Edit Profile" colors={colors} />
          ),
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerShown: true,
          header: () => (
            <HeaderWithDivider title="Notifications" colors={colors} />
          ),
        }}
      />
      <Stack.Screen
        name="personal-information"
        options={{
          title: "Personal Information",
          headerShown: true,
          header: () => (
            <HeaderWithDivider title="Personal Information" colors={colors} />
          ),
        }}
      />
      <Stack.Screen
        name="password"
        options={{
          title: "Password",
          headerShown: true,
          header: () => <HeaderWithDivider title="Password" colors={colors} />,
        }}
      />
      <Stack.Screen
        name="delete-account"
        options={{
          title: "Delete Account",
          headerShown: true,
          header: () => (
            <HeaderWithDivider title="Delete Account" colors={colors} />
          ),
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Password",
          headerShown: true,
          header: () => <HeaderWithDivider title="Password" colors={colors} />,
        }}
      />
      <Stack.Screen
        name="create-new-password"
        options={{
          title: "Create New Password",
          headerShown: true,
          header: () => (
            <HeaderWithDivider title="Create New Password" colors={colors} />
          ),
        }}
      />
    </Stack>
  );
}
