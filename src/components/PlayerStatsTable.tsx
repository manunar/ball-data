import { playerStats } from "@/data/mockData";

export default function PlayerStatsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b border-[#1e1e2e]">
            <th className="text-left py-3 px-4 font-medium">Player</th>
            <th className="text-center py-3 px-2 font-medium">AP</th>
            <th className="text-center py-3 px-2 font-medium">W</th>
            <th className="text-center py-3 px-2 font-medium">Q</th>
            <th className="text-center py-3 px-2 font-medium">Pts</th>
            <th className="text-center py-3 px-2 font-medium">Ptd</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((player, i) => (
            <tr
              key={i}
              className="border-b border-[#1e1e2e] hover:bg-[#1a1a2e] transition-colors"
            >
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
  );
}
