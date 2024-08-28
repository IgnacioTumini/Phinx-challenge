import React from "react";
import { Card, CardContent, Typography, LinearProgress } from "@mui/material";

export interface PokemonProps {
  id: string;
  name: string;
  imageUrl: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

const PokemonCard: React.FC<PokemonProps> = ({
  id,
  name,
  imageUrl,
  hp,
  attack,
  defense,
  speed,
}) => {
  return (
    <Card>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
      <CardContent>
        <Typography variant="h6">{id}</Typography>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">HP</Typography>
        <LinearProgress variant="determinate" value={hp * 20} />
        <Typography variant="body2">Attack</Typography>
        <LinearProgress variant="determinate" value={attack * 20} />
        <Typography variant="body2">Defense</Typography>
        <LinearProgress variant="determinate" value={defense * 20} />
        <Typography variant="body2">Speed</Typography>
        <LinearProgress variant="determinate" value={speed * 20} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
