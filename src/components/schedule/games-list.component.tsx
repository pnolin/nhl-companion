import React from "react";
import { Game as GameModel } from "../../models/schedule.model";
import Game from "./game.component";
import "../../styles/games-list.css";

interface Props {
  games: GameModel[];
}

const GamesList: React.FC<Props> = (games: Props) => {
  const gamesComponents = games.games.map(game => (
    <Game key={game.gamePk} game={game}></Game>
  ));

  return <ul id="game-list">{gamesComponents}</ul>;
};

export default GamesList;
