import { comparisonPlayers } from "@/data/mockData";

export default function TeamComparison() {
  return (
    <div>
      {/* Dot Legend */}
      <div className="flex items-center gap-4 mb-4">
        {comparisonPlayers.map((player, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: player.dotColor }}
            />
          </div>
        ))}
      </div>

      {/* Team logos row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-1">
          <div className="w-8 h-8 rounded bg-[#1a1a2e] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="9" y="1" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="1" y="9" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="9" y="9" width="6" height="6" rx="1" fill="#6b7280" />
            </svg>
          </div>
          <div className="w-8 h-8 rounded bg-green-600/20 border border-green-600 flex items-center justify-center text-[10px] font-bold text-green-400">
            VS
          </div>
          <div className="w-8 h-8 rounded bg-purple-600/20 border border-purple-600 flex items-center justify-center text-[10px] font-bold text-purple-400">
            T
          </div>
        </div>
      </div>

      {/* Player Comparison Rows */}
      <div className="space-y-2">
        {comparisonPlayers.map((player, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-[#1a1a2e] transition-colors"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: player.dotColor }}
              />
              <span className="text-sm text-white">{player.name}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-300 w-8 text-center">{player.w}</span>
              <span className="text-gray-300 w-8 text-center">{player.as}</span>
              <span className="text-gray-300 w-8 text-center">{player.eff}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Column headers for comparison */}
      <div className="flex justify-end gap-6 text-xs text-gray-500 mt-1 pr-3">
        <span className="w-8 text-center">W</span>
        <span className="w-8 text-center">As</span>
        <span className="w-8 text-center">Eff</span>
      </div>
    </div>
  );
}
