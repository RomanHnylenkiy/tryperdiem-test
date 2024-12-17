import { colors } from "../../../constants/designConstants";
import { StyleSheet } from "react-native";
import { verticalScale } from "../../../constants/metrics";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  button: {
    marginBottom: verticalScale(15),
  },
  title: {
    marginBottom: verticalScale(10),
  },
  subtitle: {
    maxWidth: "70%",
  },
});
