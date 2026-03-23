import { LiveGame, PlayerStat, TeamComparisonPlayer, RadarDataPoint, Team, FollowedTeam, FollowedPlayer, TeamDetailData, PlayerDetailData, GameDetailData } from "@/lib/types";

// ── Premier League teams ─────────────────────────────────────────────────────
const manCity:   Team = { id: "man-city",  name: "Man City",   abbreviation: "MCI", color: "#6CABDD", secondaryColor: "#1C2C5B" };
const arsenal:   Team = { id: "arsenal",   name: "Arsenal",    abbreviation: "ARS", color: "#EF0107", secondaryColor: "#9C824A" };
const liverpool: Team = { id: "liverpool", name: "Liverpool",  abbreviation: "LIV", color: "#C8102E", secondaryColor: "#F6EB61" };
const chelsea:   Team = { id: "chelsea",   name: "Chelsea",    abbreviation: "CHE", color: "#034694", secondaryColor: "#DBA111" };
const manUtd:    Team = { id: "man-utd",   name: "Man United", abbreviation: "MNU", color: "#DA291C", secondaryColor: "#FBE122" };
const tottenham: Team = { id: "tottenham", name: "Tottenham",  abbreviation: "TOT", color: "#132257", secondaryColor: "#FFFFFF" };

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

export const footballGames: LiveGame[] = [
  { id: "fg-1", homeTeam: manCity,   awayTeam: arsenal,   homeScore: 2, awayScore: 1, quarter: "2nd Half", timeRemaining: "67'", isLive: true, homeWinProbability: 71 },
  { id: "fg-2", homeTeam: liverpool, awayTeam: chelsea,   homeScore: 1, awayScore: 1, quarter: "1st Half", timeRemaining: "38'", isLive: true, homeWinProbability: 52 },
  { id: "fg-3", homeTeam: manUtd,    awayTeam: tottenham, homeScore: 0, awayScore: 2, quarter: "2nd Half", timeRemaining: "78'", isLive: true, homeWinProbability: 18 },
  { id: "fg-4", homeTeam: arsenal,   awayTeam: liverpool, homeScore: 3, awayScore: 1, quarter: "2nd Half", timeRemaining: "82'", isLive: true, homeWinProbability: 88 },
  { id: "fg-5", homeTeam: chelsea,   awayTeam: manUtd,    homeScore: 1, awayScore: 0, quarter: "1st Half", timeRemaining: "23'", isLive: true, homeWinProbability: 64 },
  { id: "fg-6", homeTeam: tottenham, awayTeam: manCity,   homeScore: 0, awayScore: 0, quarter: "1st Half", timeRemaining: "12'", isLive: true, homeWinProbability: 35 },
];

export const footballPlayerStats: PlayerStat[] = [
  { name: "E. Haaland",  ap: 9.1, w: 24, q: 5,  pts: 52, ptd: 78.4 },
  { name: "B. Saka",     ap: 8.4, w: 14, q: 11, pts: 38, ptd: 85.2 },
  { name: "M. Salah",    ap: 8.7, w: 18, q: 9,  pts: 44, ptd: 82.0 },
  { name: "C. Palmer",   ap: 8.9, w: 20, q: 12, pts: 41, ptd: 88.1 },
  { name: "H. Son",      ap: 8.2, w: 16, q: 7,  pts: 35, ptd: 80.5 },
];

