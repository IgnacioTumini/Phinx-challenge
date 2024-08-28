import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

interface PokemonProps {
  name: string;
  imageUrl: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
}

const PokemonCard: React.FC<PokemonProps> = ({ name, imageUrl, stats }) => {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">HP</Typography>
        <LinearProgress variant="determinate" value={stats.hp * 20} />
        <Typography variant="body2">Attack</Typography>
        <LinearProgress variant="determinate" value={stats.attack * 20} />
        <Typography variant="body2">Defense</Typography>
        <LinearProgress variant="determinate" value={stats.defense * 20} />
        <Typography variant="body2">Speed</Typography>
        <LinearProgress variant="determinate" value={stats.speed * 20} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
