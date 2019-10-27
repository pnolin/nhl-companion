//TODO Investigate possibles status, maybe use abstract instead of detailed.

import React from "react";
import { Game as GameModel, Team } from "../models/schedule.model";
import { previewGameState, liveGameState, finalGameState } from "../constants";
import moment from "moment";
import "../styles/game.css";

interface Props {
  game: GameModel;
}

const Game: React.FC<Props> = (props: Props) => {
  const teamLogoBaseUrl =
    "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/";

  const awayTeam = props.game.teams.away;
  const homeTeam = props.game.teams.home;

  const gameStatus = getGameStatus(props.game);

  const awayTeamName = getTeamName(awayTeam);
  const homeTeamName = getTeamName(homeTeam);

  const awayTeamRecord = getTeamRecord(awayTeam);
  const homeTeamRecord = getTeamRecord(homeTeam);

  const awayScore = shouldDisplayScore(gameStatus) ? awayTeam.score : "";
  const homeScore = shouldDisplayScore(gameStatus) ? homeTeam.score : "";

  const gameExtra = getGameExtra(props.game);

  return (
    <div id="game">
      <div id="teams">
        <div className="team">
          <img
            src={`${teamLogoBaseUrl}${awayTeam.team.id}.svg`}
            className="team-logo"
          ></img>
          <div className="team-info">
            <span className="body-text team-name">{awayTeamName}</span>
            <span className="caption-text team-record">{awayTeamRecord}</span>
          </div>
          <div className="body-text team-score">
            <span>{awayScore}</span>
          </div>
        </div>
        <hr />
        <div className="team">
          <img
            src={`${teamLogoBaseUrl}${homeTeam.team.id}.svg`}
            className="team-logo"
          ></img>
          <div className="team-info">
            <span className="body-text team-name">{homeTeamName}</span>
            <span className="caption-text team-record">{homeTeamRecord}</span>
          </div>
          <div className="body-text team-score">
            <span>{homeScore}</span>
          </div>
        </div>
      </div>
      <div id="game-extra">
        <span className="body-text">{gameExtra}</span>
      </div>
    </div>
  );
};

const getTeamName = (team: Team) => team.team.name;

const getTeamRecord = (team: Team) =>
  `${team.leagueRecord.wins}-${team.leagueRecord.losses}-${team.leagueRecord.ot}`;

const getGameExtra = (game: GameModel) => {
  const gameStatus = getGameStatus(game);
  if (gameStatus === liveGameState) {
    return "Live";
  } else if (gameStatus === finalGameState) {
    return "Final";
  } else {
    return moment(game.gameDate).format("HH:mm");
  }
};

const getGameStatus = (game: GameModel) => game.status.abstractGameState;

const shouldDisplayScore = (gameStatus: string) =>
  gameStatus !== previewGameState;

export default Game;
