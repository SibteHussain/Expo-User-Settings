import { StyleSheet } from "react-native";
import { fontScale, wp } from "../utils/responsive";

// Common spacing values
export const SPACING = {
  xs: wp(1), // 4px
  sm: wp(2), // 8px
  md: wp(3), // 12px
  lg: wp(4), // 16px
  xl: wp(5), // 20px
  xxl: wp(6), // 24px
  xxxl: wp(8), // 32px
} as const;

// Common border radius values
export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 50,
} as const;

// Common shadow styles
export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
} as const;

// Common layout styles
export const LAYOUT = StyleSheet.create({
  // Flex containers
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerVertical: {
    justifyContent: "center",
  },
  centerHorizontal: {
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },

  // Padding
  padding: {
    padding: SPACING.md,
  },
  paddingHorizontal: {
    paddingHorizontal: SPACING.md,
  },
  paddingVertical: {
    paddingVertical: SPACING.md,
  },
  paddingSm: {
    padding: SPACING.sm,
  },
  paddingLg: {
    padding: SPACING.lg,
  },

  // Margin
  margin: {
    margin: SPACING.md,
  },
  marginHorizontal: {
    marginHorizontal: SPACING.md,
  },
  marginVertical: {
    marginVertical: SPACING.md,
  },
  marginSm: {
    margin: SPACING.sm,
  },
  marginLg: {
    margin: SPACING.lg,
  },

  // Position
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },

  // Dimensions
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  halfWidth: {
    width: "50%",
  },
  halfHeight: {
    height: "50%",
  },
});

// Common component styles
export const COMPONENTS = StyleSheet.create({
  // Card styles
  card: {
    backgroundColor: "transparent",
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    ...SHADOWS.sm,
  },
  cardElevated: {
    backgroundColor: "transparent",
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    ...SHADOWS.md,
  },

  // Button styles
  button: {
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: fontScale(16),
  },

  // List item styles
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
  },
  listItemWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: BORDER_RADIUS.md,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
    marginVertical: SPACING.xs,
  },

  // Divider styles
  divider: {
    height: 1,
    opacity: 0.3,
    marginVertical: SPACING.sm,
  },
  dividerHorizontal: {
    width: 1,
    opacity: 0.3,
    marginHorizontal: SPACING.sm,
  },
  dividerFullWidth: {
    height: 1,
    opacity: 0.3,
    marginVertical: SPACING.sm,
    marginHorizontal: -SPACING.md,
    width: "auto",
  },

  // Badge styles
  badge: {
    borderRadius: BORDER_RADIUS.round,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    alignItems: "center",
    justifyContent: "center",
  },

  // Avatar styles
  avatar: {
    borderRadius: BORDER_RADIUS.round,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarSmall: {
    width: wp(12),
    height: wp(12),
    borderRadius: BORDER_RADIUS.round,
  },
  avatarMedium: {
    width: wp(16),
    height: wp(16),
    borderRadius: BORDER_RADIUS.round,
  },
  avatarLarge: {
    width: wp(30),
    height: wp(30),
    borderRadius: BORDER_RADIUS.round,
  },
});

// Common text styles
export const TEXT = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  bold: {
    fontWeight: "bold",
  },
  semiBold: {
    fontWeight: "600",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "300",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

// Common icon styles
export const ICONS = StyleSheet.create({
  xsmall: {
    width: wp(3),
    height: wp(3),
  },
  small: {
    width: wp(5),
    height: wp(5),
  },
  medium: {
    width: wp(6),
    height: wp(6),
  },
  large: {
    width: wp(8),
    height: wp(8),
  },
  xlarge: {
    width: wp(10),
    height: wp(10),
  },
});

// Common animation values
export const ANIMATION = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
} as const;

// Export all styles
export default {
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  LAYOUT,
  COMPONENTS,
  TEXT,
  ICONS,
  ANIMATION,
};
