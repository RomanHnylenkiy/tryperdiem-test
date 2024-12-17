import { memo, ReactNode } from "react";

import { Text as DefaultText, TextProps, StyleProp, TextStyle } from "react-native";
import DeviceInfo from "react-native-device-info";

import { colors, fonts } from "@/constants/designConstants";
import { moderateScale } from "@/constants/metrics";

interface IProps extends TextProps, TextStyle {
  children?: string | number | ReactNode;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  weight?: 400 | 500 | 600 | 300 | 700;
  textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
  fontFamily?: string;
  onPress?: () => void;
  style?: TextStyle | (TextStyle | undefined)[];
}

// Custom Text component with custom styles

const Text = ({
  children,
  fontSize,
  color,
  textDecorationLine,
  fontFamily,
  lineHeight,
  textTransform,
  textAlign,
  onPress,
  weight,
  style,
  ...otherProps
}: IProps) => {
  const isTablet = DeviceInfo.isTablet();

  const getFontSize = () => {
    if (isTablet) {
      return fontSize || 14;
    } else {
      return moderateScale(fontSize || 14);
    }
  };

  return (
    <DefaultText
      {...otherProps}
      onPress={onPress}
      style={[
        style,
        {
          fontSize: getFontSize(),
          color: color || colors.dark,
          fontFamily: fontFamily || fonts.REGULAR,
          textAlign: textAlign || "left",
          textDecorationLine: textDecorationLine || "none",
          textTransform: textTransform || "none",
          fontWeight: weight,
          lineHeight: lineHeight && fontSize && (lineHeight * fontSize) / 100,
        } as StyleProp<TextStyle>,
      ]}
    >
      {children}
    </DefaultText>
  );
};

export default memo(Text);
