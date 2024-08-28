import { Typography } from "@mui/material";
import "./styles.css";

const BattleResult = ({ winnerName }: { winnerName: string }) => {
  return (
    <Typography variant="h6" color="primary" align="center" className="result">
      {winnerName} wins!
    </Typography>
  );
};

export default BattleResult;