export const footballRadarData: RadarDataPoint[] = [
  { stat: "Attack",     teamA: 88, teamB: 76 },
  { stat: "Possession", teamA: 72, teamB: 68 },
  { stat: "Defence",    teamA: 82, teamB: 74 },
  { stat: "Pressing",   teamA: 78, teamB: 71 },
  { stat: "Set Pieces", teamA: 70, teamB: 66 },
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

export const followedTeams: FollowedTeam[] = [
  // ── Basketball ──────────────────────────────────────────────────────────
  {
    id: "lakers-f", name: "L.A. Lakers", abbreviation: "LAL",
    color: "#FDB927", secondaryColor: "#552583",
    sport: "basketball", league: "NBA · Western Conference",
    position: 5, wins: 32, draws: 0, losses: 19, points: 32,
    form: ["W", "W", "L", "W", "W"], nextOpponent: "vs Golden State",
  },
  {
    id: "celtics-f", name: "Boston Celtics", abbreviation: "BOS",
    color: "#007A33", secondaryColor: "#BA9653",
    sport: "basketball", league: "NBA · Eastern Conference",
    position: 1, wins: 42, draws: 0, losses: 12, points: 42,
    form: ["W", "W", "W", "L", "W"], nextOpponent: "vs Miami Heat",
  },
  {
    id: "warriors-f", name: "Golden State Warriors", abbreviation: "GSW",
    color: "#1D428A", secondaryColor: "#FFC72C",
    sport: "basketball", league: "NBA · Western Conference",
    position: 8, wins: 28, draws: 0, losses: 23, points: 28,
    form: ["L", "W", "L", "W", "L"], nextOpponent: "@ L.A. Lakers",
  },
  // ── Football (Soccer) ────────────────────────────────────────────────────
  {
    id: "arsenal-f", name: "Arsenal", abbreviation: "ARS",
    color: "#EF0107", secondaryColor: "#9C824A",
    sport: "football", league: "Premier League",
    position: 2, wins: 19, draws: 4, losses: 5, points: 61,
    form: ["W", "W", "D", "W", "L"], nextOpponent: "vs Man City",
  },
  {
    id: "liverpool-f", name: "Liverpool", abbreviation: "LIV",
    color: "#C8102E", secondaryColor: "#F6EB61",
    sport: "football", league: "Premier League",
    position: 3, wins: 18, draws: 5, losses: 5, points: 59,
    form: ["W", "D", "W", "W", "L"], nextOpponent: "@ Chelsea",
  },
  {
    id: "chelsea-f", name: "Chelsea", abbreviation: "CHE",
    color: "#034694", secondaryColor: "#DBA111",
    sport: "football", league: "Premier League",
    position: 6, wins: 14, draws: 8, losses: 6, points: 50,
    form: ["L", "W", "W", "D", "W"], nextOpponent: "vs Liverpool",
  },
];

export const followedPlayers: FollowedPlayer[] = [
  // ── Basketball ──────────────────────────────────────────────────────────
  {
    id: "lebron", name: "LeBron James", position: "Forward",
    team: "L.A. Lakers", teamColor: "#FDB927",
    sport: "basketball", number: 23,
    stat1: { label: "PPG", value: 25.2 },
    stat2: { label: "APG", value: 7.3 },
    stat3: { label: "RPG", value: 7.8 },
    rating: 9.1,
  },
  {
    id: "tatum", name: "Jayson Tatum", position: "Forward",
    team: "Boston Celtics", teamColor: "#007A33",
    sport: "basketball", number: 0,
    stat1: { label: "PPG", value: 26.8 },
    stat2: { label: "APG", value: 4.9 },
    stat3: { label: "RPG", value: 8.1 },
    rating: 9.3,
  },
  {
    id: "curry", name: "Stephen Curry", position: "Guard",
    team: "Golden State Warriors", teamColor: "#1D428A",
    sport: "basketball", number: 30,
    stat1: { label: "PPG", value: 28.4 },
    stat2: { label: "APG", value: 6.3 },
    stat3: { label: "3PT%", value: "42.3%" },
    rating: 9.4,
  },
  {
    id: "davis", name: "Anthony Davis", position: "Center",
    team: "L.A. Lakers", teamColor: "#FDB927",
    sport: "basketball", number: 3,
    stat1: { label: "PPG", value: 23.1 },
    stat2: { label: "BPG", value: 2.3 },
    stat3: { label: "RPG", value: 12.6 },
    rating: 8.9,
  },
  // ── Football (Soccer) ────────────────────────────────────────────────────
  {
    id: "haaland", name: "Erling Haaland", position: "Striker",
    team: "Man City", teamColor: "#6CABDD",
    sport: "football", number: 9,
    stat1: { label: "Goals", value: 24 },
    stat2: { label: "Assists", value: 5 },
    stat3: { label: "Shots", value: 84 },
    rating: 9.1,
  },
  {
    id: "saka", name: "Bukayo Saka", position: "Winger",
    team: "Arsenal", teamColor: "#EF0107",
    sport: "football", number: 7,
    stat1: { label: "Goals", value: 14 },
    stat2: { label: "Assists", value: 11 },
    stat3: { label: "KeyPass", value: 62 },
    rating: 8.4,
  },
  {
    id: "salah", name: "Mohamed Salah", position: "Winger",
    team: "Liverpool", teamColor: "#C8102E",
    sport: "football", number: 11,
    stat1: { label: "Goals", value: 18 },
    stat2: { label: "Assists", value: 9 },
    stat3: { label: "Dribbles", value: 58 },
    rating: 8.7,
  },
  {
    id: "palmer", name: "Cole Palmer", position: "Midfielder",
    team: "Chelsea", teamColor: "#034694",
    sport: "football", number: 20,
    stat1: { label: "Goals", value: 20 },
    stat2: { label: "Assists", value: 12 },
    stat3: { label: "xG", value: 17.4 },
    rating: 8.9,
  },
];

export const radarData: RadarDataPoint[] = [
  { stat: "Points", teamA: 85, teamB: 70 },
  { stat: "Rebounds", teamA: 65, teamB: 80 },
  { stat: "Assists", teamA: 70, teamB: 55 },
  { stat: "Steals", teamA: 50, teamB: 60 },
  { stat: "Efficiency", teamA: 75, teamB: 65 },
];

// ── Team detail data ──────────────────────────────────────────────────────────
export const teamDetailData: Record<string, TeamDetailData> = {
  "lakers-f": {
    recentMatches: [
      { opponent: "Golden State", date: "Mar 20", result: "W", scoreFor: 115, scoreAgainst: 108, competition: "NBA" },
      { opponent: "Denver Nuggets", date: "Mar 18", result: "L", scoreFor: 102, scoreAgainst: 118, competition: "NBA" },
      { opponent: "Phoenix Suns", date: "Mar 15", result: "W", scoreFor: 124, scoreAgainst: 119, competition: "NBA" },
      { opponent: "Miami Heat", date: "Mar 13", result: "W", scoreFor: 109, scoreAgainst: 98, competition: "NBA" },
      { opponent: "Chicago Bulls", date: "Mar 11", result: "L", scoreFor: 97, scoreAgainst: 103, competition: "NBA" },
    ],
    topPlayers: [
      { name: "LeBron James", position: "Forward", number: 23, teamColor: "#FDB927", stat1: { label: "PPG", value: 25.2 }, stat2: { label: "RPG", value: 7.8 }, rating: 9.1 },
      { name: "Anthony Davis", position: "Center", number: 3, teamColor: "#FDB927", stat1: { label: "PPG", value: 23.1 }, stat2: { label: "BPG", value: 2.3 }, rating: 8.9 },
      { name: "D. Russell", position: "Guard", number: 1, teamColor: "#FDB927", stat1: { label: "PPG", value: 18.4 }, stat2: { label: "APG", value: 5.7 }, rating: 7.8 },
    ],
    seasonStats: [
      { label: "Points/Game", value: 111.4 }, { label: "Opp Pts/Game", value: 107.2 },
      { label: "Rebounds/Game", value: 44.1 }, { label: "Assists/Game", value: 26.8 }, { label: "FG%", value: "47.3%" },
    ],
  },
  "celtics-f": {
    recentMatches: [
      { opponent: "New York Knicks", date: "Mar 22", result: "W", scoreFor: 118, scoreAgainst: 102, competition: "NBA" },
      { opponent: "Milwaukee Bucks", date: "Mar 19", result: "W", scoreFor: 124, scoreAgainst: 108, competition: "NBA" },
      { opponent: "Cleveland Cavs", date: "Mar 17", result: "W", scoreFor: 112, scoreAgainst: 99, competition: "NBA" },
      { opponent: "Indiana Pacers", date: "Mar 14", result: "L", scoreFor: 97, scoreAgainst: 114, competition: "NBA" },
      { opponent: "Philadelphia", date: "Mar 12", result: "W", scoreFor: 128, scoreAgainst: 111, competition: "NBA" },
    ],
    topPlayers: [
      { name: "Jayson Tatum", position: "Forward", number: 0, teamColor: "#007A33", stat1: { label: "PPG", value: 26.8 }, stat2: { label: "RPG", value: 8.1 }, rating: 9.3 },
      { name: "Jaylen Brown", position: "Guard", number: 7, teamColor: "#007A33", stat1: { label: "PPG", value: 22.3 }, stat2: { label: "APG", value: 3.8 }, rating: 8.5 },
      { name: "D. White", position: "Guard", number: 9, teamColor: "#007A33", stat1: { label: "PPG", value: 15.2 }, stat2: { label: "APG", value: 5.1 }, rating: 8.0 },
    ],
    seasonStats: [
      { label: "Points/Game", value: 120.6 }, { label: "Opp Pts/Game", value: 109.3 },
      { label: "Rebounds/Game", value: 46.2 }, { label: "Assists/Game", value: 28.4 }, { label: "FG%", value: "49.1%" },
    ],
  },
  "warriors-f": {
    recentMatches: [
      { opponent: "Denver Nuggets", date: "Mar 21", result: "L", scoreFor: 108, scoreAgainst: 121, competition: "NBA" },
      { opponent: "Sacramento Kings", date: "Mar 19", result: "W", scoreFor: 118, scoreAgainst: 104, competition: "NBA" },
      { opponent: "Phoenix Suns", date: "Mar 16", result: "L", scoreFor: 99, scoreAgainst: 112, competition: "NBA" },
      { opponent: "Portland Trail Blazers", date: "Mar 14", result: "W", scoreFor: 122, scoreAgainst: 97, competition: "NBA" },
      { opponent: "Dallas Mavericks", date: "Mar 12", result: "L", scoreFor: 103, scoreAgainst: 115, competition: "NBA" },
    ],
    topPlayers: [
      { name: "Stephen Curry", position: "Guard", number: 30, teamColor: "#1D428A", stat1: { label: "PPG", value: 28.4 }, stat2: { label: "3PT%", value: "42.3%" }, rating: 9.4 },
      { name: "K. Thompson", position: "Guard", number: 11, teamColor: "#1D428A", stat1: { label: "PPG", value: 19.1 }, stat2: { label: "3PT%", value: "38.4%" }, rating: 7.8 },
      { name: "D. Green", position: "Forward", number: 23, teamColor: "#1D428A", stat1: { label: "RPG", value: 8.7 }, stat2: { label: "APG", value: 8.2 }, rating: 8.0 },
    ],
    seasonStats: [
      { label: "Points/Game", value: 118.2 }, { label: "Opp Pts/Game", value: 115.4 },
      { label: "Rebounds/Game", value: 46.8 }, { label: "Assists/Game", value: 30.4 }, { label: "FG%", value: "48.6%" },
    ],
  },
  "arsenal-f": {
    recentMatches: [
      { opponent: "Man City", date: "Mar 22", result: "L", scoreFor: 0, scoreAgainst: 2, competition: "Premier League" },
      { opponent: "Porto", date: "Mar 19", result: "W", scoreFor: 3, scoreAgainst: 1, competition: "UCL" },
      { opponent: "Chelsea", date: "Mar 16", result: "W", scoreFor: 2, scoreAgainst: 0, competition: "Premier League" },
      { opponent: "Brentford", date: "Mar 9", result: "D", scoreFor: 1, scoreAgainst: 1, competition: "Premier League" },
      { opponent: "Liverpool", date: "Mar 2", result: "W", scoreFor: 2, scoreAgainst: 1, competition: "Premier League" },
    ],
    topPlayers: [
      { name: "Bukayo Saka", position: "Winger", number: 7, teamColor: "#EF0107", stat1: { label: "Goals", value: 14 }, stat2: { label: "Assists", value: 11 }, rating: 8.4 },
      { name: "K. Havertz", position: "Striker", number: 29, teamColor: "#EF0107", stat1: { label: "Goals", value: 12 }, stat2: { label: "Assists", value: 6 }, rating: 7.9 },
      { name: "G. Martinelli", position: "Winger", number: 11, teamColor: "#EF0107", stat1: { label: "Goals", value: 8 }, stat2: { label: "Assists", value: 9 }, rating: 7.6 },
    ],
    seasonStats: [
      { label: "Goals Scored", value: 58 }, { label: "Goals Conceded", value: 28 },
      { label: "Possession", value: "57%" }, { label: "Shots/Game", value: 15.2 }, { label: "Clean Sheets", value: 12 },
    ],
  },
  "liverpool-f": {
    recentMatches: [
      { opponent: "Everton", date: "Mar 22", result: "W", scoreFor: 3, scoreAgainst: 0, competition: "Premier League" },
      { opponent: "Wolves", date: "Mar 19", result: "D", scoreFor: 1, scoreAgainst: 1, competition: "Premier League" },
      { opponent: "Nottm Forest", date: "Mar 17", result: "W", scoreFor: 2, scoreAgainst: 0, competition: "Premier League" },
      { opponent: "Bournemouth", date: "Mar 9", result: "W", scoreFor: 4, scoreAgainst: 1, competition: "Premier League" },
      { opponent: "Man City", date: "Mar 2", result: "L", scoreFor: 0, scoreAgainst: 3, competition: "Premier League" },
    ],
    topPlayers: [
      { name: "Mohamed Salah", position: "Winger", number: 11, teamColor: "#C8102E", stat1: { label: "Goals", value: 18 }, stat2: { label: "Assists", value: 9 }, rating: 8.7 },
      { name: "L. Diaz", position: "Winger", number: 7, teamColor: "#C8102E", stat1: { label: "Goals", value: 12 }, stat2: { label: "Assists", value: 5 }, rating: 7.8 },
      { name: "Mac Allister", position: "Midfielder", number: 10, teamColor: "#C8102E", stat1: { label: "Goals", value: 7 }, stat2: { label: "Assists", value: 11 }, rating: 8.1 },
    ],
    seasonStats: [
      { label: "Goals Scored", value: 72 }, { label: "Goals Conceded", value: 31 },
      { label: "Possession", value: "59%" }, { label: "Shots/Game", value: 16.8 }, { label: "Clean Sheets", value: 14 },
    ],
  },
  "chelsea-f": {
    recentMatches: [
      { opponent: "Wolves", date: "Mar 22", result: "W", scoreFor: 3, scoreAgainst: 1, competition: "Premier League" },
      { opponent: "Brighton", date: "Mar 16", result: "D", scoreFor: 0, scoreAgainst: 0, competition: "Premier League" },
      { opponent: "Nottm Forest", date: "Mar 12", result: "W", scoreFor: 2, scoreAgainst: 1, competition: "Premier League" },
      { opponent: "Arsenal", date: "Mar 5", result: "L", scoreFor: 0, scoreAgainst: 2, competition: "Premier League" },
      { opponent: "Crystal Palace", date: "Mar 1", result: "W", scoreFor: 4, scoreAgainst: 0, competition: "Premier League" },
    ],
    topPlayers: [
      { name: "Cole Palmer", position: "Midfielder", number: 20, teamColor: "#034694", stat1: { label: "Goals", value: 20 }, stat2: { label: "Assists", value: 12 }, rating: 8.9 },
      { name: "N. Jackson", position: "Striker", number: 15, teamColor: "#034694", stat1: { label: "Goals", value: 11 }, stat2: { label: "Assists", value: 4 }, rating: 7.6 },
      { name: "C. Gallagher", position: "Midfielder", number: 23, teamColor: "#034694", stat1: { label: "Goals", value: 5 }, stat2: { label: "Assists", value: 8 }, rating: 7.4 },
    ],
    seasonStats: [
      { label: "Goals Scored", value: 62 }, { label: "Goals Conceded", value: 40 },
      { label: "Possession", value: "55%" }, { label: "Shots/Game", value: 14.4 }, { label: "Clean Sheets", value: 9 },
    ],
  },
};

// ── Player detail data ────────────────────────────────────────────────────────
export const playerDetailData: Record<string, PlayerDetailData> = {
  "lebron": { recentMatches: [
    { opponent: "Golden State", date: "Mar 20", result: "W", scoreFor: 115, scoreAgainst: 108, stats: [{ label: "PTS", value: 32 }, { label: "AST", value: 9 }, { label: "REB", value: 8 }] },
    { opponent: "Denver", date: "Mar 18", result: "L", scoreFor: 102, scoreAgainst: 118, stats: [{ label: "PTS", value: 22 }, { label: "AST", value: 7 }, { label: "REB", value: 6 }] },
    { opponent: "Phoenix", date: "Mar 15", result: "W", scoreFor: 124, scoreAgainst: 119, stats: [{ label: "PTS", value: 28 }, { label: "AST", value: 11 }, { label: "REB", value: 7 }] },
    { opponent: "Miami", date: "Mar 13", result: "W", scoreFor: 109, scoreAgainst: 98, stats: [{ label: "PTS", value: 26 }, { label: "AST", value: 8 }, { label: "REB", value: 9 }] },
    { opponent: "Chicago", date: "Mar 11", result: "L", scoreFor: 97, scoreAgainst: 103, stats: [{ label: "PTS", value: 18 }, { label: "AST", value: 5 }, { label: "REB", value: 7 }] },
  ]},
  "tatum": { recentMatches: [
    { opponent: "New York", date: "Mar 22", result: "W", scoreFor: 118, scoreAgainst: 102, stats: [{ label: "PTS", value: 34 }, { label: "AST", value: 5 }, { label: "REB", value: 9 }] },
    { opponent: "Milwaukee", date: "Mar 19", result: "W", scoreFor: 124, scoreAgainst: 108, stats: [{ label: "PTS", value: 28 }, { label: "AST", value: 4 }, { label: "REB", value: 8 }] },
    { opponent: "Cleveland", date: "Mar 17", result: "W", scoreFor: 112, scoreAgainst: 99, stats: [{ label: "PTS", value: 31 }, { label: "AST", value: 6 }, { label: "REB", value: 7 }] },
    { opponent: "Indiana", date: "Mar 14", result: "L", scoreFor: 97, scoreAgainst: 114, stats: [{ label: "PTS", value: 21 }, { label: "AST", value: 3 }, { label: "REB", value: 6 }] },
    { opponent: "Philadelphia", date: "Mar 12", result: "W", scoreFor: 128, scoreAgainst: 111, stats: [{ label: "PTS", value: 29 }, { label: "AST", value: 5 }, { label: "REB", value: 10 }] },
  ]},
  "curry": { recentMatches: [
    { opponent: "Denver", date: "Mar 21", result: "L", scoreFor: 108, scoreAgainst: 121, stats: [{ label: "PTS", value: 31 }, { label: "AST", value: 7 }, { label: "3PM", value: 5 }] },
    { opponent: "Sacramento", date: "Mar 19", result: "W", scoreFor: 118, scoreAgainst: 104, stats: [{ label: "PTS", value: 38 }, { label: "AST", value: 9 }, { label: "3PM", value: 7 }] },
    { opponent: "Phoenix", date: "Mar 16", result: "L", scoreFor: 99, scoreAgainst: 112, stats: [{ label: "PTS", value: 24 }, { label: "AST", value: 5 }, { label: "3PM", value: 3 }] },
    { opponent: "Portland", date: "Mar 14", result: "W", scoreFor: 122, scoreAgainst: 97, stats: [{ label: "PTS", value: 42 }, { label: "AST", value: 8 }, { label: "3PM", value: 9 }] },
    { opponent: "Dallas", date: "Mar 12", result: "L", scoreFor: 103, scoreAgainst: 115, stats: [{ label: "PTS", value: 27 }, { label: "AST", value: 6 }, { label: "3PM", value: 4 }] },
  ]},
  "davis": { recentMatches: [
    { opponent: "Golden State", date: "Mar 20", result: "W", scoreFor: 115, scoreAgainst: 108, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }] },
    { opponent: "Denver", date: "Mar 18", result: "L", scoreFor: 102, scoreAgainst: 118, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 11 }, { label: "BLK", value: 2 }] },
    { opponent: "Phoenix", date: "Mar 15", result: "W", scoreFor: 124, scoreAgainst: 119, stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 13 }, { label: "BLK", value: 4 }] },
    { opponent: "Miami", date: "Mar 13", result: "W", scoreFor: 109, scoreAgainst: 98, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }] },
    { opponent: "Chicago", date: "Mar 11", result: "L", scoreFor: 97, scoreAgainst: 103, stats: [{ label: "PTS", value: 21 }, { label: "REB", value: 10 }, { label: "BLK", value: 1 }] },
  ]},
  "haaland": { recentMatches: [
    { opponent: "Arsenal", date: "Mar 22", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] },
    { opponent: "Porto", date: "Mar 17", result: "W", scoreFor: 3, scoreAgainst: 0, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Rating", value: 9.1 }] },
    { opponent: "Everton", date: "Mar 12", result: "W", scoreFor: 5, scoreAgainst: 0, stats: [{ label: "Goals", value: 3 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.8 }] },
    { opponent: "Dortmund", date: "Mar 8", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.4 }] },
    { opponent: "Aston Villa", date: "Mar 2", result: "W", scoreFor: 4, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.7 }] },
  ]},
  "saka": { recentMatches: [
    { opponent: "Man City", date: "Mar 22", result: "L", scoreFor: 0, scoreAgainst: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.4 }] },
    { opponent: "Porto", date: "Mar 19", result: "W", scoreFor: 3, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.6 }] },
    { opponent: "Chelsea", date: "Mar 16", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] },
    { opponent: "Brentford", date: "Mar 9", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
    { opponent: "Liverpool", date: "Mar 2", result: "W", scoreFor: 2, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Rating", value: 9.0 }] },
  ]},
  "salah": { recentMatches: [
    { opponent: "Everton", date: "Mar 22", result: "W", scoreFor: 3, scoreAgainst: 0, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.2 }] },
    { opponent: "Wolves", date: "Mar 19", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
    { opponent: "Nottm Forest", date: "Mar 17", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
    { opponent: "Bournemouth", date: "Mar 9", result: "W", scoreFor: 4, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.9 }] },
    { opponent: "Arsenal", date: "Mar 2", result: "L", scoreFor: 1, scoreAgainst: 2, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.3 }] },
  ]},
  "palmer": { recentMatches: [
    { opponent: "Wolves", date: "Mar 22", result: "W", scoreFor: 3, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.1 }] },
    { opponent: "Brighton", date: "Mar 16", result: "D", scoreFor: 0, scoreAgainst: 0, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] },
    { opponent: "Nottm Forest", date: "Mar 12", result: "W", scoreFor: 2, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.4 }] },
    { opponent: "Arsenal", date: "Mar 5", result: "L", scoreFor: 0, scoreAgainst: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.2 }] },
    { opponent: "Crystal Palace", date: "Mar 1", result: "W", scoreFor: 4, scoreAgainst: 0, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 2 }, { label: "Rating", value: 9.5 }] },
  ]},
};

