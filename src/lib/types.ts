export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
  secondaryColor?: string;
}

export interface LiveGame {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  quarter: string;
  timeRemaining: string;
  isLive: boolean;
  homeWinProbability: number;
}

export interface PlayerStat {
  name: string;
  ap: number;
  w: number;
  q: number;
  pts: number;
  ptd: number;
}

export interface TeamComparisonPlayer {
  name: string;
  w: number;
  as: number;
  eff: number;
  dotColor: string;
}

export interface RadarDataPoint {
  stat: string;
  teamA: number;
  teamB: number;
}
