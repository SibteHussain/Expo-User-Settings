import Button from "@/components/Button";
import Input from "@/components/Input";
import ThemedText from "@/components/ThemedText";
import { ICONS, SPACING } from "@/constants/Styles";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { ScrollView, View } from "react-native";
import * as Yup from "yup";
import ScreenWrapper from "../../../components/ScreenWrapper";
import { Colors } from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks/useColorScheme";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export default function PasswordScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          router.push("/settings/create-new-password" as any);
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
          >
            <View>
              <ThemedText variant="h2" style={{ marginBottom: 16 }}>
                Forgot password?
              </ThemedText>
              <ThemedText
                variant="body"
                style={{ color: colors.headingText, marginBottom: SPACING.xl }}
              >
                Please enter the e-mail address you use to log in, and we will
                send you a link to reset your password.
              </ThemedText>
              <Input
                label="Email"
                placeholder="abc@example.com"
                rightIcon={
                  <Image
                    source={require("../../../assets/icons/Mail.svg")}
                    style={[ICONS.small, { tintColor: colors.icon }]}
                  />
                }
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && errors.email ? errors.email : undefined}
              />
            </View>
            <Button title="Set reset link" onPress={handleSubmit as any} />
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
