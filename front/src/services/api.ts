import axios from "axios";

export const getPokemons = () => axios.get("/pokemons");
export const battlePokemons = (pokemon1Id: string, pokemon2Id: string) =>
  axios.post("/battle", { pokemon1Id, pokemon2Id });
