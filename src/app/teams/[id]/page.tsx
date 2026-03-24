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
import { followedTeams, teamDetailData } from "@/data/mockData";
import { notFound } from "next/navigation";

export default function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const team = followedTeams.find((t) => t.id === id || t.id === `${id}-f`);
  const matchedId = team?.id ?? id;
  const detail = teamDetailData[matchedId];

  if (!team) notFound();

  return (
    <main className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* back link */}
          <Link
            href="/teams"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Teams
          </Link>

          {/* hero */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden mb-8">
            <div className="h-1.5" style={{ background: team.color }} />
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0"
                  style={{ background: `${team.color}22`, color: team.color }}
                >
                  {team.abbreviation}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[var(--text-primary)]">{team.name}</h1>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{team.league}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span
                      className="text-sm font-bold px-3 py-1 rounded-full"
                      style={{ background: `${team.color}22`, color: team.color }}
                    >
                      #{team.position}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {team.wins}W {team.draws > 0 ? `${team.draws}D ` : ""}{team.losses}L
                    </span>
                    {team.sport === "football" && (
                      <span className="text-sm text-[var(--text-muted)]">{team.points} pts</span>
                    )}
                  </div>
                </div>
                {/* form */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs text-[var(--text-dim)] mr-1">Form</span>
                  {team.form.map((r, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${
                        r === "W" ? "bg-green-600" : r === "L" ? "bg-red-600" : "bg-gray-600"
                      }`}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* season stats */}
              {detail && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6">
                  {detail.seasonStats.map((s) => (
                    <div key={s.label} className="bg-[var(--bg-surface)] rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-[var(--text-primary)]">{s.value}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* radar chart */}
            {detail && (
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Team Radar</h2>
                <div className="w-full" style={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={detail.radarStats} cx="50%" cy="50%" outerRadius="70%">
                      <PolarGrid stroke={isDark ? "#475569" : "#cbd5e1"} />
                      <PolarAngleAxis dataKey="stat" tick={{ fill: isDark ? "#94a3b8" : "#64748b", fontSize: 11 }} />
                      <Radar
                        dataKey="value"
                        stroke={team.color}
                        fill={`${team.color}${isDark ? "55" : "33"}`}
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
                    <div key={i} className="flex items-center gap-3 bg-[var(--bg-surface)] rounded-xl p-4">
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
                        <div className="text-sm text-[var(--text-primary)] font-medium">vs {match.opponent}</div>
                        <div className="text-[10px] text-[var(--text-muted)]">
                          {match.competition} &middot; {match.date}
                        </div>
                      </div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">
                        {match.scoreFor} - {match.scoreAgainst}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* top players */}
          {detail && (
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 mt-6">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Top Players</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {detail.topPlayers.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 bg-[var(--bg-surface)] rounded-xl p-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: `${p.teamColor}22`, color: p.teamColor }}
                    >
                      #{p.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)]">{p.name}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{p.position}</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-center">
                        <div className="text-xs font-bold text-[var(--text-primary)]">{p.stat1.value}</div>
                        <div className="text-[9px] text-[var(--text-muted)]">{p.stat1.label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-bold text-[var(--text-primary)]">{p.stat2.value}</div>
                        <div className="text-[9px] text-[var(--text-muted)]">{p.stat2.label}</div>
                      </div>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full border-2 border-blue-500 flex items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-[var(--text-primary)]">{p.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
