import { Platform, StyleSheet } from "react-native";
import { horizontalScale } from "@/constants/metrics";
import { colors, horizontalSpacing, verticalSpacing } from "@/constants/designConstants";

const isIOS = Platform.OS === "ios";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    paddingTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(20),
    height: "10%",
    alignItems: "center",
    paddingVertical: isIOS ? verticalSpacing.s16 : verticalSpacing.s24,
  },
  loader: {
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    width: "100%",
    alignItems: "center",
  },
  content: {
    marginTop: verticalSpacing.s32,
    paddingHorizontal: horizontalScale(20),
  },
  image: {
    width: "100%",
    minHeight: 200,
    marginBottom: verticalSpacing.s32,
  },
  row: {
    flexDirection: "row",
    gap: horizontalSpacing.s12,
    marginTop: verticalSpacing.s8,
  },
});
