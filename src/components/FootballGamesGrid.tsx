import { footballGames } from "@/data/mockData";
import LiveGameCard from "./LiveGameCard";

export default function FootballGamesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {footballGames.map((game) => (
        <LiveGameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
