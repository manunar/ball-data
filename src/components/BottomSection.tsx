"use client";

import { useState } from "react";
import PlayerStatsTable from "./PlayerStatsTable";
import TeamComparison from "./TeamComparison";
import ShotChart from "./ShotChart";

type Tab = "player-stats" | "team-comparison" | "shot-chart";

export default function BottomSection() {
  const [activeTab, setActiveTab] = useState<Tab>("player-stats");

  const tabs: { id: Tab; label: string }[] = [
    { id: "player-stats", label: "Player Stats" },
    { id: "team-comparison", label: "Team Comparison" },
    { id: "shot-chart", label: "Shot Chart" },
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
        <div className="ml-auto">
          <button className="text-gray-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {activeTab === "player-stats" && <PlayerStatsTable />}
          {activeTab === "team-comparison" && <TeamComparison />}
          {activeTab === "shot-chart" && (
            <div className="text-gray-400 text-sm">Select a game to view detailed shot chart data.</div>
          )}
        </div>
        <div className="lg:col-span-1">
          <TeamComparison />
        </div>
        <div className="lg:col-span-1">
          <ShotChart />
        </div>
      </div>
    </div>
  );
}
