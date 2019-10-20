import React from "react";
import { Game as GameModel } from "../models/schedule.model";
import Game from "./game.component";

interface Props {
  games: GameModel[];
}

const GamesList: React.FC<Props> = (games: Props) => {
  const gamesComponents = games.games.map(game => (
    <Game key={game.gamePk} game={game}></Game>
  ));

  return <ul>{gamesComponents}</ul>;
};

export default GamesList;
