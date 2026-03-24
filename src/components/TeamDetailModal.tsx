"use client";

import { useEffect } from "react";
import { FollowedTeam, TeamDetailData } from "@/lib/types";

export default function TeamDetailModal({
  team,
  detail,
  onClose,
}: {
  team: FollowedTeam;
  detail: TeamDetailData;
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
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-[0_0_60px_var(--modal-shadow)] transition-colors duration-300"
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
              className="w-18 h-18 rounded-xl flex items-center justify-center text-2xl font-black"
              style={{ background: `${team.color}22`, color: team.color }}
            >
              {team.abbreviation}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">{team.name}</h2>
              <p className="text-base text-[var(--text-muted)]">{team.league}</p>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-sm font-bold px-2.5 py-1 rounded-full" style={{ background: `${team.color}22`, color: team.color }}>
                  #{team.position}
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {team.wins}W {team.draws > 0 ? `${team.draws}D ` : ""}{team.losses}L
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* season stats */}
        <div className="p-8 border-b border-[var(--border-color)]">
          <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">Season Stats</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {detail.seasonStats.map((s) => (
              <div key={s.label} className="bg-[var(--bg-surface)] rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-[var(--text-primary)]">{s.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* recent matches */}
        <div className="p-8 border-b border-[var(--border-color)]">
          <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">Recent Matches</h3>
          <div className="space-y-3">
            {detail.recentMatches.map((match, i) => (
              <div key={i} className="flex items-center gap-3 bg-[var(--bg-surface)] rounded-lg p-4">
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
                  <div className="text-xs text-[var(--text-muted)]">{match.competition} &middot; {match.date}</div>
                </div>
                <div className="text-base font-bold text-[var(--text-primary)]">
                  {match.scoreFor} - {match.scoreAgainst}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* top players */}
        <div className="p-8">
          <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">Top Players</h3>
          <div className="space-y-3">
            {detail.topPlayers.map((player) => (
              <div key={player.name} className="flex items-center gap-3 bg-[var(--bg-surface)] rounded-lg p-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: `${player.teamColor}22`, color: player.teamColor }}
                >
                  #{player.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-medium text-[var(--text-primary)]">{player.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{player.position}</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-[var(--text-primary)]">{player.stat1.value}</div>
                    <div className="text-xs text-[var(--text-muted)]">{player.stat1.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[var(--text-primary)]">{player.stat2.value}</div>
                    <div className="text-xs text-[var(--text-muted)]">{player.stat2.label}</div>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <span className="text-xs font-bold text-[var(--text-primary)]">{player.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
