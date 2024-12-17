import { horizontalScale, moderateScale, verticalScale } from "./metrics";

export const colors = {
  white: "#fff",
  grey: "#353D40",
  lightGrey: "#A6A6A6",
  secondLightGrey: "#D6D6D6",
  darkGrey: "#6A7376",
  dark: "#141414",
  blue: "#008ECE",
  activeBlue: "#0171ea",
  green: "#93CC3E",
  secondGreen: "#7EB959",
  systemGreen: "#2DD36F",
  systemRed: "#EB445A",
  red: "#D60714",

  borderColor: "#E3E3E3",
};

export enum fonts {
  THIN = "HelveticaNeueCyr-Thin",
  LIGHT = "HelveticaNeueCyr-Light",
  REGULAR = "HelveticaNeueCyr-Roman",
  MEDIUM = "HelveticaNeueCyr-Medium",
  SEMI_BOLD = "HelveticaNeueCyr-Heavy",
  BOLD = "HelveticaNeueCyr-Bold",
  BLACK = "HelveticaNeueCyr-Black",
}

export const textStyles = {
  H1: moderateScale(28),
  H2: moderateScale(24),
  H3: moderateScale(20),
  H4: moderateScale(18),
  H5: moderateScale(16),
  H6: moderateScale(14),
  H7: moderateScale(12),

  TINY: moderateScale(10),
};

export const radius = {
  small: 4,
  medium: 10,
  big: 12,
  large: 20,
};

const spacingArray = [4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 80];
interface ISpacing {
  [key: string]: number;
}

export const verticalSpacing: ISpacing = spacingArray.reduce(
  (o, key) => Object.assign(o, { [`s${key}`]: verticalScale(key) }),
  {},
);
export const horizontalSpacing: ISpacing = spacingArray.reduce(
  (o, key) => Object.assign(o, { [`s${key}`]: horizontalScale(key) }),
  {},
);

export const getColorWithOpacity = (hex: string, opacity: number) => {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(", ")}, ${opacity})`;
  }
  throw new Error("Ooops, bad Hex. Try again!");
};
