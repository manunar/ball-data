"use client";

import { useState } from "react";
import { LiveGame } from "@/lib/types";
import { gameDetailData } from "@/data/mockData";
import TeamLogo from "./TeamLogo";
import WinProbabilityBar from "./WinProbabilityBar";
import GameDetailModal from "./GameDetailModal";

export default function LiveGameCard({ game }: { game: LiveGame }) {
  const [open, setOpen] = useState(false);
  const detail = gameDetailData[game.id];

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 shadow-[0_0_20px_var(--shadow-glow)] hover:shadow-[0_0_35px_var(--shadow-glow-hover)] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[var(--border-hover)] transition-all duration-300 ease-out cursor-pointer"
      >
        {game.isLive && (
          <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Live
          </span>
        )}

        <div className="flex items-center justify-between mt-5">
          <div className="flex flex-col items-center gap-2">
            <TeamLogo team={game.homeTeam} size="lg" />
            <span className="text-sm text-[var(--text-secondary)] text-center max-w-[100px] truncate">
              {game.homeTeam.name}
            </span>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold tracking-wider">
              {game.homeScore} - {game.awayScore}
            </div>
            <div className="text-sm text-[var(--text-muted)] mt-1">
              {game.quarter} / {game.timeRemaining}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <TeamLogo team={game.awayTeam} size="lg" />
            <span className="text-sm text-[var(--text-secondary)] text-center max-w-[100px] truncate">
              {game.awayTeam.name}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <WinProbabilityBar homeWinProbability={game.homeWinProbability} />
        </div>
      </div>

      {open && detail && (
        <GameDetailModal game={game} detail={detail} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
