import axios, { AxiosInstance } from "axios";
import Config from "react-native-config";

export const customAxios: AxiosInstance = axios.create({
  timeout: 8000,
  baseURL: 'https://pokeapi.co/api/v2',
});

export default customAxios;
