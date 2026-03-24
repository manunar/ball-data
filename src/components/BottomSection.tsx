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
        <div className="ml-auto">
          <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
            <div className="text-[var(--text-secondary)] text-base">Select a game to view detailed shot chart data.</div>
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
