import { StyleSheet } from "react-native";
import { colors, horizontalSpacing, radius, verticalSpacing } from "@/constants/designConstants";
import { horizontalScale, verticalScale } from "@/constants/metrics";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  container: {
    width: "100%",
    height: "40%",
    backgroundColor: colors.dark,
    paddingBottom: verticalSpacing.s56,
    paddingHorizontal: horizontalSpacing.s16,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.62,
    elevation: 11,
    borderTopLeftRadius: radius.large,
    borderTopRightRadius: radius.large,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
  },
  email: {
    marginTop: verticalScale(4),
  },
  button: {
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
    backgroundColor: colors.white,
    borderRadius: radius.big,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(25),
  },
});
