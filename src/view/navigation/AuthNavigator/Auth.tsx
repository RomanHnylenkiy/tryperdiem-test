import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "@/view/screens/sign-in";
import { Routes } from "../Routes";
import { DEFAULT_SCREEN_OPTIONS } from "../options";

export type AuthStackParamList = {
  [Routes.SIGN_IN]: undefined;
};

const AuthStack = createStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
    <AuthStack.Screen name={Routes.SIGN_IN} component={SignInScreen} />
  </AuthStack.Navigator>
);
