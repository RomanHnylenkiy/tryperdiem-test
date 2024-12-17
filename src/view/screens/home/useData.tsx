import { fetchPokemons } from "@/bus/home/api";
import { QueryKeys } from "@/constants/query";

import { useInfiniteQuery } from "react-query";
import { Routes } from "../../navigation/Routes";
import { navigate } from "@/view/navigation/RootNavigator";
import { PermissionsAndroid } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { homeActions, homeSelectors } from "@/bus/home";
import { useAppDispatch } from "@/store";

export const useData = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status, isError } =
    useInfiniteQuery(QueryKeys.GET_POKEMONS, fetchPokemons, {
      getNextPageParam: lastPage => lastPage.nextPage || undefined,
    });

  const pokemons = data?.pages.flatMap(page => page.results) || [];

  const activeButton = useSelector(homeSelectors.getActiveButton);
  const dispatch = useAppDispatch()

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const navigateToPokemonDetails = (url: string) => {
    navigate(Routes.ITEM_DETAILS, { url });
  };

  async function requestUserPermission() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    await messaging().requestPermission();
  }

  useEffect(() => {
    requestUserPermission();
  }, []);

  const setActiveButton = (value: string) => {
    dispatch(homeActions.setActiveButton(value))
  }

  return {
    isFetchingNextPage,
    status,
    hasNextPage,
    isError,
    pokemons,
    loadMore,
    navigateToPokemonDetails,
    setActiveButton,
    activeButton
  };
};
