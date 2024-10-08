import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import PokemonList from "./components/PokemonList";
import PokemonCard, { PokemonProps } from "./components/PokemonCard";
import BattleResult from "./components/BatlleResult";
import { getPokemons, battlePokemons } from "./services/api";
import "./App.css";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[] | []>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps>({
    id: "",
    name: "",
    imageUrl: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
  });
  const [opponent, setOpponent] = useState<PokemonProps | null>(null);
  const [battleResult, setBattleResult] = useState("");

  useEffect(() => {
    getPokemons().then((response) => {
      setPokemons(response);
    });
  }, []);

  const handleSelectPokemon = (pokemon: PokemonProps) => {
    setSelectedPokemon(pokemon);
    const randomOpponent = pokemons.filter((p) => p.id !== pokemon.id)[
      Math.floor(Math.random() * (pokemons.length - 1))
    ];
    setOpponent(randomOpponent);
  };

  const handleStartBattle = () => {
    if (selectedPokemon && opponent) {
      battlePokemons(selectedPokemon.id, opponent.id).then((response) => {
        setBattleResult(response);
      });
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Battle of Pokemon
      </Typography>
      {!selectedPokemon && (
        <Typography variant="h5" align="center" gutterBottom>
          Select your Pokemon
        </Typography>
      )}
      <PokemonList pokemons={pokemons} onSelect={handleSelectPokemon} />
      {battleResult && <BattleResult winnerName={battleResult} />}
      {selectedPokemon && opponent && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="pokemon-container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <PokemonCard
              id={selectedPokemon.id}
              name={selectedPokemon.name}
              imageUrl={selectedPokemon.imageUrl}
              hp={selectedPokemon.hp}
              attack={selectedPokemon.attack}
              defense={selectedPokemon.defense}
              speed={selectedPokemon.speed}
            />

            <div
              className="battle-button"
              style={{ textAlign: "center", marginTop: "200px" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleStartBattle}
              >
                Start Battle
              </Button>
            </div>
            <PokemonCard
              id={opponent.id}
              name={opponent.name}
              imageUrl={opponent.imageUrl}
              hp={opponent.hp}
              attack={opponent.attack}
              defense={opponent.defense}
              speed={opponent.speed}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default App;
