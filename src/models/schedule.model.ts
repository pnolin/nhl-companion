export interface Schedule {
  dates: DateElement[];
}

export interface DateElement {
  date: string;
  games: Game[];
}

export interface Game {
  gameDate: string;
  status: Status;
  teams: Teams;
  venue: Venue;
}

export interface Status {
  statusCode: string;
}

export interface Teams {
  away: Away;
  home: Away;
}

export interface Away {
  leagueRecord: LeagueRecord;
  score: number;
  team: Venue;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  ot: number;
}

export enum Type {
  League = "league"
}

export interface Venue {
  id: number;
  name: string;
  link: string;
}
