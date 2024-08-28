import axios from "axios";

export const getPokemons = async () => {
  try {
    const response = await axios.get("http://localhost:3000/pokemon");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  } //trae todos los pokemones
};

export const battlePokemons = async (
  pokemon1Id: string,
  pokemon2Id: string
) => {
  try {
    const response = await axios.post("http://localhost:3000/pokemon/battle", {
      pokemon1Id,
      pokemon2Id,
    });
    return response.data.winner;
  } catch (error) {
    console.log(error);
  }
};
