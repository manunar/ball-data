import { LiveGame, PlayerStat, TeamComparisonPlayer, RadarDataPoint, Team } from "@/lib/types";

const lakers: Team = {
  id: "lakers",
  name: "L.A. Lakers",
  abbreviation: "LAL",
  color: "#FDB927",
  secondaryColor: "#552583",
};

const celtics: Team = {
  id: "celtics",
  name: "Boston Celtics",
  abbreviation: "BOS",
  color: "#007A33",
  secondaryColor: "#BA9653",
};

const newPaws: Team = {
  id: "new-paws",
  name: "New Paws",
  abbreviation: "NWP",
  color: "#1d428a",
  secondaryColor: "#c8102e",
};

const kulgets: Team = {
  id: "kulgets",
  name: "Kulgets",
  abbreviation: "KLG",
  color: "#c8102e",
  secondaryColor: "#ffffff",
};

const losAngeles: Team = {
  id: "los-angeles",
  name: "Los Anglets",
  abbreviation: "LAS",
  color: "#ed174c",
  secondaryColor: "#006bb6",
};

const boirlineirs: Team = {
  id: "boirlineirs",
  name: "Boirlineirs",
  abbreviation: "BLR",
  color: "#5a2d82",
  secondaryColor: "#f9a01b",
};

const santaMiojers: Team = {
  id: "santa-miojers",
  name: "Santa Miojers",
  abbreviation: "STM",
  color: "#00788c",
  secondaryColor: "#e56020",
};

export const liveGames: LiveGame[] = [
  {
    id: "game-1",
    homeTeam: lakers,
    awayTeam: celtics,
    homeScore: 98,
    awayScore: 95,
    quarter: "Quarter",
    timeRemaining: "12:35",
    isLive: true,
    homeWinProbability: 68,
  },
  {
    id: "game-2",
    homeTeam: lakers,
    awayTeam: celtics,
    homeScore: 98,
    awayScore: 95,
    quarter: "Quarter",
    timeRemaining: "12:35",
    isLive: true,
    homeWinProbability: 68,
  },
  {
    id: "game-3",
    homeTeam: newPaws,
    awayTeam: kulgets,
    homeScore: 98,
    awayScore: 93,
    quarter: "Quarter",
    timeRemaining: "12:35",
    isLive: true,
    homeWinProbability: 68,
  },
  {
    id: "game-4",
    homeTeam: lakers,
    awayTeam: celtics,
    homeScore: 98,
    awayScore: 95,
    quarter: "Quarter",
    timeRemaining: "11:35",
    isLive: true,
    homeWinProbability: 68,
  },
  {
    id: "game-5",
    homeTeam: losAngeles,
    awayTeam: boirlineirs,
    homeScore: 98,
    awayScore: 95,
    quarter: "Quarter",
    timeRemaining: "13:15",
    isLive: true,
    homeWinProbability: 68,
  },
  {
    id: "game-6",
    homeTeam: santaMiojers,
    awayTeam: celtics,
    homeScore: 98,
    awayScore: 95,
    quarter: "Quarter",
    timeRemaining: "11:25",
    isLive: true,
    homeWinProbability: 68,
  },
];

export const playerStats: PlayerStat[] = [
  { name: "L.A. Lakers", ap: 98, w: 95, q: 0, pts: 28, ptd: 58.0 },
  { name: "R. Hebman", ap: 94, w: 12, q: 1, pts: 5, ptd: 57.0 },
  { name: "A. Wealers", ap: 96, w: 17, q: 0, pts: 23, ptd: 68.0 },
  { name: "B. Rocks", ap: 33, w: 16, q: 0, pts: 3, ptd: 69.0 },
  { name: "D. Assists", ap: 34, w: 18, q: 0, pts: 3, ptd: 62.0 },
];

export const comparisonPlayers: TeamComparisonPlayer[] = [
  { name: "P. Points", w: 55, as: 18, eff: 6, dotColor: "#ef4444" },
  { name: "R. Ro", w: 45, as: 17, eff: 3, dotColor: "#f97316" },
  { name: "L. M", w: 48, as: 18, eff: 6, dotColor: "#22c55e" },
  { name: "J. Shivarzon", w: 30, as: 17, eff: 7, dotColor: "#06b6d4" },
  { name: "S. Alexson", w: 24, as: 18, eff: 4, dotColor: "#ffffff" },
];

export const radarData: RadarDataPoint[] = [
  { stat: "Points", teamA: 85, teamB: 70 },
  { stat: "Rebounds", teamA: 65, teamB: 80 },
  { stat: "Assists", teamA: 70, teamB: 55 },
  { stat: "Steals", teamA: 50, teamB: 60 },
  { stat: "Efficiency", teamA: 75, teamB: 65 },
];
