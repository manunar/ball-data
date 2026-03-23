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

export default function ShotChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#2a2a3a" />
            <PolarAngleAxis
              dataKey="stat"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
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
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar
              name="Team B"
              dataKey="teamB"
              stroke="#a855f7"
              fill="#a855f7"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-6 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>Team A</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span>Team B</span>
        </div>
      </div>
    </div>
  );
}
