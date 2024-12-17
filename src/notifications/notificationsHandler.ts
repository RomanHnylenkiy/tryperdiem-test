import { navigationRef } from "@/view/navigation/RootNavigator";
import { Routes } from "@/view/navigation/Routes";
import messaging, { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import { Alert, Linking } from "react-native";

export const handleNotificationClick = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
): void => {
  const link = remoteMessage?.data?.link;

  if (link) {
    console.log(link, "linklink");
    Linking.openURL(link as string);
  } else if (remoteMessage?.data?.type === "pokemonDetails") {
    const url = remoteMessage.data.url;
    const encodedUrl = encodeURIComponent(url as string);
    navigationRef.current?.navigate(Routes.ITEM_DETAILS, { url: encodedUrl });
  }
};

export const initializeNotifications = async (): Promise<void> => {
  messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    Alert.alert(
      remoteMessage.notification?.title ?? "Notification",
      remoteMessage.notification?.body ?? "You have a new message",
    );
  });

  messaging().onNotificationOpenedApp(
    (remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      handleNotificationClick(remoteMessage);
    },
  );

  const initialNotification = await messaging().getInitialNotification();
  if (initialNotification) {
    handleNotificationClick(initialNotification);
  }
};
