export default function WinProbabilityBar({
  homeWinProbability,
}: {
  homeWinProbability: number;
}) {
  const awayWinProbability = 100 - homeWinProbability;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-green-400 font-semibold">{homeWinProbability}%</span>
        <span className="text-purple-400 font-semibold">{awayWinProbability}%</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden flex bg-gray-800">
        <div
          className="h-full bg-green-500 rounded-l-full"
          style={{ width: `${homeWinProbability}%` }}
        />
        <div
          className="h-full bg-purple-500 rounded-r-full"
          style={{ width: `${awayWinProbability}%` }}
        />
      </div>
      <div className="text-center text-[10px] text-gray-500 mt-1">Win Probability</div>
    </div>
  );
}
