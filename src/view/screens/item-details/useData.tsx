import { fetchPokemonByUrl } from "@/bus/home/api";
import { QueryKeys } from "@/constants/query";
import { useMemo } from "react";
import { useQuery } from "react-query";

interface IProps {
  url: string;
}

export const useData = ({ url }: IProps) => {
  const { data, isLoading, isFetching } = useQuery([QueryKeys.GET_ONE_POKEMON], () => {
    return fetchPokemonByUrl(url);
  });

  const loading = useMemo(() => {
    return isLoading || isFetching;
  }, [isLoading, isFetching]);

  return {
    data,
    loading,
    isFetching,
  };
};
