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

const PokemonCard = ({
  name,
  imageUrl,
  hp,
  attack,
  defense,
  speed,
}: PokemonProps) => {
  return (
    <Card style={{ width: "40%", height: "auto" }}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "100%", height: "auto" }}
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">HP</Typography>
        <LinearProgress variant="determinate" color="success" value={hp * 10} />
        <Typography variant="body2">Attack</Typography>
        <LinearProgress
          variant="determinate"
          color="success"
          value={attack * 10}
        />
        <Typography variant="body2">Defense</Typography>
        <LinearProgress
          variant="determinate"
          color="success"
          value={defense * 10}
        />
        <Typography variant="body2">Speed</Typography>
        <LinearProgress
          variant="determinate"
          color="success"
          value={speed * 10}
        />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
