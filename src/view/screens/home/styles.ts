import { colors, radius } from "../../../constants/designConstants";
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "@/constants/metrics";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.dark,
    paddingTop: 0,
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    marginTop: verticalScale(50),
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingFooter: {
    marginVertical: 16,
    alignItems: "center",
  },
  errorFooter: {
    alignItems: "center",
    marginVertical: 16,
  },
  errorText: {
    color: colors.red,
  },
  retryText: {
    color: colors.blue,
    marginTop: 8,
  },
  endOfList: {
    marginVertical: 16,
    alignItems: "center",
  },
  endText: {
    color: colors.grey,
  },
  items: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(200),
  },
  item: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    backgroundColor: colors.secondLightGrey,
    borderRadius: radius.large,
    marginBottom: verticalScale(10),
  },
  button: {
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(6),
    backgroundColor: colors.blue,
    borderRadius: radius.big,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(8),
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: horizontalScale(20),
    marginVertical: verticalScale(20),
  },
});
