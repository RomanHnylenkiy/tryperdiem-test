import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { queryClient } from "./src/view/query-client";
import { persistor, store } from "./src/store";
import AppNavigator from "./src/view/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  handleNotificationClick,
  initializeNotifications,
} from "./src/notifications/notificationsHandler";
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async remoteMessage => {
  handleNotificationClick(remoteMessage);
});

function App(): JSX.Element {
  useEffect(() => {
    initializeNotifications();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
