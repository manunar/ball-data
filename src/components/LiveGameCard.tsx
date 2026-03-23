import { LiveGame } from "@/lib/types";
import TeamLogo from "./TeamLogo";
import WinProbabilityBar from "./WinProbabilityBar";

export default function LiveGameCard({ game }: { game: LiveGame }) {
  return (
    <div className="relative bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5 shadow-[0_0_20px_rgba(100,50,200,0.1)] hover:shadow-[0_0_35px_rgba(100,50,200,0.35)] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#3a2a5e] transition-all duration-300 ease-out cursor-pointer">
      {game.isLive && (
        <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Live
        </span>
      )}

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col items-center gap-2">
          <TeamLogo team={game.homeTeam} size="lg" />
          <span className="text-xs text-gray-400 text-center max-w-[80px] truncate">
            {game.homeTeam.name}
          </span>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold tracking-wider">
            {game.homeScore} - {game.awayScore}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {game.quarter} / {game.timeRemaining}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <TeamLogo team={game.awayTeam} size="lg" />
          <span className="text-xs text-gray-400 text-center max-w-[80px] truncate">
            {game.awayTeam.name}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <WinProbabilityBar homeWinProbability={game.homeWinProbability} />
      </div>
    </div>
  );
}
