import { NavigationContainer } from "@react-navigation/native";

import { navigationRef } from "./RootNavigator";
import { useSelector } from "react-redux";
import { AuthNavigator } from "./AuthNavigator";
import { HomeNavigator } from "./HomeNavigator/HomeNavigator";
import { Routes } from "./Routes";
import { authSelectors } from "@/bus/auth";

const linking = {
  prefixes: ["myapp://"],
  config: {
    screens: {
      [Routes.ITEM_DETAILS]: "itemDetails/:url",
    },
  },
};

const AppNavigator = () => {
  const isLogged = useSelector(authSelectors.getIsLogged);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      {isLogged ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default AppNavigator;
