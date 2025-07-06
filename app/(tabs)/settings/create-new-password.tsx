import Button from "@/components/Button";
import Input from "@/components/Input";
import ThemedText from "@/components/ThemedText";
import { ICONS, SPACING } from "@/constants/Styles";
import { Image } from "expo-image";
import { Formik } from "formik";
import React from "react";
import { ScrollView, View } from "react-native";
import * as Yup from "yup";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { Colors } from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks/useColorScheme";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "At least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Required"),
});

export default function PasswordScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // handle submit
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ScrollView
            style={{ flexDirection: "column" }}
            contentContainerStyle={{
              justifyContent: "space-between",
              height: "100%",
            }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets
            keyboardDismissMode="none"
          >
            <View>
              <ThemedText variant="h2" style={{ marginBottom: 16 }}>
                Enter your new password
              </ThemedText>
              <ThemedText
                variant="body"
                style={{ color: colors.headingText, marginBottom: SPACING.xl }}
              >
                Your password must be at least 8 characters and should have a
                combination of numbers, letters and special characters.
              </ThemedText>
              <Input
                label="Enter your new password"
                placeholder="abc@example.com"
                rightIcon={
                  <Image
                    source={require("../../../assets/icons/eye-open.svg")}
                    style={[ICONS.small, { tintColor: colors.icon }]}
                  />
                }
                value={values.newPassword}
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                error={
                  touched.newPassword && errors.newPassword
                    ? errors.newPassword
                    : undefined
                }
              />
              <Input
                label="Retype new password"
                placeholder="abc@example.com"
                rightIcon={
                  <Image
                    source={require("../../../assets/icons/eye-closed.svg")}
                    style={[ICONS.small, { tintColor: colors.icon }]}
                  />
                }
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
              />
            </View>
            <Button title="Set reset link" />
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
