import { Platform, StyleSheet } from "react-native";
import { colors, verticalSpacing } from "@/constants/designConstants";
import { horizontalScale } from "@/constants/metrics";

const isIOS = Platform.OS === "ios";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: isIOS ? verticalSpacing.s16 : verticalSpacing.s24,
    backgroundColor: colors.dark,
    paddingHorizontal: horizontalScale(20),
  },

  title: {
    fontWeight: 500,
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
  },
});
