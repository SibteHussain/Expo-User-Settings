import { Dimensions, PixelRatio } from "react-native";
import {
  heightPercentageToDP as hp,
  heightPercentageToDP as hpx,
  widthPercentageToDP as wp,
  widthPercentageToDP as wpx,
} from "react-native-responsive-screen";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Font scaling
export const fontScale = (size: number) => {
  const scale = SCREEN_WIDTH / 375;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Screen dimensions
export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;

// Responsive breakpoints
export const isSmallDevice = SCREEN_WIDTH < 375;
export const isMediumDevice = SCREEN_WIDTH >= 375 && SCREEN_WIDTH < 414;
export const isLargeDevice = SCREEN_WIDTH >= 414;

export { hp, hpx, wp, wpx };
