"use client";

import { useState } from "react";
import { footballPlayerStats, footballRadarData } from "@/data/mockData";

type Tab = "player-stats" | "team-comparison";

export default function FootballBottomSection() {
  const [activeTab, setActiveTab] = useState<Tab>("player-stats");

  const tabs: { id: Tab; label: string }[] = [
    { id: "player-stats", label: "Player Stats" },
    { id: "team-comparison", label: "Team Comparison" },
  ];

  return (
    <div className="mt-8 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-[var(--border-color)] text-[var(--text-primary)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "player-stats" && (
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead>
              <tr className="text-[var(--text-muted)] border-b border-[var(--border-color)]">
                <th className="text-left py-3.5 px-4 font-medium">Player</th>
                <th className="text-center py-3.5 px-3 font-medium">RAT</th>
                <th className="text-center py-3.5 px-3 font-medium">GLS</th>
                <th className="text-center py-3.5 px-3 font-medium">AST</th>
                <th className="text-center py-3.5 px-3 font-medium">SOT</th>
                <th className="text-center py-3.5 px-3 font-medium">PA%</th>
              </tr>
            </thead>
            <tbody>
              {footballPlayerStats.map((player, i) => (
                <tr key={i} className="border-b border-[var(--border-color)] hover:bg-[#1a1a2e] transition-colors">
                  <td className="py-3.5 px-4 text-[var(--text-primary)] font-medium">{player.name}</td>
                  <td className="py-3.5 px-3 text-center text-[var(--text-secondary)]">{player.ap}</td>
                  <td className="py-3.5 px-3 text-center text-[var(--text-secondary)]">{player.w}</td>
                  <td className="py-3.5 px-3 text-center text-[var(--text-secondary)]">{player.q}</td>
                  <td className="py-3.5 px-3 text-center text-[var(--text-secondary)]">{player.pts}</td>
                  <td className="py-3.5 px-3 text-center text-[var(--text-secondary)]">{player.ptd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "team-comparison" && (
        <div className="space-y-4">
          {footballRadarData.map((row, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-base text-[var(--text-secondary)] w-32 shrink-0">{row.stat}</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-2.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${row.teamA}%` }}
                  />
                </div>
                <span className="text-sm text-[var(--text-secondary)] w-8 text-right">{row.teamA}</span>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <span className="text-sm text-[var(--text-secondary)] w-8">{row.teamB}</span>
                <div className="flex-1 h-2.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all"
                    style={{ width: `${row.teamB}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-sm text-[var(--text-dim)] mt-3 px-1">
            <span className="text-blue-400">Team A</span>
            <span className="text-green-400">Team B</span>
          </div>
        </div>
      )}
    </div>
  );
}
