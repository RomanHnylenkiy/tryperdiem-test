import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../Routes";
import { DEFAULT_SCREEN_OPTIONS } from "../options";
import { HomeScreen } from "@/view/screens/home";
import { ItemDetailsScreen } from "@/view/screens/item-details";

export type HomeStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.ITEM_DETAILS]: {
    url: string;
  };
};

const HomeStack = createStackNavigator<HomeStackParamList>();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS} initialRouteName={Routes.HOME}>
      <HomeStack.Screen name={Routes.HOME} component={HomeScreen} />
      <HomeStack.Screen name={Routes.ITEM_DETAILS} component={ItemDetailsScreen} />
    </HomeStack.Navigator>
  );
};
