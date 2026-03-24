import { Team } from "@/lib/types";

export default function TeamLogo({
  team,
  size = "md",
}: {
  team: Team;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-18 h-18 text-base",
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
