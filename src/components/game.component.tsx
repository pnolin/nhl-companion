import React from "react";
import { Game as GameModel, Team } from "../models/schedule.model";
import { finalGameState, inProgressGameState } from "../constants";
import moment from "moment";
import "../styles/game.css";

interface Props {
  game: GameModel;
}

const Game: React.FC<Props> = (props: Props) => {
  const gameStatus = getGameStatus(props.game);

  const awayTeam = props.game.teams.away;
  const homeTeam = props.game.teams.home;

  const awayTeamName = getTeamName(awayTeam);
  const homeTeamName = getTeamName(homeTeam);

  const awayTeamRecord = getTeamRecord(awayTeam);
  const homeTeamRecord = getTeamRecord(homeTeam);

  const awayScore =
    gameStatus !== inProgressGameState && gameStatus !== finalGameState
      ? ""
      : awayTeam.score;
  const homeScore =
    gameStatus !== inProgressGameState && gameStatus !== finalGameState
      ? ""
      : homeTeam.score;

  const gameExtra = getGameExtra(props.game);

  return (
    <div id="game">
      <div id="teams">
        <div className="team">
          <div className="team-info">
            <span className="body-text team-name">{awayTeamName}</span>
            <span className="caption-text team-record">{awayTeamRecord}</span>
          </div>
          <div className="team-score">
            <span>{awayScore}</span>
          </div>
        </div>
        <hr />
        <div className="team">
          <div className="team-info">
            <span className="team-name team-name">{homeTeamName}</span>
            <span className="caption-text team-record">{homeTeamRecord}</span>
          </div>
          <div className="team-score">
            <span>{homeScore}</span>
          </div>
        </div>
      </div>
      <div id="game-extra">
        <span>{gameExtra}</span>
      </div>
    </div>
  );
};

const getTeamName = (team: Team) =>
  team.team.name
    .split(" ")
    .slice(1)
    .join(" ")
    .toLocaleUpperCase();

const getTeamRecord = (team: Team) =>
  `${team.leagueRecord.wins}-${team.leagueRecord.losses}-${team.leagueRecord.ot}`;

const getGameExtra = (game: GameModel) => {
  const gameStatus = getGameStatus(game);
  if (gameStatus === inProgressGameState) {
    return "Live";
  } else if (gameStatus === finalGameState) {
    return "Final";
  } else {
    return moment(game.gameDate).format("HH:mm");
  }
};

const getGameStatus = (game: GameModel) => game.status.detailedState;

export default Game;
