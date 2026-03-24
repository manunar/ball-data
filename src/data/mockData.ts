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
    radarStats: [
      { stat: "Offense", value: 82 }, { stat: "Defense", value: 68 }, { stat: "Rebounding", value: 74 },
      { stat: "Playmaking", value: 78 }, { stat: "3PT Shooting", value: 65 }, { stat: "Pace", value: 80 },
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
    radarStats: [
      { stat: "Offense", value: 92 }, { stat: "Defense", value: 85 }, { stat: "Rebounding", value: 78 },
      { stat: "Playmaking", value: 84 }, { stat: "3PT Shooting", value: 80 }, { stat: "Pace", value: 75 },
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
    radarStats: [
      { stat: "Offense", value: 88 }, { stat: "Defense", value: 62 }, { stat: "Rebounding", value: 76 },
      { stat: "Playmaking", value: 90 }, { stat: "3PT Shooting", value: 85 }, { stat: "Pace", value: 82 },
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
    radarStats: [
      { stat: "Attack", value: 84 }, { stat: "Defense", value: 88 }, { stat: "Possession", value: 78 },
      { stat: "Pressing", value: 82 }, { stat: "Set Pieces", value: 76 }, { stat: "Pace", value: 72 },
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
    radarStats: [
      { stat: "Attack", value: 90 }, { stat: "Defense", value: 82 }, { stat: "Possession", value: 80 },
      { stat: "Pressing", value: 86 }, { stat: "Set Pieces", value: 72 }, { stat: "Pace", value: 84 },
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
    radarStats: [
      { stat: "Attack", value: 80 }, { stat: "Defense", value: 68 }, { stat: "Possession", value: 74 },
      { stat: "Pressing", value: 70 }, { stat: "Set Pieces", value: 65 }, { stat: "Pace", value: 78 },
    ],
  },
};

// ── Player detail data ────────────────────────────────────────────────────────
export const playerDetailData: Record<string, PlayerDetailData> = {
  "lebron": { radarStats: [
    { stat: "Scoring", value: 88 }, { stat: "Passing", value: 85 }, { stat: "Rebounding", value: 78 },
    { stat: "Defense", value: 72 }, { stat: "Athleticism", value: 82 }, { stat: "IQ", value: 95 },
  ], recentMatches: [
    { opponent: "Golden State", date: "Mar 20", result: "W", scoreFor: 115, scoreAgainst: 108, stats: [{ label: "PTS", value: 32 }, { label: "AST", value: 9 }, { label: "REB", value: 8 }] },
    { opponent: "Denver", date: "Mar 18", result: "L", scoreFor: 102, scoreAgainst: 118, stats: [{ label: "PTS", value: 22 }, { label: "AST", value: 7 }, { label: "REB", value: 6 }] },
    { opponent: "Phoenix", date: "Mar 15", result: "W", scoreFor: 124, scoreAgainst: 119, stats: [{ label: "PTS", value: 28 }, { label: "AST", value: 11 }, { label: "REB", value: 7 }] },
    { opponent: "Miami", date: "Mar 13", result: "W", scoreFor: 109, scoreAgainst: 98, stats: [{ label: "PTS", value: 26 }, { label: "AST", value: 8 }, { label: "REB", value: 9 }] },
    { opponent: "Chicago", date: "Mar 11", result: "L", scoreFor: 97, scoreAgainst: 103, stats: [{ label: "PTS", value: 18 }, { label: "AST", value: 5 }, { label: "REB", value: 7 }] },
  ]},
  "tatum": { radarStats: [
    { stat: "Scoring", value: 92 }, { stat: "Passing", value: 68 }, { stat: "Rebounding", value: 80 },
    { stat: "Defense", value: 75 }, { stat: "Athleticism", value: 85 }, { stat: "IQ", value: 82 },
  ], recentMatches: [
    { opponent: "New York", date: "Mar 22", result: "W", scoreFor: 118, scoreAgainst: 102, stats: [{ label: "PTS", value: 34 }, { label: "AST", value: 5 }, { label: "REB", value: 9 }] },
    { opponent: "Milwaukee", date: "Mar 19", result: "W", scoreFor: 124, scoreAgainst: 108, stats: [{ label: "PTS", value: 28 }, { label: "AST", value: 4 }, { label: "REB", value: 8 }] },
    { opponent: "Cleveland", date: "Mar 17", result: "W", scoreFor: 112, scoreAgainst: 99, stats: [{ label: "PTS", value: 31 }, { label: "AST", value: 6 }, { label: "REB", value: 7 }] },
    { opponent: "Indiana", date: "Mar 14", result: "L", scoreFor: 97, scoreAgainst: 114, stats: [{ label: "PTS", value: 21 }, { label: "AST", value: 3 }, { label: "REB", value: 6 }] },
    { opponent: "Philadelphia", date: "Mar 12", result: "W", scoreFor: 128, scoreAgainst: 111, stats: [{ label: "PTS", value: 29 }, { label: "AST", value: 5 }, { label: "REB", value: 10 }] },
  ]},
  "curry": { radarStats: [
    { stat: "Scoring", value: 95 }, { stat: "Passing", value: 82 }, { stat: "Rebounding", value: 48 },
    { stat: "Defense", value: 62 }, { stat: "Athleticism", value: 72 }, { stat: "IQ", value: 94 },
  ], recentMatches: [
    { opponent: "Denver", date: "Mar 21", result: "L", scoreFor: 108, scoreAgainst: 121, stats: [{ label: "PTS", value: 31 }, { label: "AST", value: 7 }, { label: "3PM", value: 5 }] },
    { opponent: "Sacramento", date: "Mar 19", result: "W", scoreFor: 118, scoreAgainst: 104, stats: [{ label: "PTS", value: 38 }, { label: "AST", value: 9 }, { label: "3PM", value: 7 }] },
    { opponent: "Phoenix", date: "Mar 16", result: "L", scoreFor: 99, scoreAgainst: 112, stats: [{ label: "PTS", value: 24 }, { label: "AST", value: 5 }, { label: "3PM", value: 3 }] },
    { opponent: "Portland", date: "Mar 14", result: "W", scoreFor: 122, scoreAgainst: 97, stats: [{ label: "PTS", value: 42 }, { label: "AST", value: 8 }, { label: "3PM", value: 9 }] },
    { opponent: "Dallas", date: "Mar 12", result: "L", scoreFor: 103, scoreAgainst: 115, stats: [{ label: "PTS", value: 27 }, { label: "AST", value: 6 }, { label: "3PM", value: 4 }] },
  ]},
  "davis": { radarStats: [
    { stat: "Scoring", value: 82 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 92 },
    { stat: "Defense", value: 90 }, { stat: "Athleticism", value: 88 }, { stat: "IQ", value: 78 },
  ], recentMatches: [
    { opponent: "Golden State", date: "Mar 20", result: "W", scoreFor: 115, scoreAgainst: 108, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }] },
    { opponent: "Denver", date: "Mar 18", result: "L", scoreFor: 102, scoreAgainst: 118, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 11 }, { label: "BLK", value: 2 }] },
    { opponent: "Phoenix", date: "Mar 15", result: "W", scoreFor: 124, scoreAgainst: 119, stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 13 }, { label: "BLK", value: 4 }] },
    { opponent: "Miami", date: "Mar 13", result: "W", scoreFor: 109, scoreAgainst: 98, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }] },
    { opponent: "Chicago", date: "Mar 11", result: "L", scoreFor: 97, scoreAgainst: 103, stats: [{ label: "PTS", value: 21 }, { label: "REB", value: 10 }, { label: "BLK", value: 1 }] },
  ]},
  "haaland": { radarStats: [
    { stat: "Finishing", value: 96 }, { stat: "Passing", value: 58 }, { stat: "Dribbling", value: 68 },
    { stat: "Physical", value: 94 }, { stat: "Pace", value: 88 }, { stat: "Positioning", value: 92 },
  ], recentMatches: [
    { opponent: "Arsenal", date: "Mar 22", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] },
    { opponent: "Porto", date: "Mar 17", result: "W", scoreFor: 3, scoreAgainst: 0, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Rating", value: 9.1 }] },
    { opponent: "Everton", date: "Mar 12", result: "W", scoreFor: 5, scoreAgainst: 0, stats: [{ label: "Goals", value: 3 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.8 }] },
    { opponent: "Dortmund", date: "Mar 8", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.4 }] },
    { opponent: "Aston Villa", date: "Mar 2", result: "W", scoreFor: 4, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.7 }] },
  ]},
  "saka": { radarStats: [
    { stat: "Finishing", value: 78 }, { stat: "Passing", value: 82 }, { stat: "Dribbling", value: 88 },
    { stat: "Physical", value: 72 }, { stat: "Pace", value: 86 }, { stat: "Positioning", value: 76 },
  ], recentMatches: [
    { opponent: "Man City", date: "Mar 22", result: "L", scoreFor: 0, scoreAgainst: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.4 }] },
    { opponent: "Porto", date: "Mar 19", result: "W", scoreFor: 3, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.6 }] },
    { opponent: "Chelsea", date: "Mar 16", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] },
    { opponent: "Brentford", date: "Mar 9", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
    { opponent: "Liverpool", date: "Mar 2", result: "W", scoreFor: 2, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Rating", value: 9.0 }] },
  ]},
  "salah": { radarStats: [
    { stat: "Finishing", value: 90 }, { stat: "Passing", value: 75 }, { stat: "Dribbling", value: 86 },
    { stat: "Physical", value: 70 }, { stat: "Pace", value: 84 }, { stat: "Positioning", value: 88 },
  ], recentMatches: [
    { opponent: "Everton", date: "Mar 22", result: "W", scoreFor: 3, scoreAgainst: 0, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.2 }] },
    { opponent: "Wolves", date: "Mar 19", result: "D", scoreFor: 1, scoreAgainst: 1, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.1 }] },
    { opponent: "Nottm Forest", date: "Mar 17", result: "W", scoreFor: 2, scoreAgainst: 0, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Rating", value: 7.8 }] },
    { opponent: "Bournemouth", date: "Mar 9", result: "W", scoreFor: 4, scoreAgainst: 1, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.9 }] },
    { opponent: "Arsenal", date: "Mar 2", result: "L", scoreFor: 1, scoreAgainst: 2, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 7.3 }] },
  ]},
  "palmer": { radarStats: [
    { stat: "Finishing", value: 88 }, { stat: "Passing", value: 84 }, { stat: "Dribbling", value: 82 },
    { stat: "Physical", value: 68 }, { stat: "Pace", value: 76 }, { stat: "Positioning", value: 85 },
  ], recentMatches: [
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
    homeTeamRadar: [
      { stat: "Offense", value: 82 }, { stat: "Defense", value: 68 }, { stat: "Rebounding", value: 74 },
      { stat: "Playmaking", value: 78 }, { stat: "3PT", value: 65 }, { stat: "Pace", value: 80 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 92 }, { stat: "Defense", value: 85 }, { stat: "Rebounding", value: 78 },
      { stat: "Playmaking", value: 84 }, { stat: "3PT", value: 80 }, { stat: "Pace", value: 75 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, playerId: "lebron", stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 9 }, { label: "AST", value: 8 }, { label: "FG%", value: "52%" }, { label: "+/-", value: "+8" }],
        radarStats: [{ stat: "Scoring", value: 85 }, { stat: "Passing", value: 80 }, { stat: "Rebounding", value: 75 }, { stat: "Defense", value: 70 }, { stat: "Efficiency", value: 82 }],
        previousMatch: { opponent: "Golden State", stats: [{ label: "PTS", value: 32 }, { label: "REB", value: 8 }, { label: "AST", value: 9 }], radarStats: [{ stat: "Scoring", value: 90 }, { stat: "Passing", value: 85 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 68 }, { stat: "Efficiency", value: 88 }] } },
      { name: "Anthony Davis", number: 3, playerId: "davis", stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }, { label: "FG%", value: "48%" }, { label: "+/-", value: "+5" }],
        radarStats: [{ stat: "Scoring", value: 72 }, { stat: "Passing", value: 50 }, { stat: "Rebounding", value: 92 }, { stat: "Defense", value: 90 }, { stat: "Efficiency", value: 78 }],
        previousMatch: { opponent: "Golden State", stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }], radarStats: [{ stat: "Scoring", value: 78 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 95 }, { stat: "Defense", value: 92 }, { stat: "Efficiency", value: 82 }] } },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 3 }, { label: "AST", value: 6 }, { label: "FG%", value: "44%" }, { label: "+/-", value: "+2" }],
        radarStats: [{ stat: "Scoring", value: 65 }, { stat: "Passing", value: 72 }, { stat: "Rebounding", value: 30 }, { stat: "Defense", value: 45 }, { stat: "Efficiency", value: 60 }],
        previousMatch: { opponent: "Golden State", stats: [{ label: "PTS", value: 21 }, { label: "REB", value: 2 }, { label: "AST", value: 7 }] } },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 4 }, { label: "AST", value: 3 }, { label: "FG%", value: "50%" }, { label: "+/-", value: "+3" }],
        radarStats: [{ stat: "Scoring", value: 55 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 40 }, { stat: "Defense", value: 58 }, { stat: "Efficiency", value: 62 }],
        previousMatch: { opponent: "Golden State", stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 3 }, { label: "AST", value: 2 }] } },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, playerId: "tatum", stats: [{ label: "PTS", value: 31 }, { label: "REB", value: 8 }, { label: "AST", value: 5 }, { label: "FG%", value: "49%" }, { label: "+/-", value: "-3" }],
        radarStats: [{ stat: "Scoring", value: 92 }, { stat: "Passing", value: 65 }, { stat: "Rebounding", value: 78 }, { stat: "Defense", value: 72 }, { stat: "Efficiency", value: 85 }],
        previousMatch: { opponent: "New York", stats: [{ label: "PTS", value: 34 }, { label: "REB", value: 9 }, { label: "AST", value: 5 }], radarStats: [{ stat: "Scoring", value: 95 }, { stat: "Passing", value: 62 }, { stat: "Rebounding", value: 82 }, { stat: "Defense", value: 70 }, { stat: "Efficiency", value: 88 }] } },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }, { label: "FG%", value: "46%" }, { label: "+/-", value: "-5" }],
        radarStats: [{ stat: "Scoring", value: 80 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 58 }, { stat: "Defense", value: 75 }, { stat: "Efficiency", value: 72 }],
        previousMatch: { opponent: "New York", stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 6 }, { label: "AST", value: 2 }] } },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 3 }, { label: "AST", value: 8 }, { label: "FG%", value: "42%" }, { label: "+/-", value: "-2" }],
        radarStats: [{ stat: "Scoring", value: 62 }, { stat: "Passing", value: 78 }, { stat: "Rebounding", value: 35 }, { stat: "Defense", value: 82 }, { stat: "Efficiency", value: 70 }],
        previousMatch: { opponent: "New York", stats: [{ label: "PTS", value: 16 }, { label: "REB", value: 4 }, { label: "AST", value: 6 }] } },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 7 }, { label: "BLK", value: 2 }, { label: "FG%", value: "40%" }, { label: "+/-", value: "-4" }],
        radarStats: [{ stat: "Scoring", value: 42 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 68 }, { stat: "Defense", value: 78 }, { stat: "Efficiency", value: 58 }],
        previousMatch: { opponent: "New York", stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 9 }, { label: "BLK", value: 3 }] } },
    ],
  },
  "game-2": {
    teamStats: [
      { label: "FG%", home: 45, away: 48 }, { label: "3PT%", home: 36, away: 41 },
      { label: "Rebounds", home: 40, away: 37 }, { label: "Assists", home: 19, away: 24 },
      { label: "Turnovers", home: 14, away: 10 }, { label: "Pts in Paint", home: 36, away: 44 },
    ],
    homeTeamRadar: [
      { stat: "Offense", value: 78 }, { stat: "Defense", value: 65 }, { stat: "Rebounding", value: 76 },
      { stat: "Playmaking", value: 72 }, { stat: "3PT", value: 60 }, { stat: "Pace", value: 77 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 88 }, { stat: "Defense", value: 82 }, { stat: "Rebounding", value: 72 },
      { stat: "Playmaking", value: 88 }, { stat: "3PT", value: 78 }, { stat: "Pace", value: 74 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, playerId: "lebron", stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 8 }, { label: "AST", value: 10 }, { label: "FG%", value: "45%" }, { label: "+/-", value: "+1" }],
        radarStats: [{ stat: "Scoring", value: 78 }, { stat: "Passing", value: 88 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 65 }, { stat: "Efficiency", value: 76 }],
        previousMatch: { opponent: "Boston", stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 9 }, { label: "AST", value: 8 }] } },
      { name: "Anthony Davis", number: 3, playerId: "davis", stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }, { label: "FG%", value: "50%" }, { label: "+/-", value: "+3" }],
        radarStats: [{ stat: "Scoring", value: 80 }, { stat: "Passing", value: 52 }, { stat: "Rebounding", value: 88 }, { stat: "Defense", value: 85 }, { stat: "Efficiency", value: 80 }],
        previousMatch: { opponent: "Boston", stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 14 }, { label: "BLK", value: 3 }] } },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 21 }, { label: "REB", value: 2 }, { label: "AST", value: 7 }, { label: "FG%", value: "46%" }, { label: "+/-", value: "-1" }],
        radarStats: [{ stat: "Scoring", value: 68 }, { stat: "Passing", value: 75 }, { stat: "Rebounding", value: 28 }, { stat: "Defense", value: 42 }, { stat: "Efficiency", value: 62 }] },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 3 }, { label: "AST", value: 2 }, { label: "FG%", value: "38%" }, { label: "+/-", value: "-2" }],
        radarStats: [{ stat: "Scoring", value: 45 }, { stat: "Passing", value: 42 }, { stat: "Rebounding", value: 38 }, { stat: "Defense", value: 55 }, { stat: "Efficiency", value: 48 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, playerId: "tatum", stats: [{ label: "PTS", value: 29 }, { label: "REB", value: 9 }, { label: "AST", value: 4 }, { label: "FG%", value: "47%" }, { label: "+/-", value: "+2" }],
        radarStats: [{ stat: "Scoring", value: 88 }, { stat: "Passing", value: 58 }, { stat: "Rebounding", value: 80 }, { stat: "Defense", value: 70 }, { stat: "Efficiency", value: 82 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 28 }, { label: "REB", value: 6 }, { label: "AST", value: 2 }, { label: "FG%", value: "51%" }, { label: "+/-", value: "+4" }],
        radarStats: [{ stat: "Scoring", value: 85 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 62 }, { stat: "Defense", value: 78 }, { stat: "Efficiency", value: 80 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 16 }, { label: "REB", value: 4 }, { label: "AST", value: 6 }, { label: "FG%", value: "40%" }, { label: "+/-", value: "+1" }],
        radarStats: [{ stat: "Scoring", value: 55 }, { stat: "Passing", value: 72 }, { stat: "Rebounding", value: 40 }, { stat: "Defense", value: 80 }, { stat: "Efficiency", value: 65 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 9 }, { label: "BLK", value: 3 }, { label: "FG%", value: "44%" }, { label: "+/-", value: "+1" }],
        radarStats: [{ stat: "Scoring", value: 48 }, { stat: "Passing", value: 58 }, { stat: "Rebounding", value: 75 }, { stat: "Defense", value: 82 }, { stat: "Efficiency", value: 62 }] },
    ],
  },
  "game-3": {
    teamStats: [
      { label: "FG%", home: 49, away: 43 }, { label: "3PT%", home: 40, away: 33 },
      { label: "Rebounds", home: 44, away: 38 }, { label: "Assists", home: 26, away: 20 },
      { label: "Turnovers", home: 10, away: 13 }, { label: "Pts in Paint", home: 48, away: 36 },
    ],
    homeTeamRadar: [
      { stat: "Offense", value: 86 }, { stat: "Defense", value: 72 }, { stat: "Rebounding", value: 82 },
      { stat: "Playmaking", value: 85 }, { stat: "3PT", value: 75 }, { stat: "Pace", value: 78 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 74 }, { stat: "Defense", value: 65 }, { stat: "Rebounding", value: 68 },
      { stat: "Playmaking", value: 70 }, { stat: "3PT", value: 58 }, { stat: "Pace", value: 72 },
    ],
    homePlayers: [
      { name: "J. Carson", number: 10, stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 7 }, { label: "AST", value: 9 }, { label: "FG%", value: "52%" }, { label: "+/-", value: "+12" }],
        radarStats: [{ stat: "Scoring", value: 82 }, { stat: "Passing", value: 85 }, { stat: "Rebounding", value: 65 }, { stat: "Defense", value: 60 }, { stat: "Efficiency", value: 80 }] },
      { name: "M. Reed", number: 23, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 11 }, { label: "BLK", value: 2 }, { label: "FG%", value: "48%" }, { label: "+/-", value: "+10" }],
        radarStats: [{ stat: "Scoring", value: 72 }, { stat: "Passing", value: 45 }, { stat: "Rebounding", value: 88 }, { stat: "Defense", value: 82 }, { stat: "Efficiency", value: 75 }] },
      { name: "B. Stone", number: 5, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 4 }, { label: "AST", value: 5 }, { label: "FG%", value: "45%" }, { label: "+/-", value: "+6" }],
        radarStats: [{ stat: "Scoring", value: 62 }, { stat: "Passing", value: 58 }, { stat: "Rebounding", value: 42 }, { stat: "Defense", value: 55 }, { stat: "Efficiency", value: 60 }] },
      { name: "T. Wells", number: 14, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 3 }, { label: "AST", value: 4 }, { label: "FG%", value: "42%" }, { label: "+/-", value: "+5" }],
        radarStats: [{ stat: "Scoring", value: 50 }, { stat: "Passing", value: 52 }, { stat: "Rebounding", value: 35 }, { stat: "Defense", value: 48 }, { stat: "Efficiency", value: 52 }] },
    ],
    awayPlayers: [
      { name: "K. Mills", number: 7, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 6 }, { label: "AST", value: 4 }, { label: "FG%", value: "44%" }, { label: "+/-", value: "-8" }],
        radarStats: [{ stat: "Scoring", value: 78 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 58 }, { stat: "Defense", value: 50 }, { stat: "Efficiency", value: 68 }] },
      { name: "D. Porter", number: 11, stats: [{ label: "PTS", value: 20 }, { label: "REB", value: 8 }, { label: "AST", value: 3 }, { label: "FG%", value: "42%" }, { label: "+/-", value: "-6" }],
        radarStats: [{ stat: "Scoring", value: 68 }, { stat: "Passing", value: 42 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 62 }, { stat: "Efficiency", value: 60 }] },
      { name: "R. Jackson", number: 4, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 5 }, { label: "AST", value: 7 }, { label: "FG%", value: "40%" }, { label: "+/-", value: "-5" }],
        radarStats: [{ stat: "Scoring", value: 65 }, { stat: "Passing", value: 72 }, { stat: "Rebounding", value: 48 }, { stat: "Defense", value: 45 }, { stat: "Efficiency", value: 55 }] },
      { name: "C. Barnes", number: 33, stats: [{ label: "PTS", value: 15 }, { label: "REB", value: 9 }, { label: "BLK", value: 2 }, { label: "FG%", value: "38%" }, { label: "+/-", value: "-7" }],
        radarStats: [{ stat: "Scoring", value: 52 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 78 }, { stat: "Defense", value: 72 }, { stat: "Efficiency", value: 50 }] },
    ],
  },
  "game-4": {
    teamStats: [
      { label: "FG%", home: 46, away: 42 }, { label: "3PT%", home: 37, away: 34 },
      { label: "Rebounds", home: 39, away: 43 }, { label: "Assists", home: 20, away: 22 },
      { label: "Turnovers", home: 11, away: 8 }, { label: "Pts in Paint", home: 40, away: 46 },
    ],
    homeTeamRadar: [
      { stat: "Offense", value: 80 }, { stat: "Defense", value: 70 }, { stat: "Rebounding", value: 72 },
      { stat: "Playmaking", value: 75 }, { stat: "3PT", value: 62 }, { stat: "Pace", value: 78 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 90 }, { stat: "Defense", value: 84 }, { stat: "Rebounding", value: 80 },
      { stat: "Playmaking", value: 82 }, { stat: "3PT", value: 76 }, { stat: "Pace", value: 73 },
    ],
    homePlayers: [
      { name: "LeBron James", number: 23, playerId: "lebron", stats: [{ label: "PTS", value: 30 }, { label: "REB", value: 7 }, { label: "AST", value: 9 }, { label: "FG%", value: "50%" }, { label: "+/-", value: "+6" }],
        radarStats: [{ stat: "Scoring", value: 90 }, { stat: "Passing", value: 85 }, { stat: "Rebounding", value: 68 }, { stat: "Defense", value: 65 }, { stat: "Efficiency", value: 85 }] },
      { name: "Anthony Davis", number: 3, playerId: "davis", stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 13 }, { label: "BLK", value: 2 }, { label: "FG%", value: "47%" }, { label: "+/-", value: "+4" }],
        radarStats: [{ stat: "Scoring", value: 78 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 90 }, { stat: "Defense", value: 85 }, { stat: "Efficiency", value: 76 }] },
      { name: "D. Russell", number: 1, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 7 }, { label: "FG%", value: "43%" }, { label: "+/-", value: "+1" }],
        radarStats: [{ stat: "Scoring", value: 60 }, { stat: "Passing", value: 72 }, { stat: "Rebounding", value: 30 }, { stat: "Defense", value: 40 }, { stat: "Efficiency", value: 58 }] },
      { name: "A. Reaves", number: 15, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 4 }, { label: "AST", value: 2 }, { label: "FG%", value: "41%" }, { label: "+/-", value: "-1" }],
        radarStats: [{ stat: "Scoring", value: 48 }, { stat: "Passing", value: 40 }, { stat: "Rebounding", value: 42 }, { stat: "Defense", value: 52 }, { stat: "Efficiency", value: 50 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, playerId: "tatum", stats: [{ label: "PTS", value: 33 }, { label: "REB", value: 7 }, { label: "AST", value: 6 }, { label: "FG%", value: "51%" }, { label: "+/-", value: "-2" }],
        radarStats: [{ stat: "Scoring", value: 94 }, { stat: "Passing", value: 68 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 68 }, { stat: "Efficiency", value: 86 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 26 }, { label: "REB", value: 4 }, { label: "AST", value: 3 }, { label: "FG%", value: "48%" }, { label: "+/-", value: "-3" }],
        radarStats: [{ stat: "Scoring", value: 82 }, { stat: "Passing", value: 50 }, { stat: "Rebounding", value: 48 }, { stat: "Defense", value: 72 }, { stat: "Efficiency", value: 74 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 17 }, { label: "REB", value: 4 }, { label: "AST", value: 7 }, { label: "FG%", value: "41%" }, { label: "+/-", value: "-1" }],
        radarStats: [{ stat: "Scoring", value: 58 }, { stat: "Passing", value: 75 }, { stat: "Rebounding", value: 42 }, { stat: "Defense", value: 80 }, { stat: "Efficiency", value: 66 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 8 }, { label: "BLK", value: 2 }, { label: "FG%", value: "39%" }, { label: "+/-", value: "-4" }],
        radarStats: [{ stat: "Scoring", value: 40 }, { stat: "Passing", value: 52 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 76 }, { stat: "Efficiency", value: 55 }] },
    ],
  },
  "game-5": {
    teamStats: [
      { label: "FG%", home: 44, away: 47 }, { label: "3PT%", home: 35, away: 39 },
      { label: "Rebounds", home: 41, away: 36 }, { label: "Assists", home: 23, away: 19 },
      { label: "Turnovers", home: 9, away: 14 }, { label: "Pts in Paint", home: 44, away: 38 },
    ],
    homeTeamRadar: [
      { stat: "Offense", value: 76 }, { stat: "Defense", value: 74 }, { stat: "Rebounding", value: 78 },
      { stat: "Playmaking", value: 80 }, { stat: "3PT", value: 60 }, { stat: "Pace", value: 75 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 72 }, { stat: "Defense", value: 68 }, { stat: "Rebounding", value: 65 },
      { stat: "Playmaking", value: 70 }, { stat: "3PT", value: 72 }, { stat: "Pace", value: 70 },
    ],
    homePlayers: [
      { name: "M. Velasquez", number: 8, stats: [{ label: "PTS", value: 27 }, { label: "REB", value: 6 }, { label: "AST", value: 8 }, { label: "FG%", value: "46%" }, { label: "+/-", value: "+7" }],
        radarStats: [{ stat: "Scoring", value: 82 }, { stat: "Passing", value: 78 }, { stat: "Rebounding", value: 58 }, { stat: "Defense", value: 55 }, { stat: "Efficiency", value: 76 }] },
      { name: "T. Fontaine", number: 21, stats: [{ label: "PTS", value: 23 }, { label: "REB", value: 10 }, { label: "BLK", value: 3 }, { label: "FG%", value: "49%" }, { label: "+/-", value: "+5" }],
        radarStats: [{ stat: "Scoring", value: 74 }, { stat: "Passing", value: 42 }, { stat: "Rebounding", value: 85 }, { stat: "Defense", value: 82 }, { stat: "Efficiency", value: 72 }] },
      { name: "R. Esteban", number: 3, stats: [{ label: "PTS", value: 19 }, { label: "REB", value: 4 }, { label: "AST", value: 6 }, { label: "FG%", value: "44%" }, { label: "+/-", value: "+3" }],
        radarStats: [{ stat: "Scoring", value: 65 }, { stat: "Passing", value: 68 }, { stat: "Rebounding", value: 40 }, { stat: "Defense", value: 50 }, { stat: "Efficiency", value: 60 }] },
      { name: "L. Gomez", number: 44, stats: [{ label: "PTS", value: 16 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }, { label: "FG%", value: "42%" }, { label: "+/-", value: "+2" }],
        radarStats: [{ stat: "Scoring", value: 55 }, { stat: "Passing", value: 45 }, { stat: "Rebounding", value: 48 }, { stat: "Defense", value: 52 }, { stat: "Efficiency", value: 54 }] },
    ],
    awayPlayers: [
      { name: "A. Dubois", number: 9, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 5 }, { label: "AST", value: 4 }, { label: "FG%", value: "48%" }, { label: "+/-", value: "-4" }],
        radarStats: [{ stat: "Scoring", value: 80 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 50 }, { stat: "Defense", value: 48 }, { stat: "Efficiency", value: 70 }] },
      { name: "K. Marchetti", number: 17, stats: [{ label: "PTS", value: 22 }, { label: "REB", value: 8 }, { label: "AST", value: 6 }, { label: "FG%", value: "45%" }, { label: "+/-", value: "-3" }],
        radarStats: [{ stat: "Scoring", value: 72 }, { stat: "Passing", value: 68 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 60 }, { stat: "Efficiency", value: 65 }] },
      { name: "J. Beaumont", number: 6, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 9 }, { label: "FG%", value: "41%" }, { label: "+/-", value: "-5" }],
        radarStats: [{ stat: "Scoring", value: 60 }, { stat: "Passing", value: 82 }, { stat: "Rebounding", value: 35 }, { stat: "Defense", value: 45 }, { stat: "Efficiency", value: 58 }] },
      { name: "S. Delacroix", number: 32, stats: [{ label: "PTS", value: 14 }, { label: "REB", value: 7 }, { label: "BLK", value: 2 }, { label: "FG%", value: "38%" }, { label: "+/-", value: "-6" }],
        radarStats: [{ stat: "Scoring", value: 48 }, { stat: "Passing", value: 40 }, { stat: "Rebounding", value: 68 }, { stat: "Defense", value: 72 }, { stat: "Efficiency", value: 50 }] },
    ],
  },
  "game-6": {
    teamStats: [
      { label: "FG%", home: 43, away: 46 }, { label: "3PT%", home: 34, away: 37 },
      { label: "Rebounds", home: 37, away: 42 }, { label: "Assists", home: 18, away: 25 },
      { label: "Turnovers", home: 13, away: 11 }, { label: "Pts in Paint", home: 40, away: 42 },
    ],
    homeTeamRadar: [
      { stat: "Offense", value: 70 }, { stat: "Defense", value: 66 }, { stat: "Rebounding", value: 68 },
      { stat: "Playmaking", value: 65 }, { stat: "3PT", value: 58 }, { stat: "Pace", value: 72 },
    ],
    awayTeamRadar: [
      { stat: "Offense", value: 85 }, { stat: "Defense", value: 80 }, { stat: "Rebounding", value: 78 },
      { stat: "Playmaking", value: 86 }, { stat: "3PT", value: 72 }, { stat: "Pace", value: 74 },
    ],
    homePlayers: [
      { name: "C. Nguyen", number: 12, stats: [{ label: "PTS", value: 24 }, { label: "REB", value: 8 }, { label: "AST", value: 7 }, { label: "FG%", value: "44%" }, { label: "+/-", value: "-5" }],
        radarStats: [{ stat: "Scoring", value: 78 }, { stat: "Passing", value: 72 }, { stat: "Rebounding", value: 70 }, { stat: "Defense", value: 58 }, { stat: "Efficiency", value: 68 }] },
      { name: "P. Reeves", number: 25, stats: [{ label: "PTS", value: 20 }, { label: "REB", value: 12 }, { label: "BLK", value: 2 }, { label: "FG%", value: "46%" }, { label: "+/-", value: "-3" }],
        radarStats: [{ stat: "Scoring", value: 65 }, { stat: "Passing", value: 40 }, { stat: "Rebounding", value: 88 }, { stat: "Defense", value: 78 }, { stat: "Efficiency", value: 62 }] },
      { name: "B. Watts", number: 7, stats: [{ label: "PTS", value: 17 }, { label: "REB", value: 4 }, { label: "AST", value: 5 }, { label: "FG%", value: "40%" }, { label: "+/-", value: "-4" }],
        radarStats: [{ stat: "Scoring", value: 58 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 42 }, { stat: "Defense", value: 48 }, { stat: "Efficiency", value: 52 }] },
      { name: "D. Kim", number: 18, stats: [{ label: "PTS", value: 12 }, { label: "REB", value: 3 }, { label: "AST", value: 3 }, { label: "FG%", value: "36%" }, { label: "+/-", value: "-6" }],
        radarStats: [{ stat: "Scoring", value: 42 }, { stat: "Passing", value: 38 }, { stat: "Rebounding", value: 35 }, { stat: "Defense", value: 42 }, { stat: "Efficiency", value: 40 }] },
    ],
    awayPlayers: [
      { name: "Jayson Tatum", number: 0, playerId: "tatum", stats: [{ label: "PTS", value: 30 }, { label: "REB", value: 8 }, { label: "AST", value: 5 }, { label: "FG%", value: "50%" }, { label: "+/-", value: "+6" }],
        radarStats: [{ stat: "Scoring", value: 90 }, { stat: "Passing", value: 62 }, { stat: "Rebounding", value: 75 }, { stat: "Defense", value: 72 }, { stat: "Efficiency", value: 84 }] },
      { name: "Jaylen Brown", number: 7, stats: [{ label: "PTS", value: 25 }, { label: "REB", value: 5 }, { label: "AST", value: 3 }, { label: "FG%", value: "47%" }, { label: "+/-", value: "+4" }],
        radarStats: [{ stat: "Scoring", value: 80 }, { stat: "Passing", value: 48 }, { stat: "Rebounding", value: 52 }, { stat: "Defense", value: 74 }, { stat: "Efficiency", value: 72 }] },
      { name: "D. White", number: 9, stats: [{ label: "PTS", value: 18 }, { label: "REB", value: 3 }, { label: "AST", value: 7 }, { label: "FG%", value: "42%" }, { label: "+/-", value: "+3" }],
        radarStats: [{ stat: "Scoring", value: 60 }, { stat: "Passing", value: 75 }, { stat: "Rebounding", value: 38 }, { stat: "Defense", value: 80 }, { stat: "Efficiency", value: 68 }] },
      { name: "A. Horford", number: 42, stats: [{ label: "PTS", value: 11 }, { label: "REB", value: 8 }, { label: "BLK", value: 3 }, { label: "FG%", value: "40%" }, { label: "+/-", value: "+2" }],
        radarStats: [{ stat: "Scoring", value: 42 }, { stat: "Passing", value: 55 }, { stat: "Rebounding", value: 72 }, { stat: "Defense", value: 80 }, { stat: "Efficiency", value: 58 }] },
    ],
  },
  // ── Football games ─────────────────────────────────────────────────────────
  "fg-1": {
    teamStats: [
      { label: "Possession", home: 62, away: 38 }, { label: "Shots", home: 16, away: 9 },
      { label: "Shots on Target", home: 6, away: 4 }, { label: "Corners", home: 7, away: 3 },
      { label: "Fouls", home: 11, away: 13 }, { label: "Offsides", home: 2, away: 1 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 88 }, { stat: "Defense", value: 76 }, { stat: "Possession", value: 85 },
      { stat: "Pressing", value: 78 }, { stat: "Set Pieces", value: 70 }, { stat: "Pace", value: 82 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 72 }, { stat: "Defense", value: 82 }, { stat: "Possession", value: 62 },
      { stat: "Pressing", value: 80 }, { stat: "Set Pieces", value: 76 }, { stat: "Pace", value: 74 },
    ],
    homePlayers: [
      { name: "E. Haaland", number: 9, playerId: "haaland", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 5 }, { label: "Rating", value: 8.2 }],
        radarStats: [{ stat: "Finishing", value: 85 }, { stat: "Passing", value: 45 }, { stat: "Dribbling", value: 55 }, { stat: "Physical", value: 90 }, { stat: "Positioning", value: 88 }],
        previousMatch: { opponent: "Everton", stats: [{ label: "Goals", value: 3 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.8 }], radarStats: [{ stat: "Finishing", value: 98 }, { stat: "Passing", value: 60 }, { stat: "Dribbling", value: 62 }, { stat: "Physical", value: 92 }, { stat: "Positioning", value: 95 }] } },
      { name: "K. De Bruyne", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 2 }, { label: "KeyPass", value: 6 }, { label: "Rating", value: 8.8 }],
        radarStats: [{ stat: "Finishing", value: 60 }, { stat: "Passing", value: 95 }, { stat: "Dribbling", value: 80 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 82 }],
        previousMatch: { opponent: "Everton", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 2 }, { label: "Rating", value: 9.0 }] } },
      { name: "P. Foden", number: 47, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Dribbles", value: 4 }, { label: "Rating", value: 8.4 }],
        radarStats: [{ stat: "Finishing", value: 78 }, { stat: "Passing", value: 82 }, { stat: "Dribbling", value: 88 }, { stat: "Physical", value: 58 }, { stat: "Positioning", value: 76 }] },
      { name: "K. Walker", number: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 4 }, { label: "Rating", value: 7.2 }],
        radarStats: [{ stat: "Finishing", value: 25 }, { stat: "Passing", value: 62 }, { stat: "Dribbling", value: 55 }, { stat: "Physical", value: 88 }, { stat: "Positioning", value: 72 }] },
    ],
    awayPlayers: [
      { name: "B. Saka", number: 7, playerId: "saka", stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Dribbles", value: 3 }, { label: "Rating", value: 6.4 }],
        radarStats: [{ stat: "Finishing", value: 35 }, { stat: "Passing", value: 60 }, { stat: "Dribbling", value: 72 }, { stat: "Physical", value: 55 }, { stat: "Positioning", value: 50 }],
        previousMatch: { opponent: "Chelsea", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }], radarStats: [{ stat: "Finishing", value: 82 }, { stat: "Passing", value: 75 }, { stat: "Dribbling", value: 88 }, { stat: "Physical", value: 68 }, { stat: "Positioning", value: 78 }] } },
      { name: "K. Havertz", number: 29, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 2 }, { label: "Rating", value: 6.8 }],
        radarStats: [{ stat: "Finishing", value: 42 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 50 }, { stat: "Physical", value: 72 }, { stat: "Positioning", value: 58 }] },
      { name: "G. Martinelli", number: 11, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Dribbles", value: 2 }, { label: "Rating", value: 7.1 }],
        radarStats: [{ stat: "Finishing", value: 72 }, { stat: "Passing", value: 52 }, { stat: "Dribbling", value: 78 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 68 }] },
      { name: "D. Rice", number: 41, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 5 }, { label: "Rating", value: 6.9 }],
        radarStats: [{ stat: "Finishing", value: 30 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 55 }, { stat: "Physical", value: 85 }, { stat: "Positioning", value: 78 }] },
    ],
  },
  "fg-2": {
    teamStats: [
      { label: "Possession", home: 55, away: 45 }, { label: "Shots", home: 14, away: 11 },
      { label: "Shots on Target", home: 5, away: 5 }, { label: "Corners", home: 6, away: 5 },
      { label: "Fouls", home: 9, away: 12 }, { label: "Offsides", home: 1, away: 2 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 85 }, { stat: "Defense", value: 80 }, { stat: "Possession", value: 78 },
      { stat: "Pressing", value: 84 }, { stat: "Set Pieces", value: 72 }, { stat: "Pace", value: 82 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 78 }, { stat: "Defense", value: 68 }, { stat: "Possession", value: 70 },
      { stat: "Pressing", value: 72 }, { stat: "Set Pieces", value: 65 }, { stat: "Pace", value: 76 },
    ],
    homePlayers: [
      { name: "M. Salah", number: 11, playerId: "salah", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 4 }, { label: "Rating", value: 8.1 }],
        radarStats: [{ stat: "Finishing", value: 82 }, { stat: "Passing", value: 68 }, { stat: "Dribbling", value: 78 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 85 }],
        previousMatch: { opponent: "Everton", stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.2 }], radarStats: [{ stat: "Finishing", value: 92 }, { stat: "Passing", value: 78 }, { stat: "Dribbling", value: 85 }, { stat: "Physical", value: 70 }, { stat: "Positioning", value: 90 }] } },
      { name: "L. Diaz", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Dribbles", value: 5 }, { label: "Rating", value: 7.8 }],
        radarStats: [{ stat: "Finishing", value: 55 }, { stat: "Passing", value: 70 }, { stat: "Dribbling", value: 85 }, { stat: "Physical", value: 72 }, { stat: "Positioning", value: 62 }] },
      { name: "Mac Allister", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 3 }, { label: "Rating", value: 7.4 }],
        radarStats: [{ stat: "Finishing", value: 48 }, { stat: "Passing", value: 82 }, { stat: "Dribbling", value: 72 }, { stat: "Physical", value: 68 }, { stat: "Positioning", value: 70 }] },
      { name: "V. Van Dijk", number: 4, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 6 }, { label: "Rating", value: 7.6 }],
        radarStats: [{ stat: "Finishing", value: 28 }, { stat: "Passing", value: 65 }, { stat: "Dribbling", value: 35 }, { stat: "Physical", value: 92 }, { stat: "Positioning", value: 88 }] },
    ],
    awayPlayers: [
      { name: "C. Palmer", number: 20, playerId: "palmer", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 3 }, { label: "Rating", value: 7.9 }],
        radarStats: [{ stat: "Finishing", value: 80 }, { stat: "Passing", value: 78 }, { stat: "Dribbling", value: 75 }, { stat: "Physical", value: 60 }, { stat: "Positioning", value: 82 }],
        previousMatch: { opponent: "Wolves", stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.1 }], radarStats: [{ stat: "Finishing", value: 90 }, { stat: "Passing", value: 85 }, { stat: "Dribbling", value: 82 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 88 }] } },
      { name: "N. Jackson", number: 15, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 2 }, { label: "Rating", value: 7.1 }],
        radarStats: [{ stat: "Finishing", value: 52 }, { stat: "Passing", value: 45 }, { stat: "Dribbling", value: 62 }, { stat: "Physical", value: 75 }, { stat: "Positioning", value: 68 }] },
      { name: "C. Gallagher", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Tackles", value: 4 }, { label: "Rating", value: 7.3 }],
        radarStats: [{ stat: "Finishing", value: 45 }, { stat: "Passing", value: 68 }, { stat: "Dribbling", value: 58 }, { stat: "Physical", value: 78 }, { stat: "Positioning", value: 62 }] },
      { name: "R. James", number: 24, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 3 }, { label: "Rating", value: 7.0 }],
        radarStats: [{ stat: "Finishing", value: 30 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 60 }, { stat: "Physical", value: 82 }, { stat: "Positioning", value: 75 }] },
    ],
  },
  "fg-3": {
    teamStats: [
      { label: "Possession", home: 48, away: 52 }, { label: "Shots", home: 9, away: 14 },
      { label: "Shots on Target", home: 2, away: 6 }, { label: "Corners", home: 4, away: 8 },
      { label: "Fouls", home: 14, away: 9 }, { label: "Offsides", home: 3, away: 2 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 55 }, { stat: "Defense", value: 52 }, { stat: "Possession", value: 60 },
      { stat: "Pressing", value: 58 }, { stat: "Set Pieces", value: 50 }, { stat: "Pace", value: 65 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 82 }, { stat: "Defense", value: 78 }, { stat: "Possession", value: 72 },
      { stat: "Pressing", value: 80 }, { stat: "Set Pieces", value: 68 }, { stat: "Pace", value: 76 },
    ],
    homePlayers: [
      { name: "M. Rashford", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 2 }, { label: "Rating", value: 5.8 }],
        radarStats: [{ stat: "Finishing", value: 30 }, { stat: "Passing", value: 40 }, { stat: "Dribbling", value: 45 }, { stat: "Physical", value: 55 }, { stat: "Positioning", value: 35 }] },
      { name: "B. Fernandes", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 2 }, { label: "Rating", value: 6.2 }],
        radarStats: [{ stat: "Finishing", value: 35 }, { stat: "Passing", value: 65 }, { stat: "Dribbling", value: 55 }, { stat: "Physical", value: 48 }, { stat: "Positioning", value: 52 }] },
      { name: "R. Hojlund", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 1 }, { label: "Rating", value: 5.9 }],
        radarStats: [{ stat: "Finishing", value: 28 }, { stat: "Passing", value: 35 }, { stat: "Dribbling", value: 42 }, { stat: "Physical", value: 68 }, { stat: "Positioning", value: 45 }] },
      { name: "K. Mainoo", number: 37, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 3 }, { label: "Rating", value: 6.4 }],
        radarStats: [{ stat: "Finishing", value: 25 }, { stat: "Passing", value: 58 }, { stat: "Dribbling", value: 62 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 55 }] },
    ],
    awayPlayers: [
      { name: "H. Son", number: 7, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Shots", value: 4 }, { label: "Rating", value: 8.7 }],
        radarStats: [{ stat: "Finishing", value: 88 }, { stat: "Passing", value: 82 }, { stat: "Dribbling", value: 80 }, { stat: "Physical", value: 62 }, { stat: "Positioning", value: 85 }] },
      { name: "J. Maddison", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "KeyPass", value: 5 }, { label: "Rating", value: 8.2 }],
        radarStats: [{ stat: "Finishing", value: 55 }, { stat: "Passing", value: 88 }, { stat: "Dribbling", value: 78 }, { stat: "Physical", value: 55 }, { stat: "Positioning", value: 72 }] },
      { name: "Richarlison", number: 9, stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 3 }, { label: "Rating", value: 8.0 }],
        radarStats: [{ stat: "Finishing", value: 80 }, { stat: "Passing", value: 50 }, { stat: "Dribbling", value: 65 }, { stat: "Physical", value: 78 }, { stat: "Positioning", value: 75 }] },
      { name: "P. Porro", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 4 }, { label: "Rating", value: 7.2 }],
        radarStats: [{ stat: "Finishing", value: 32 }, { stat: "Passing", value: 70 }, { stat: "Dribbling", value: 68 }, { stat: "Physical", value: 72 }, { stat: "Positioning", value: 70 }] },
    ],
  },
  "fg-4": {
    teamStats: [
      { label: "Possession", home: 54, away: 46 }, { label: "Shots", home: 18, away: 12 },
      { label: "Shots on Target", home: 8, away: 5 }, { label: "Corners", home: 9, away: 4 },
      { label: "Fouls", home: 10, away: 11 }, { label: "Offsides", home: 1, away: 3 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 90 }, { stat: "Defense", value: 85 }, { stat: "Possession", value: 78 },
      { stat: "Pressing", value: 82 }, { stat: "Set Pieces", value: 80 }, { stat: "Pace", value: 76 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 65 }, { stat: "Defense", value: 62 }, { stat: "Possession", value: 68 },
      { stat: "Pressing", value: 70 }, { stat: "Set Pieces", value: 58 }, { stat: "Pace", value: 72 },
    ],
    homePlayers: [
      { name: "B. Saka", number: 7, playerId: "saka", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Dribbles", value: 6 }, { label: "Rating", value: 9.1 }],
        radarStats: [{ stat: "Finishing", value: 85 }, { stat: "Passing", value: 82 }, { stat: "Dribbling", value: 92 }, { stat: "Physical", value: 70 }, { stat: "Positioning", value: 85 }],
        previousMatch: { opponent: "Porto", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 1 }, { label: "Rating", value: 8.6 }] } },
      { name: "K. Havertz", number: 29, stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 0 }, { label: "Shots", value: 5 }, { label: "Rating", value: 9.4 }],
        radarStats: [{ stat: "Finishing", value: 92 }, { stat: "Passing", value: 60 }, { stat: "Dribbling", value: 58 }, { stat: "Physical", value: 78 }, { stat: "Positioning", value: 88 }] },
      { name: "G. Martinelli", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Dribbles", value: 4 }, { label: "Rating", value: 8.2 }],
        radarStats: [{ stat: "Finishing", value: 48 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 82 }, { stat: "Physical", value: 68 }, { stat: "Positioning", value: 65 }] },
      { name: "M. Odegaard", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "KeyPass", value: 7 }, { label: "Rating", value: 8.5 }],
        radarStats: [{ stat: "Finishing", value: 52 }, { stat: "Passing", value: 92 }, { stat: "Dribbling", value: 85 }, { stat: "Physical", value: 55 }, { stat: "Positioning", value: 78 }] },
    ],
    awayPlayers: [
      { name: "M. Salah", number: 11, playerId: "salah", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 3 }, { label: "Rating", value: 7.3 }],
        radarStats: [{ stat: "Finishing", value: 72 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 68 }, { stat: "Physical", value: 60 }, { stat: "Positioning", value: 70 }],
        previousMatch: { opponent: "Everton", stats: [{ label: "Goals", value: 2 }, { label: "Assists", value: 1 }, { label: "Rating", value: 9.2 }] } },
      { name: "L. Diaz", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Dribbles", value: 2 }, { label: "Rating", value: 6.8 }],
        radarStats: [{ stat: "Finishing", value: 38 }, { stat: "Passing", value: 48 }, { stat: "Dribbling", value: 62 }, { stat: "Physical", value: 65 }, { stat: "Positioning", value: 45 }] },
      { name: "Mac Allister", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 2 }, { label: "Rating", value: 7.1 }],
        radarStats: [{ stat: "Finishing", value: 35 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 60 }, { stat: "Physical", value: 62 }, { stat: "Positioning", value: 58 }] },
      { name: "V. Van Dijk", number: 4, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 4 }, { label: "Rating", value: 6.9 }],
        radarStats: [{ stat: "Finishing", value: 22 }, { stat: "Passing", value: 60 }, { stat: "Dribbling", value: 30 }, { stat: "Physical", value: 88 }, { stat: "Positioning", value: 82 }] },
    ],
  },
  "fg-5": {
    teamStats: [
      { label: "Possession", home: 58, away: 42 }, { label: "Shots", home: 15, away: 8 },
      { label: "Shots on Target", home: 6, away: 2 }, { label: "Corners", home: 7, away: 3 },
      { label: "Fouls", home: 9, away: 13 }, { label: "Offsides", home: 0, away: 2 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 82 }, { stat: "Defense", value: 72 }, { stat: "Possession", value: 80 },
      { stat: "Pressing", value: 74 }, { stat: "Set Pieces", value: 68 }, { stat: "Pace", value: 78 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 48 }, { stat: "Defense", value: 55 }, { stat: "Possession", value: 58 },
      { stat: "Pressing", value: 52 }, { stat: "Set Pieces", value: 45 }, { stat: "Pace", value: 62 },
    ],
    homePlayers: [
      { name: "C. Palmer", number: 20, playerId: "palmer", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Shots", value: 4 }, { label: "Rating", value: 8.4 }],
        radarStats: [{ stat: "Finishing", value: 82 }, { stat: "Passing", value: 80 }, { stat: "Dribbling", value: 78 }, { stat: "Physical", value: 62 }, { stat: "Positioning", value: 85 }],
        previousMatch: { opponent: "Brighton", stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Rating", value: 6.8 }] } },
      { name: "N. Jackson", number: 15, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 1 }, { label: "Shots", value: 3 }, { label: "Rating", value: 7.8 }],
        radarStats: [{ stat: "Finishing", value: 58 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 65 }, { stat: "Physical", value: 78 }, { stat: "Positioning", value: 72 }] },
      { name: "C. Gallagher", number: 23, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 5 }, { label: "Rating", value: 7.5 }],
        radarStats: [{ stat: "Finishing", value: 40 }, { stat: "Passing", value: 65 }, { stat: "Dribbling", value: 55 }, { stat: "Physical", value: 80 }, { stat: "Positioning", value: 60 }] },
      { name: "E. Fernandez", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 2 }, { label: "Rating", value: 7.2 }],
        radarStats: [{ stat: "Finishing", value: 35 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 68 }, { stat: "Physical", value: 72 }, { stat: "Positioning", value: 65 }] },
    ],
    awayPlayers: [
      { name: "M. Rashford", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 1 }, { label: "Rating", value: 6.1 }],
        radarStats: [{ stat: "Finishing", value: 28 }, { stat: "Passing", value: 35 }, { stat: "Dribbling", value: 48 }, { stat: "Physical", value: 58 }, { stat: "Positioning", value: 32 }] },
      { name: "B. Fernandes", number: 8, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 1 }, { label: "Rating", value: 6.4 }],
        radarStats: [{ stat: "Finishing", value: 30 }, { stat: "Passing", value: 60 }, { stat: "Dribbling", value: 50 }, { stat: "Physical", value: 45 }, { stat: "Positioning", value: 48 }] },
      { name: "R. Hojlund", number: 11, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 1 }, { label: "Rating", value: 5.8 }],
        radarStats: [{ stat: "Finishing", value: 25 }, { stat: "Passing", value: 32 }, { stat: "Dribbling", value: 40 }, { stat: "Physical", value: 62 }, { stat: "Positioning", value: 38 }] },
      { name: "K. Mainoo", number: 37, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 2 }, { label: "Rating", value: 6.8 }],
        radarStats: [{ stat: "Finishing", value: 22 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 58 }, { stat: "Physical", value: 60 }, { stat: "Positioning", value: 48 }] },
    ],
  },
  "fg-6": {
    teamStats: [
      { label: "Possession", home: 38, away: 62 }, { label: "Shots", home: 8, away: 18 },
      { label: "Shots on Target", home: 3, away: 7 }, { label: "Corners", home: 3, away: 9 },
      { label: "Fouls", home: 12, away: 8 }, { label: "Offsides", home: 2, away: 1 },
    ],
    homeTeamRadar: [
      { stat: "Attack", value: 55 }, { stat: "Defense", value: 65 }, { stat: "Possession", value: 52 },
      { stat: "Pressing", value: 60 }, { stat: "Set Pieces", value: 50 }, { stat: "Pace", value: 68 },
    ],
    awayTeamRadar: [
      { stat: "Attack", value: 78 }, { stat: "Defense", value: 82 }, { stat: "Possession", value: 85 },
      { stat: "Pressing", value: 80 }, { stat: "Set Pieces", value: 72 }, { stat: "Pace", value: 78 },
    ],
    homePlayers: [
      { name: "H. Son", number: 7, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 2 }, { label: "Rating", value: 6.8 }],
        radarStats: [{ stat: "Finishing", value: 48 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 60 }, { stat: "Physical", value: 50 }, { stat: "Positioning", value: 52 }] },
      { name: "J. Maddison", number: 10, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 3 }, { label: "Rating", value: 7.1 }],
        radarStats: [{ stat: "Finishing", value: 38 }, { stat: "Passing", value: 72 }, { stat: "Dribbling", value: 65 }, { stat: "Physical", value: 48 }, { stat: "Positioning", value: 58 }] },
      { name: "Richarlison", number: 9, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 2 }, { label: "Rating", value: 6.9 }],
        radarStats: [{ stat: "Finishing", value: 45 }, { stat: "Passing", value: 40 }, { stat: "Dribbling", value: 52 }, { stat: "Physical", value: 72 }, { stat: "Positioning", value: 55 }] },
      { name: "C. Romero", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 6 }, { label: "Rating", value: 7.3 }],
        radarStats: [{ stat: "Finishing", value: 20 }, { stat: "Passing", value: 55 }, { stat: "Dribbling", value: 38 }, { stat: "Physical", value: 88 }, { stat: "Positioning", value: 82 }] },
    ],
    awayPlayers: [
      { name: "E. Haaland", number: 9, playerId: "haaland", stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Shots", value: 5 }, { label: "Rating", value: 7.2 }],
        radarStats: [{ stat: "Finishing", value: 58 }, { stat: "Passing", value: 42 }, { stat: "Dribbling", value: 48 }, { stat: "Physical", value: 85 }, { stat: "Positioning", value: 72 }],
        previousMatch: { opponent: "Arsenal", stats: [{ label: "Goals", value: 1 }, { label: "Assists", value: 0 }, { label: "Rating", value: 8.2 }] } },
      { name: "K. De Bruyne", number: 17, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "KeyPass", value: 4 }, { label: "Rating", value: 7.6 }],
        radarStats: [{ stat: "Finishing", value: 45 }, { stat: "Passing", value: 85 }, { stat: "Dribbling", value: 72 }, { stat: "Physical", value: 58 }, { stat: "Positioning", value: 68 }] },
      { name: "P. Foden", number: 47, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Dribbles", value: 3 }, { label: "Rating", value: 7.4 }],
        radarStats: [{ stat: "Finishing", value: 52 }, { stat: "Passing", value: 75 }, { stat: "Dribbling", value: 80 }, { stat: "Physical", value: 52 }, { stat: "Positioning", value: 65 }] },
      { name: "K. Walker", number: 2, stats: [{ label: "Goals", value: 0 }, { label: "Assists", value: 0 }, { label: "Tackles", value: 5 }, { label: "Rating", value: 7.0 }],
        radarStats: [{ stat: "Finishing", value: 22 }, { stat: "Passing", value: 58 }, { stat: "Dribbling", value: 50 }, { stat: "Physical", value: 85 }, { stat: "Positioning", value: 70 }] },
    ],
  },
};
