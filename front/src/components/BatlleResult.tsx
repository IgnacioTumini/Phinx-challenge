import React from "react";
import { Typography } from "@mui/material";

const BattleResult = ({ winnerName }) => {
  return (
    <Typography variant="h6" color="primary" align="center">
      {winnerName} wins!
    </Typography>
  );
};

export default BattleResult;
