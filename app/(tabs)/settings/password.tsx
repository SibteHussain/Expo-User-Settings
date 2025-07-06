import { Formik } from "formik";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ScreenWrapper from "../../../components/ScreenWrapper";
import ThemedText from "../../../components/ThemedText";
import { Colors } from "../../../constants/Colors";
import { SPACING } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required"),
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
  const [logoutOtherDevices, setLogoutOtherDevices] = useState(false);

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{
          currentPassword: "",
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
            contentContainerStyle={{ justifyContent: "space-between" }}
          >
            <View style={{ paddingTop: SPACING.lg }}>
              <ThemedText variant="h2" style={{ marginBottom: SPACING.xs }}>
                Change password
              </ThemedText>
              <ThemedText
                variant="body"
                style={{ color: colors.headingText, marginBottom: SPACING.xl }}
              >
                Your password must be at least 8 characters and should have a
                combination of numbers, letters and special characters.
              </ThemedText>
              <Input
                label="Current password"
                placeholder="Current password"
                value={values.currentPassword}
                onChangeText={handleChange("currentPassword")}
                onBlur={handleBlur("currentPassword")}
                error={
                  touched.currentPassword && errors.currentPassword
                    ? errors.currentPassword
                    : undefined
                }
                secureTextEntry
              />
              <Input
                label="New password"
                placeholder="New password"
                value={values.newPassword}
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                error={
                  touched.newPassword && errors.newPassword
                    ? errors.newPassword
                    : undefined
                }
                secureTextEntry
              />
              <Input
                label="Re-type new password"
                placeholder="Re-type new password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : undefined
                }
                secureTextEntry
              />
              <TouchableOpacity
                style={{ marginTop: SPACING.sm, marginBottom: SPACING.lg }}
              >
                <ThemedText
                  variant="body"
                  style={{
                    color: colors.tint,
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot your password?
                </ThemedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: SPACING.xl,
                }}
                onPress={() => setLogoutOtherDevices((v) => !v)}
                activeOpacity={0.8}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    borderWidth: 2,
                    borderColor: colors.text,
                    backgroundColor: logoutOtherDevices
                      ? colors.tint
                      : "transparent",
                    marginRight: SPACING.md,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {logoutOtherDevices && (
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 3,
                        backgroundColor: "#fff",
                      }}
                    />
                  )}
                </View>
                <ThemedText variant="body" color={colors.text}>
                  Log out of other devices
                </ThemedText>
              </TouchableOpacity>
            </View>
            <Button
              title="Change password"
              onPress={handleSubmit as any}
              variant="primary"
              style={{ marginTop: SPACING.md, width: "100%" }}
            />
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
