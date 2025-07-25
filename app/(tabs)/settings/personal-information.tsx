import DatePickerModal from "@/components/DatePickerModal";
import { Image } from "expo-image";
import { Formik } from "formik";
import React from "react";
import { ScrollView, View } from "react-native";
import * as Yup from "yup";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ScreenWrapper from "../../../components/ScreenWrapper";
import Select from "../../../components/Select";
import { Colors } from "../../../constants/Colors";
import { ICONS, SPACING } from "../../../constants/Styles";
import { useColorScheme } from "../../../hooks/useColorScheme";

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];
const countryOptions = [
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "UK", value: "UK" },
  { label: "Other", value: "Other" },
];

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  birthday: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

export default function PersonalInformationScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScreenWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          birthday: "",
          gender: "",
          country: "",
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
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets
            keyboardDismissMode="none"
          >
            <View>
              <Input
                label="First name"
                placeholder="First name"
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : undefined
                }
              />
              <Input
                label="Last name"
                placeholder="Last name"
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={
                  touched.lastName && errors.lastName
                    ? errors.lastName
                    : undefined
                }
              />
              <Input
                label="Email address"
                placeholder="Email address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
                error={touched.email && errors.email ? errors.email : undefined}
              />

              <DatePickerModal />

              <Select
                label="Gender"
                value={values.gender}
                onValueChange={(v) => setFieldValue("gender", v)}
                items={genderOptions}
                error={
                  touched.gender && errors.gender ? errors.gender : undefined
                }
                rightIcon={
                  <Image
                    source={require("../../../assets/icons/ChevronDown.svg")}
                    style={[ICONS.xsmall, { tintColor: colors.icon }]}
                  />
                }
                customStyle={{ marginRight: SPACING.sm }}
              />
              <Select
                label="Country"
                value={values.country}
                onValueChange={(v) => setFieldValue("country", v)}
                items={countryOptions}
                error={
                  touched.country && errors.country ? errors.country : undefined
                }
                rightIcon={
                  <Image
                    source={require("../../../assets/icons/ChevronDown.svg")}
                    style={[ICONS.xsmall, { tintColor: colors.icon }]}
                  />
                }
                customStyle={{ marginRight: SPACING.sm }}
              />
              <Button
                title="Save"
                onPress={handleSubmit as any}
                variant="primary"
                style={{ marginTop: SPACING.xl }}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
}
