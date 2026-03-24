"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { radarData } from "@/data/mockData";
import { useTheme } from "@/context/ThemeContext";

export default function ShotChart() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gridStroke = isDark ? "#475569" : "#cbd5e1";
  const tickFill = isDark ? "#94a3b8" : "#64748b";
  const fillOpacity = isDark ? 0.35 : 0.2;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke={gridStroke} />
            <PolarAngleAxis
              dataKey="stat"
              tick={{ fill: tickFill, fontSize: 13 }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Team A"
              dataKey="teamA"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={fillOpacity}
              strokeWidth={2}
            />
            <Radar
              name="Team B"
              dataKey="teamB"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={fillOpacity}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
          <span>Team A</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
          <span>Team B</span>
        </div>
      </div>
    </div>
  );
}
