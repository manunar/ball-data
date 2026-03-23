"use client";

import { useEffect, useState } from "react";

export default function WinProbabilityBar({
  homeWinProbability,
}: {
  homeWinProbability: number;
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 120);
    return () => clearTimeout(t);
  }, []);

  const homeWidth = animated ? homeWinProbability : 0;
  const awayWidth = animated ? 100 - homeWinProbability : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-green-400 font-semibold">{homeWinProbability}%</span>
        <span className="text-purple-400 font-semibold">{100 - homeWinProbability}%</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden flex bg-gray-800">
        <div
          className="h-full bg-green-500 rounded-l-full"
          style={{
            width: `${homeWidth}%`,
            transition: "width 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="h-full bg-purple-500 rounded-r-full"
          style={{
            width: `${awayWidth}%`,
            transition: "width 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <div className="text-center text-[10px] text-gray-500 mt-1">Win Probability</div>
    </div>
  );
}
