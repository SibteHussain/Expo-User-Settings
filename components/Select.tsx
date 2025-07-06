import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/Colors";
import { BORDER_RADIUS, SPACING } from "../constants/Styles";
import { useColorScheme } from "../hooks/useColorScheme";
import ThemedText from "./ThemedText";

interface SelectProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode | null;
  containerStyle?: ViewStyle;
  value: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
  enabled?: boolean;
  pickerProps?: any;
  customStyle?: ViewStyle;
}

export default function Select({
  label,
  error,
  rightIcon,
  containerStyle,
  value,
  onValueChange,
  items,
  enabled = true,
  pickerProps,
  customStyle = {},
}: SelectProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [iosModalVisible, setIosModalVisible] = React.useState(false);

  const selectedLabel =
    items.find((item) => item.value === value)?.label || "Select";

  const viewStyle: ViewStyle = {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.lg,
    backgroundColor: colorScheme === "dark" ? "#373A37" : "#E0E0E0",
    borderColor: error
      ? "#FF6B6B"
      : colorScheme === "dark"
      ? "#373A37"
      : "#E0E0E0",
    paddingRight: 40 + SPACING.lg,
    justifyContent: "center",
    minHeight: 48,
    height: 48,
  };

  return (
    <View
      style={[
        { position: "relative", marginBottom: SPACING.md },
        containerStyle,
      ]}
    >
      {label && (
        <ThemedText
          variant="body"
          style={{ marginBottom: SPACING.xs }}
          color={colors.headingText}
        >
          {label}
        </ThemedText>
      )}

      {Platform.OS === "ios" ? (
        <>
          <TouchableOpacity
            style={[viewStyle, { flexDirection: "row", alignItems: "center" }]}
            onPress={() => enabled && setIosModalVisible(true)}
            activeOpacity={0.8}
          >
            <Text
              style={{
                flex: 1,
                color: value ? colors.text : colors.headingText,
                fontSize: 16,
              }}
            >
              {selectedLabel}
            </Text>
            {rightIcon && (
              <View
                style={[
                  customStyle,
                  styles.iconContainer,
                  { right: SPACING.lg },
                ]}
              >
                {rightIcon}
              </View>
            )}
          </TouchableOpacity>

          <Modal visible={iosModalVisible} transparent animationType="slide">
            <View style={styles.modalBackdrop}>
              <View style={styles.pickerModal}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setIosModalVisible(false)}>
                    <Text style={styles.doneText}>Done</Text>
                  </TouchableOpacity>
                </View>
                <Picker
                  selectedValue={value}
                  onValueChange={(val) => {
                    onValueChange(val as string);
                  }}
                  {...pickerProps}
                >
                  {items.map((item) => (
                    <Picker.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <View style={viewStyle}>
          <Picker
            selectedValue={value}
            onValueChange={onValueChange}
            enabled={enabled}
            dropdownIconColor={"#373A37"}
            dropdownIconRippleColor={"#373A37"}
            style={{
              color: value ? colors.text : colors.headingText,
              backgroundColor: "transparent",
            }}
            {...pickerProps}
          >
            {items.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
          {rightIcon && (
            <View
              style={[customStyle, styles.iconContainer, { right: SPACING.lg }]}
            >
              {rightIcon}
            </View>
          )}
        </View>
      )}

      {error && (
        <ThemedText
          variant="caption"
          style={{
            marginTop: SPACING.xs,
            color: "#FF6B6B",
          }}
        >
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 24,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  pickerModal: {
    backgroundColor: "#fff",
  },
  modalHeader: {
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderColor: "#DADADA",
    height: 50,
    justifyContent: "center",
    paddingRight: 10,
  },
  doneText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
});
