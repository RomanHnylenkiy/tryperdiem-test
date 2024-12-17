import React from "react";
import { DrawerActions, NavigationContainerRef } from "@react-navigation/native";
import { Routes } from "./Routes";

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = (name: Routes, params?: any) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  console.log(navigationRef.current, navigationRef.current?.canGoBack());
  if (navigationRef.current && navigationRef.current.canGoBack()) {
    navigationRef.current.goBack();
  } else {
    navigationRef.current?.navigate(Routes.HOME);
  }
};

export const reset = ({
  index,
  routes,
}: {
  index: number;
  routes: { name: Routes; params?: any }[];
}) => {
  if (navigationRef.current) {
    navigationRef.current.reset({ index, routes });
  }
};

export const openDrawer = () => {
  if (navigationRef.current) {
    return navigationRef.current.dispatch(DrawerActions.openDrawer());
  }
};
