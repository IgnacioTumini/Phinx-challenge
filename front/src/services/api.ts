import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getPokemons = () => api.get("/pokemons");
export const battlePokemons = (pokemon1Id: string, pokemon2Id: string) =>
  api.post("/battle", { pokemon1Id, pokemon2Id });
