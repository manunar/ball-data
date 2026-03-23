import { Team } from "@/lib/types";

export default function TeamLogo({
  team,
  size = "md",
}: {
  team: Team;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-12 h-12 text-xs",
    lg: "w-14 h-14 text-sm",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold border-2`}
      style={{
        backgroundColor: team.color + "22",
        borderColor: team.color,
        color: team.color,
      }}
    >
      {team.abbreviation}
    </div>
  );
}
