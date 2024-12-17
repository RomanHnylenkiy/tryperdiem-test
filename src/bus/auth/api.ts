import { Platform } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from "react-native-config";

GoogleSignin.configure({
  webClientId: Platform.OS === "ios" ? Config.GOOGLE_IOS_CLIENT_ID : Config.GOOGLE_WEB_CLIENT_ID,
  iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
});

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const signInData = await GoogleSignin.signIn();
    return signInData.data;
  } catch (e) {
    return console.log(e, "Google sign in error");
  }
};

export const signOutFromGoogle = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
