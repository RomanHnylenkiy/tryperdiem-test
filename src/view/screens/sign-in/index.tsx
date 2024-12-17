import { SafeAreaView } from "react-native";

import { styles } from "./styles";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useData } from "./useData";
import Text from "@/view/components/Text";
import { textStyles, fonts, colors } from "@/constants/designConstants";

export const SignInScreen = () => {
  const { login } = useData();

  return (
    <SafeAreaView style={styles.container}>
      <Text
        fontSize={textStyles.H3}
        fontFamily={fonts.MEDIUM}
        color={colors.dark}
        lineHeight={150}
        style={styles.title}
      >
        Sign in
      </Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={login}
        style={styles.button}
      />
      <Text
        fontSize={textStyles.H7}
        fontFamily={fonts.REGULAR}
        color={colors.darkGrey}
        textAlign="center"
        style={styles.subtitle}
      >
        please Sign in with Google to continue using the app
      </Text>
    </SafeAreaView>
  );
};
