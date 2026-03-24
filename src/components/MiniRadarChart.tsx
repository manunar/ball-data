"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  data: { stat: string; value: number }[];
  color?: string;
  size?: number;
  previousData?: { stat: string; value: number }[];
  secondData?: { stat: string; value: number }[];
  secondColor?: string;
}

export default function MiniRadarChart({
  data,
  color = "#3b82f6",
  size = 140,
  previousData,
  secondData,
  secondColor,
}: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gridStroke = isDark ? "#475569" : "#cbd5e1";
  const tickFill = isDark ? "#94a3b8" : "#64748b";
  const fillOpacity = isDark ? "55" : "33";
  const prevStroke = isDark ? "#94a3b888" : "#6b728088";
  const prevFill = isDark ? "#94a3b822" : "#6b728022";

  const merged = data.map((d) => {
    const prev = previousData?.find((p) => p.stat === d.stat);
    const second = secondData?.find((s) => s.stat === d.stat);
    return {
      stat: d.stat,
      value: d.value,
      prev: prev?.value ?? 0,
      second: second?.value ?? 0,
    };
  });

  return (
    <div style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={merged} cx="50%" cy="50%" outerRadius="45%">
          <PolarGrid stroke={gridStroke} />
          <PolarAngleAxis
            dataKey="stat"
            tick={{ fill: tickFill, fontSize: 13 }}
          />
          {previousData && (
            <Radar
              dataKey="prev"
              stroke={prevStroke}
              fill={prevFill}
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          )}
          {secondData && secondColor && (
            <Radar
              dataKey="second"
              stroke={secondColor}
              fill={`${secondColor}${fillOpacity}`}
              strokeWidth={2}
            />
          )}
          <Radar
            dataKey="value"
            stroke={color}
            fill={`${color}${fillOpacity}`}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
