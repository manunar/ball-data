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

export interface FollowedTeam {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
  secondaryColor: string;
  sport: "basketball" | "football";
  league: string;
  position: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  form: ("W" | "L" | "D")[];
  nextOpponent: string;
}

// ── Detail modal types ────────────────────────────────────────────────────────
export interface RecentMatch {
  opponent: string;
  date: string;
  result: "W" | "L" | "D";
  scoreFor: number;
  scoreAgainst: number;
  competition: string;
}

export interface TeamTopPlayer {
  name: string;
  position: string;
  number: number;
  teamColor: string;
  stat1: { label: string; value: string | number };
  stat2: { label: string; value: string | number };
  rating: number;
}

export interface TeamDetailData {
  recentMatches: RecentMatch[];
  topPlayers: TeamTopPlayer[];
  seasonStats: { label: string; value: string | number }[];
  radarStats: { stat: string; value: number }[];
}

export interface PlayerRecentMatch {
  opponent: string;
  date: string;
  result: "W" | "L" | "D";
  scoreFor: number;
  scoreAgainst: number;
  stats: { label: string; value: string | number }[];
}

export interface PlayerDetailData {
  recentMatches: PlayerRecentMatch[];
  radarStats: { stat: string; value: number }[];
}

export interface GameTeamStat {
  label: string;
  home: number;
  away: number;
}

export interface GamePlayerStat {
  name: string;
  number: number;
  playerId?: string;
  stats: { label: string; value: string | number }[];
  radarStats?: { stat: string; value: number }[];
  previousMatch?: {
    opponent: string;
    stats: { label: string; value: string | number }[];
    radarStats?: { stat: string; value: number }[];
  };
}

export interface GameDetailData {
  teamStats: GameTeamStat[];
  homeTeamRadar: { stat: string; value: number }[];
  awayTeamRadar: { stat: string; value: number }[];
  homePlayers: GamePlayerStat[];
  awayPlayers: GamePlayerStat[];
}

export interface FollowedPlayer {
  id: string;
  name: string;
  position: string;
  team: string;
  teamColor: string;
  sport: "basketball" | "football";
  number: number;
  stat1: { label: string; value: string | number };
  stat2: { label: string; value: string | number };
  stat3: { label: string; value: string | number };
  rating: number;
}
