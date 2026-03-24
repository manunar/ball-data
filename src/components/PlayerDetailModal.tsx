"use client";

import { useEffect } from "react";
import { FollowedPlayer, PlayerDetailData } from "@/lib/types";

export default function PlayerDetailModal({
  player,
  detail,
  onClose,
}: {
  player: FollowedPlayer;
  detail: PlayerDetailData;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-[0_0_60px_var(--modal-shadow)] transition-colors duration-300"
        style={{ animation: "modal-in 0.25s ease-out" }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* header */}
        <div className="p-8 pb-5 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-black"
              style={{ background: `${player.teamColor}22`, color: player.teamColor }}
            >
              #{player.number}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">{player.name}</h2>
              <p className="text-base text-[var(--text-muted)]">{player.position}</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: player.teamColor }}>
                {player.team}
              </p>
            </div>
            <div className="ml-auto w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <span className="text-base font-bold text-[var(--text-primary)]">{player.rating}</span>
            </div>
          </div>

          {/* season stats */}
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[player.stat1, player.stat2, player.stat3].map((stat) => (
              <div key={stat.label} className="bg-[var(--bg-surface)] rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* recent matches */}
        <div className="p-8">
          <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">Recent Matches</h3>
          <div className="space-y-3">
            {detail.recentMatches.map((match, i) => (
              <div key={i} className="bg-[var(--bg-surface)] rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      match.result === "W" ? "bg-green-600" :
                      match.result === "L" ? "bg-red-600" :
                      "bg-gray-600"
                    }`}
                  >
                    {match.result}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base text-[var(--text-primary)] font-medium">vs {match.opponent}</div>
                    <div className="text-xs text-[var(--text-muted)]">{match.date}</div>
                  </div>
                  <div className="text-base font-bold text-[var(--text-primary)]">
                    {match.scoreFor} - {match.scoreAgainst}
                  </div>
                </div>

                <div className="flex gap-3 mt-3 pt-3 border-t border-[var(--border-color)]">
                  {match.stats.map((s) => (
                    <div key={s.label} className="bg-[var(--bg-card)] rounded px-4 py-2 text-center">
                      <div className="text-sm font-bold text-[var(--text-primary)]">{s.value}</div>
                      <div className="text-xs text-[var(--text-muted)]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
