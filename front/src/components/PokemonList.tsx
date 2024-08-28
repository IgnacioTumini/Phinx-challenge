/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

interface PokemonListProps {
  pokemons: any[];
  onSelect: (pokemon: any) => void;
}

const PokemonList = ({ pokemons, onSelect }: PokemonListProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      gap={2}
      marginTop={2}
    >
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          sx={{ width: 150 }}
          onClick={() => onSelect(pokemon)}
        >
          <CardActionArea>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                alt={pokemon.name}
                src={pokemon.imageUrl}
                sx={{ width: 80, height: 80, margin: "auto" }}
              />
              <Typography variant="h6">{pokemon.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default PokemonList;
