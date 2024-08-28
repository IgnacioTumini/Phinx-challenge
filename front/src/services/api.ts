import axios from "axios";

export const getPokemons = () => axios.get("http://localhost:3000/pokemons"); //trae todos los pokemones
export const battlePokemons = (pokemon1Id: string, pokemon2Id: string) =>
  axios.post("http://localhost:3000/pokemons/battle", {
    pokemon1Id,
    pokemon2Id,
  }); // pelea dos pokemones, trae el ganador y perdedor