// ── Game detail data ──────────────────────────────────────────────────────────
export const gameDetailData: Record<string, GameDetailData> = {
  "game-1": {
    teamStats: [
      { label: "FG%", home: 47, away: 44 }, { label: "3PT%", home: 38, away: 35 },
      { label: "Rebounds", home: 38, away: 41 }, { label: "Assists", home: 22, away: 18 },
      { label: "Turnovers", home: 12, away: 9 }, { label: "Pts in Paint", home: 42, away: 38 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 9 }, { label: "AST", value: 8 }] },
      { name: "Anthony Davis", number: 3, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }] },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 3 }, { label: "AST", value: 6 }] },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 4 }, { label: "AST", value: 3 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, stats: [{ label: "PTS", value: 31 }, { label: "REB", value: 8 }, { label: "AST", value: 5 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 3 }, { label: "AST", value: 8 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 7 }, { label: "BLK", value: 2 }] },
    ],
  },
  "game-2": {
    teamStats: [
      { label: "FG%", home: 45, away: 48 }, { label: "3PT%", home: 36, away: 41 },
      { label: "Rebounds", home: 40, away: 37 }, { label: "Assists", home: 19, away: 24 },
      { label: "Turnovers", home: 14, away: 10 }, { label: "Pts in Paint", home: 36, away: 44 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 8 }, { label: "AST", value: 10 }] },
      { name: "Anthony Davis", number: 3, stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }] },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 21 }, { label: "REB", value: 2 }, { label: "AST", value: 7 }] },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 3 }, { label: "AST", value: 2 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, stats: [{ label: "PTS", value: 29 }, { label: "REB", value: 9 }, { label: "AST", value: 4 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 6 }, { label: "AST", value: 2 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 16 }, { label: "REB", value: 4 }, { label: "AST", value: 6 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 9 }, { label: "BLK", value: 3 }] },
    ],
  },
  "game-3": {
    teamStats: [
      { label: "FG%", home: 49, away: 43 }, { label: "3PT%", home: 40, away: 33 },
      { label: "Rebounds", home: 44, away: 38 }, { label: "Assists", home: 26, away: 20 },
      { label: "Turnovers", home: 10, away: 13 }, { label: "Pts in Paint", home: 48, away: 36 },
    ],
    homePlayers: [
      { name: "J. Carson", number: 10, stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 7 }, { label: "AST", value: 9 }] },
      { name: "M. Reed", number: 23, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 11 }, { label: "BLK", value: 2 }] },
      { name: "B. Stone", number: 5, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 4 }, { label: "AST", value: 5 }] },
      { name: "T. Wells", number: 14, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 3 }, { label: "AST", value: 4 }] },
    ],
    awayPlayers: [
      { name: "K. Mills", number: 7, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 6 }, { label: "AST", value: 4 }] },
      { name: "D. Porter", number: 11, stats: [{ label: "PTS", value: 20 }, { label: "REB", value: 8 }, { label: "AST", value: 3 }] },
      { name: "R. Jackson", number: 4, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 5 }, { label: "AST", value: 7 }] },
      { name: "C. Barnes", number: 33, stats: [{ label: "PTS", value: 15 }, { label: "REB", value: 9 }, { label: "BLK", value: 2 }] },
    ],
  },
  "game-4": {
    teamStats: [
      { label: "FG%", home: 46, away: 42 }, { label: "3PT%", home: 37, away: 34 },
      { label: "Rebounds", home: 39, away: 43 }, { label: "Assists", home: 20, away: 22 },
      { label: "Turnovers", home: 11, away: 8 }, { label: "Pts in Paint", home: 40, away: 46 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, stats: [{ label: "PTS", value: 30 }, { label: "REB", value: 7 }, { label: "AST", value: 9 }] },
      { name: "Anthony Davis", number: 3, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 13 }, { label: "BLK", value: 2 }] },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 7 }] },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 4 }, { label: "AST", value: 2 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, stats: [{ label: "PTS", value: 33 }, { label: "REB", value: 7 }, { label: "AST", value: 6 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 4 }, { label: "AST", value: 3 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 17 }, { label: "REB", value: 4 }, { label: "AST", value: 7 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 8 }, { label: "BLK", value: 2 }] },
    ],
  },
  "game-5": {
    teamStats: [
      { label: "FG%", home: 44, away: 47 }, { label: "3PT%", home: 35, away: 39 },
      { label: "Rebounds", home: 41, away: 36 }, { label: "Assists", home: 23, away: 19 },
      { label: "Turnovers", home: 9, away: 14 }, { label: "Pts in Paint", home: 44, away: 38 },
    ],
    homePlayers: [
      { name: "M. Velasquez", number: 8, stats: [{ label: "PTS", value: 27 }, { label: "REB", value: 6 }, { label: "AST", value: 8 }] },
      { name: "T. Fontaine", number: 21, stats: [{ label: "PTS", value: 23 }, { label: "REB", value: 10 }, { label: "BLK", value: 3 }] },
      { name: "R. Esteban", number: 3, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 4 }, { label: "AST", value: 6 }] },
      { name: "L. Gomez", number: 44, stats: [{ label: "PTS", value: 16 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }] },
    ],
    awayPlayers: [
      { name: "A. Dubois", number: 9, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 5 }, { label: "AST", value: 4 }] },
      { name: "K. Marchetti", number: 17, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 8 }, { label: "AST", value: 6 }] },
      { name: "J. Beaumont", number: 6, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 9 }] },
      { name: "S. Delacroix", number: 32, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 7 }, { label: "BLK", value: 2 }] },
    ],
  },
  "game-6": {
    teamStats: [
      { label: "FG%", home: 43, away: 46 }, { label: "3PT%", home: 34, away: 37 },
      { label: "Rebounds", home: 37, away: 42 }, { label: "Assists", home: 18, away: 25 },
      { label: "Turnovers", home: 13, away: 11 }, { label: "Pts in Paint", home: 40, away: 42 },
    ],
    homePlayers: [
      { name: "C. Nguyen", number: 12, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 8 }, { label: "AST", value: 7 }] },
      { name: "P. Reeves", number: 25, stats: [{ label: "PTS", value: 20 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }] },
      { name: "B. Watts", number: 7, stats: [{ label: "PTS", value: 17 }, { label: "REB", value: 4 }, { label: "AST", value: 5 }] },
      { name: "D. Kim", number: 18, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 3 }, { label: "AST", value: 3 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, stats: [{ label: "PTS", value: 30 }, { label: "REB", value: 8 }, { label: "AST", value: 5 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 7 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 8 }, { label: "BLK", value: 3 }] },
    ],
  },
  // ── Football games ─────────────────────────────────────────────────────────
  "fg-1": {
    teamStats: [
      { label: "Possession", home: 62, away: 38 }, { label: "Shots", home: 16, away: 9 },
      { label: "Shots on Target", home: 6, away: 4 }, { label: "Corners", home: 7, away: 3 },
      { label: "Fouls", home: 11, away: 13 }, { label: "Offsides", home: 2, away: 1 },
    ],
    homePlayers: [
      { name: "E. Haaland", number: 9, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] },
      { name: "K. De Bruyne", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 2 }, { label: "Rating", value: 8.8 }] },
      { name: "P. Foden", number: 47, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.4 }] },
      { name: "K. Walker", number: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.2 }] },
    ],
    awayPlayers: [
      { name: "B. Saka", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.4 }] },
      { name: "K. Havertz", number: 29, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] },
      { name: "G. Martinelli", number: 11, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
      { name: "D. Rice", number: 41, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.9 }] },
    ],
  },
  "fg-2": {
    teamStats: [
      { label: "Possession", home: 55, away: 45 }, { label: "Shots", home: 14, away: 11 },
      { label: "Shots on Target", home: 5, away: 5 }, { label: "Corners", home: 6, away: 5 },
      { label: "Fouls", home: 9, away: 12 }, { label: "Offsides", home: 1, away: 2 },
    ],
    homePlayers: [
      { name: "M. Salah", number: 11, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.1 }] },
      { name: "L. Diaz", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
      { name: "Mac Allister", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.4 }] },
      { name: "V. Van Dijk", number: 4, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.6 }] },
    ],
    awayPlayers: [
      { name: "C. Palmer", number: 20, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.9 }] },
      { name: "N. Jackson", number: 15, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
      { name: "C. Gallagher", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.3 }] },
      { name: "R. James", number: 24, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.0 }] },
    ],
  },
  "fg-3": {
    teamStats: [
      { label: "Possession", home: 48, away: 52 }, { label: "Shots", home: 9, away: 14 },
      { label: "Shots on Target", home: 2, away: 6 }, { label: "Corners", home: 4, away: 8 },
      { label: "Fouls", home: 14, away: 9 }, { label: "Offsides", home: 3, away: 2 },
    ],
    homePlayers: [
      { name: "M. Rashford", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 5.8 }] },
      { name: "B. Fernandes", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.2 }] },
      { name: "R. Hojlund", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 5.9 }] },
      { name: "K. Mainoo", number: 37, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.4 }] },
    ],
    awayPlayers: [
      { name: "H. Son", number: 7, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.7 }] },
      { name: "J. Maddison", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.2 }] },
      { name: "Richarlison", number: 9, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.0 }] },
      { name: "P. Porro", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.2 }] },
    ],
  },
  "fg-4": {
    teamStats: [
      { label: "Possession", home: 54, away: 46 }, { label: "Shots", home: 18, away: 12 },
      { label: "Shots on Target", home: 8, away: 5 }, { label: "Corners", home: 9, away: 4 },
      { label: "Fouls", home: 10, away: 11 }, { label: "Offsides", home: 1, away: 3 },
    ],
    homePlayers: [
      { name: "B. Saka", number: 7, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.1 }] },
      { name: "K. Havertz", number: 29, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Rating", value: 9.4 }] },
      { name: "G. Martinelli", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.2 }] },
      { name: "M. Odegaard", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.5 }] },
    ],
    awayPlayers: [
      { name: "M. Salah", number: 11, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.3 }] },
      { name: "L. Diaz", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] },
      { name: "Mac Allister", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
      { name: "V. Van Dijk", number: 4, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.9 }] },
    ],
  },
  "fg-5": {
    teamStats: [
      { label: "Possession", home: 58, away: 42 }, { label: "Shots", home: 15, away: 8 },
      { label: "Shots on Target", home: 6, away: 2 }, { label: "Corners", home: 7, away: 3 },
      { label: "Fouls", home: 9, away: 13 }, { label: "Offsides", home: 0, away: 2 },
    ],
    homePlayers: [
      { name: "C. Palmer", number: 20, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.4 }] },
      { name: "N. Jackson", number: 15, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
      { name: "C. Gallagher", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.5 }] },
      { name: "E. Fernandez", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.2 }] },
    ],
    awayPlayers: [
      { name: "M. Rashford", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.1 }] },
      { name: "B. Fernandes", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.4 }] },
      { name: "R. Hojlund", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 5.8 }] },
      { name: "K. Mainoo", number: 37, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] },
    ],
  },
  "fg-6": {
    teamStats: [
      { label: "Possession", home: 38, away: 62 }, { label: "Shots", home: 8, away: 18 },
      { label: "Shots on Target", home: 3, away: 7 }, { label: "Corners", home: 3, away: 9 },
      { label: "Fouls", home: 12, away: 8 }, { label: "Offsides", home: 2, away: 1 },
    ],
    homePlayers: [
      { name: "H. Son", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] },
      { name: "J. Maddison", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
      { name: "Richarlison", number: 9, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.9 }] },
      { name: "C. Romero", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.3 }] },
    ],
    awayPlayers: [
      { name: "E. Haaland", number: 9, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.2 }] },
      { name: "K. De Bruyne", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.6 }] },
      { name: "P. Foden", number: 47, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.4 }] },
      { name: "K. Walker", number: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.0 }] },
    ],
  },
};
