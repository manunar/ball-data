"use client";

import { use } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Header from "@/components/Header";
import BasketballBackground from "@/components/BasketballBackground";
import { followedPlayers, playerDetailData } from "@/data/mockData";
import { notFound } from "next/navigation";

export default function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const player = followedPlayers.find((p) => p.id === id);
  const detail = playerDetailData[id];

  if (!player) notFound();

  return (
    <main className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* back link */}
          <Link
            href="/players"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Players
          </Link>

          {/* hero card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden mb-8">
            {/* color bar */}
            <div className="h-1.5" style={{ background: player.teamColor }} />

            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* number badge */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0"
                  style={{ background: `${player.teamColor}22`, color: player.teamColor }}
                >
                  #{player.number}
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[var(--text-primary)]">{player.name}</h1>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-[var(--text-secondary)]">{player.position}</span>
                    <span className="text-sm font-medium" style={{ color: player.teamColor }}>
                      {player.team}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full capitalize"
                      style={{ background: `${player.teamColor}22`, color: player.teamColor }}>
                      {player.sport}
                    </span>
                  </div>
                </div>

                {/* rating ring */}
                <div className="relative w-20 h-20 shrink-0">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="var(--ring-track)" strokeWidth="5" />
                    <circle
                      cx="40" cy="40" r="34" fill="none"
                      stroke="#3b82f6" strokeWidth="5"
                      strokeDasharray={`${(player.rating / 10) * 2 * Math.PI * 34} ${2 * Math.PI * 34}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-[var(--text-primary)]">{player.rating}</span>
                  </div>
                </div>
              </div>

              {/* season stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[player.stat1, player.stat2, player.stat3].map((stat) => (
                  <div key={stat.label} className="bg-[var(--bg-surface)] rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* radar chart */}
            {detail && (
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Skill Radar</h2>
                <div className="w-full" style={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={detail.radarStats} cx="50%" cy="50%" outerRadius="70%">
                      <PolarGrid stroke={isDark ? "#475569" : "#cbd5e1"} />
                      <PolarAngleAxis dataKey="stat" tick={{ fill: isDark ? "#94a3b8" : "#64748b", fontSize: 11 }} />
                      <Radar
                        dataKey="value"
                        stroke={player.teamColor}
                        fill={`${player.teamColor}${isDark ? "55" : "33"}`}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* recent matches */}
            {detail && (
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Recent Matches</h2>
                <div className="space-y-3">
                  {detail.recentMatches.map((match, i) => (
                    <div key={i} className="bg-[var(--bg-surface)] rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                            match.result === "W" ? "bg-green-600" :
                            match.result === "L" ? "bg-red-600" :
                            "bg-gray-600"
                          }`}
                        >
                          {match.result}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-[var(--text-primary)] font-medium">
                            vs {match.opponent}
                          </div>
                          <div className="text-[10px] text-[var(--text-muted)]">{match.date}</div>
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">
                          {match.scoreFor} - {match.scoreAgainst}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3 pt-3 border-t border-[var(--border-color)]">
                        {match.stats.map((s) => (
                          <div key={s.label} className="bg-[var(--bg-card)] rounded-lg px-3 py-2 text-center flex-1">
                            <div className="text-sm font-bold text-[var(--text-primary)]">{s.value}</div>
                            <div className="text-[9px] text-[var(--text-muted)]">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
