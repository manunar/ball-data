"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LiveGame, GameDetailData, GamePlayerStat } from "@/lib/types";
import TeamLogo from "./TeamLogo";
import MiniRadarChart from "./MiniRadarChart";

function PlayerCard({
  player,
  teamColor,
  teamId,
}: {
  player: GamePlayerStat;
  teamColor: string;
  teamId: string;
}) {
  const [showPrev, setShowPrev] = useState(false);

  const nameContent = (
    <span
      className={`text-lg font-semibold ${player.playerId ? "hover:underline" : ""}`}
      style={{ color: teamColor }}
    >
      {player.name}
    </span>
  );

  return (
    <div className="bg-[var(--bg-surface)] rounded-2xl p-7 border border-[var(--bg-card)] transition-colors duration-300">
      {/* header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ background: `${teamColor}22`, color: teamColor }}
        >
          #{player.number}
        </div>
        <div className="flex-1 min-w-0">
          {player.playerId ? (
            <Link href={`/players/${player.playerId}`}>{nameContent}</Link>
          ) : (
            nameContent
          )}
        </div>
        {player.stats.find((s) => s.label === "Rating") && (
          <div
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: teamColor }}
          >
            <span className="text-sm font-bold text-[var(--text-primary)]">
              {player.stats.find((s) => s.label === "Rating")?.value}
            </span>
          </div>
        )}
      </div>

      {/* radar chart + stats side by side */}
      <div className="flex items-start gap-3">
        {player.radarStats && (
          <div className="shrink-0">
            <MiniRadarChart
              data={player.radarStats}
              color={teamColor}
              size={230}
              previousData={showPrev ? player.previousMatch?.radarStats : undefined}
            />
          </div>
        )}
        <div className="flex-1 grid grid-cols-3 gap-x-4 gap-y-3 pt-2">
          {player.stats.map((s) => (
            <div key={s.label}>
              <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* previous match toggle */}
      {player.previousMatch && (
        <div className="mt-5 pt-5 border-t border-[var(--bg-card)]">
          <button
            onClick={() => setShowPrev(!showPrev)}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors mb-3"
          >
            {showPrev ? "Hide" : "Show"} Previous Match
            {showPrev ? " ▲" : " ▼"}
          </button>
          {showPrev && (
            <div className="flex items-center gap-5 animate-in"
              style={{ animation: "modal-in 0.2s ease-out" }}
            >
              <span className="text-sm text-[var(--text-muted)]">
                vs {player.previousMatch.opponent}
              </span>
              <div className="flex gap-5">
                {player.previousMatch.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
                    <div className="text-base font-bold text-[var(--text-secondary)]">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function GameDetailModal({
  game,
  detail,
  onClose,
}: {
  game: LiveGame;
  detail: GameDetailData;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"players" | "teams">("teams");

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
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-[0_0_60px_var(--modal-shadow)] transition-colors duration-300"
        style={{ animation: "modal-in 0.25s ease-out" }}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* score header */}
        <div className="p-8 pb-5 border-b border-[var(--border-color)]">
          <div className="flex items-center justify-center gap-10">
            <Link href={`/teams/${game.homeTeam.id}`} className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
              <TeamLogo team={game.homeTeam} size="lg" />
              <span className="text-base font-semibold text-[var(--text-primary)]">{game.homeTeam.name}</span>
            </Link>
            <div className="text-center">
              <div className="text-5xl font-extrabold tracking-wider">
                {game.homeScore} - {game.awayScore}
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                {game.isLive && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Live
                  </span>
                )}
                <span className="text-sm text-[var(--text-muted)]">
                  {game.quarter} / {game.timeRemaining}
                </span>
              </div>
            </div>
            <Link href={`/teams/${game.awayTeam.id}`} className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
              <TeamLogo team={game.awayTeam} size="lg" />
              <span className="text-base font-semibold text-[var(--text-primary)]">{game.awayTeam.name}</span>
            </Link>
          </div>
        </div>

        {/* tab bar */}
        <div className="flex border-b border-[var(--border-color)]">
          {(["teams", "players"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-4 text-base font-semibold transition-colors ${
                tab === t
                  ? "text-[var(--text-primary)] border-b-2 border-blue-500"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              {t === "teams" ? "Team Comparison" : "Player Stats"}
            </button>
          ))}
        </div>

        {/* players tab */}
        {tab === "players" && (
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* home */}
              <div>
                <h3
                  className="text-base font-bold mb-4"
                  style={{ color: game.homeTeam.color }}
                >
                  {game.homeTeam.name}
                </h3>
                <div className="space-y-4">
                  {detail.homePlayers.map((p) => (
                    <PlayerCard
                      key={p.name}
                      player={p}
                      teamColor={game.homeTeam.color}
                      teamId={game.homeTeam.id}
                    />
                  ))}
                </div>
              </div>
              {/* away */}
              <div>
                <h3
                  className="text-base font-bold mb-4"
                  style={{ color: game.awayTeam.color }}
                >
                  {game.awayTeam.name}
                </h3>
                <div className="space-y-4">
                  {detail.awayPlayers.map((p) => (
                    <PlayerCard
                      key={p.name}
                      player={p}
                      teamColor={game.awayTeam.color}
                      teamId={game.awayTeam.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* teams tab */}
        {tab === "teams" && (
          <div className="p-8">
            {/* merged radar comparison */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center justify-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-1 rounded-full" style={{ background: game.homeTeam.color }} />
                  <span className="text-sm font-bold" style={{ color: game.homeTeam.color }}>{game.homeTeam.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-1 rounded-full" style={{ background: game.awayTeam.color }} />
                  <span className="text-sm font-bold" style={{ color: game.awayTeam.color }}>{game.awayTeam.name}</span>
                </div>
              </div>
              <MiniRadarChart
                data={detail.homeTeamRadar}
                color={game.homeTeam.color}
                secondData={detail.awayTeamRadar}
                secondColor={game.awayTeam.color}
                size={360}
              />
            </div>

            {/* stat bars */}
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-5">Match Stats</h3>
            <div className="space-y-4">
              {detail.teamStats.map((stat) => {
                const total = stat.home + stat.away;
                const homePct = total > 0 ? (stat.home / total) * 100 : 50;
                return (
                  <div key={stat.label}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-semibold w-12 text-right" style={{ color: game.homeTeam.color }}>
                        {stat.home}
                      </span>
                      <span className="text-[var(--text-muted)] text-center flex-1">{stat.label}</span>
                      <span className="font-semibold w-12" style={{ color: game.awayTeam.color }}>
                        {stat.away}
                      </span>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div className="flex-1 flex justify-end">
                        <div
                          className="h-full rounded-l-full"
                          style={{ width: `${homePct}%`, background: game.homeTeam.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div
                          className="h-full rounded-r-full"
                          style={{ width: `${100 - homePct}%`, background: game.awayTeam.color }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
