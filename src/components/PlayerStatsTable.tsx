import { playerStats } from "@/data/mockData";

export default function PlayerStatsTable() {
  return (
    <div className="overflow-x-auto transition-colors duration-300">
      <table className="w-full text-base">
        <thead>
          <tr className="text-[var(--text-muted)] border-b border-[var(--border-color)]">
            <th className="text-left py-3.5 px-4 font-medium">Player</th>
            <th className="text-center py-3.5 px-3 font-medium">AP</th>
            <th className="text-center py-3.5 px-3 font-medium">W</th>
            <th className="text-center py-3.5 px-3 font-medium">Q</th>
            <th className="text-center py-3.5 px-3 font-medium">Pts</th>
            <th className="text-center py-3.5 px-3 font-medium">Ptd</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((player, i) => (
            <tr
              key={i}
              className="border-b border-[var(--border-color)] hover:bg-[#1a1a2e] transition-colors"
            >
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
  );
}
