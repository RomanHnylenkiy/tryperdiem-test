import { endpoints } from "@/constants/endpoints";
import axios from "axios";
import { IPokemonData } from "./types";

export const fetchPokemons = async ({
  pageParam = `https://pokeapi.co/api/v2/${endpoints.POKEMONS_LIST}`,
}) => {
  const response = await axios.get(pageParam);

  return {
    results: response.data.results,
    nextPage: response.data.next,
  };
};

export const fetchPokemonByUrl = async (url: string): Promise<IPokemonData> => {
  const response = await axios.get<IPokemonData>(url);
  return response.data;
};
