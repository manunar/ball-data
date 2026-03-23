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
    <div className="mt-6 bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-[#1e1e2e] text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "player-stats" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-[#1e1e2e]">
                <th className="text-left py-3 px-4 font-medium">Player</th>
                <th className="text-center py-3 px-2 font-medium">RAT</th>
                <th className="text-center py-3 px-2 font-medium">GLS</th>
                <th className="text-center py-3 px-2 font-medium">AST</th>
                <th className="text-center py-3 px-2 font-medium">SOT</th>
                <th className="text-center py-3 px-2 font-medium">PA%</th>
              </tr>
            </thead>
            <tbody>
              {footballPlayerStats.map((player, i) => (
                <tr key={i} className="border-b border-[#1e1e2e] hover:bg-[#1a1a2e] transition-colors">
                  <td className="py-3 px-4 text-white font-medium">{player.name}</td>
                  <td className="py-3 px-2 text-center text-gray-300">{player.ap}</td>
                  <td className="py-3 px-2 text-center text-gray-300">{player.w}</td>
                  <td className="py-3 px-2 text-center text-gray-300">{player.q}</td>
                  <td className="py-3 px-2 text-center text-gray-300">{player.pts}</td>
                  <td className="py-3 px-2 text-center text-gray-300">{player.ptd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "team-comparison" && (
        <div className="space-y-3">
          {footballRadarData.map((row, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm text-gray-400 w-28 shrink-0">{row.stat}</span>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-2 bg-[#1e1e2e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full transition-all"
                    style={{ width: `${row.teamA}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-6 text-right">{row.teamA}</span>
              </div>
              <div className="flex-1 flex items-center gap-2">
                <span className="text-xs text-gray-400 w-6">{row.teamB}</span>
                <div className="flex-1 h-2 bg-[#1e1e2e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all"
                    style={{ width: `${row.teamB}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-xs text-gray-600 mt-3 px-1">
            <span className="text-purple-400">Team A</span>
            <span className="text-green-400">Team B</span>
          </div>
        </div>
      )}
    </div>
  );
}
