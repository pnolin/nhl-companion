import React, { Fragment } from "react";
import { Game as GameModel } from "../models/schedule.model";

interface Props {
  game: GameModel;
}

const Game: React.FC<Props> = (props: Props) => {
  const awayTeam = props.game.teams.away;
  const homeTeam = props.game.teams.home;

  return <div>{`${awayTeam.team.name} vs ${homeTeam.team.name}`}</div>;
};

export default Game;
