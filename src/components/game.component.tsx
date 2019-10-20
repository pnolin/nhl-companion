import React, { Fragment } from "react";
import { Game as GameModel, Away } from "../models/schedule.model";

interface Props {
  game: GameModel;
}

const Game: React.FC<Props> = (props: Props) => {
  const awayTeam = props.game.teams.away;
  const homeTeam = props.game.teams.home;

  const awayTeamName = getTeamName(awayTeam);
  const homeTeamName = getTeamName(homeTeam);

  return (
    <div>
      <div>{awayTeamName}</div>
      <div>{homeTeamName}</div>
    </div>
  );
};

const getTeamName = (team: Away) =>
  team.team.name
    .split(" ")
    .slice(1)
    .join(" ")
    .toLocaleUpperCase();

export default Game;
