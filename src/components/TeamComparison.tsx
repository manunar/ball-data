import { comparisonPlayers } from "@/data/mockData";

export default function TeamComparison() {
  return (
    <div>
      {/* Dot Legend */}
      <div className="flex items-center gap-4 mb-4">
        {comparisonPlayers.map((player, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: player.dotColor }}
            />
          </div>
        ))}
      </div>

      {/* Team logos row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex gap-1">
          <div className="w-10 h-10 rounded bg-[#1a1a2e] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="9" y="1" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="1" y="9" width="6" height="6" rx="1" fill="#6b7280" />
              <rect x="9" y="9" width="6" height="6" rx="1" fill="#6b7280" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded bg-green-600/20 border border-green-600 flex items-center justify-center text-xs font-bold text-green-400">
            VS
          </div>
          <div className="w-10 h-10 rounded bg-blue-600/20 border border-blue-600 flex items-center justify-center text-xs font-bold text-blue-400">
            T
          </div>
        </div>
      </div>

      {/* Player Comparison Rows */}
      <div className="space-y-2">
        {comparisonPlayers.map((player, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 px-4 rounded-lg hover:bg-[#1a1a2e] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: player.dotColor }}
              />
              <span className="text-base text-[var(--text-primary)]">{player.name}</span>
            </div>
            <div className="flex items-center gap-6 text-base">
              <span className="text-[var(--text-secondary)] w-10 text-center">{player.w}</span>
              <span className="text-[var(--text-secondary)] w-10 text-center">{player.as}</span>
              <span className="text-[var(--text-secondary)] w-10 text-center">{player.eff}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Column headers for comparison */}
      <div className="flex justify-end gap-6 text-sm text-[var(--text-muted)] mt-1 pr-4">
        <span className="w-10 text-center">W</span>
        <span className="w-10 text-center">As</span>
        <span className="w-10 text-center">Eff</span>
      </div>
    </div>
  );
}
