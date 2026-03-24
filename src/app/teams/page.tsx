"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import BasketballBackground from "@/components/BasketballBackground";
import { followedTeams, teamDetailData } from "@/data/mockData";
import { FollowedTeam } from "@/lib/types";
import TeamDetailModal from "@/components/TeamDetailModal";
import { useSport } from "@/context/SportContext";

// ── count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const timeout = setTimeout(() => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(eased * target);
        if (progress < 1) raf = requestAnimationFrame(step);
        else setValue(target);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [target, duration, delay]);

  return value;
}

// ── animated integer ─────────────────────────────────────────────────────────
function AnimatedNum({ value, delay }: { value: number; delay: number }) {
  const animated = useCountUp(value, 1200, delay);
  return <>{Math.round(animated)}</>;
}

// ── form dot — pops in at its own delay ───────────────────────────────────────
function FormDot({ result, delay }: { result: "W" | "L" | "D"; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const color =
    result === "W" ? "bg-green-500" :
    result === "L" ? "bg-red-500" :
    "bg-gray-500";

  return (
    <span
      title={result}
      className={`w-3 h-3 rounded-full ${color} inline-block
                  transition-all duration-300
                  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    />
  );
}

// ── team card ─────────────────────────────────────────────────────────────────
function TeamCard({ team, cardDelay }: { team: FollowedTeam; cardDelay: number }) {
  const [entered, setEntered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), cardDelay);
    return () => clearTimeout(t);
  }, [cardDelay]);

  const isBasketball = team.sport === "basketball";
  const detail = teamDetailData[team.id];

  return (
    <>
    <div
      onClick={() => setOpen(true)}
      className={`relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 overflow-hidden
                 hover:border-[var(--border-hover)] hover:-translate-y-1 hover:scale-[1.02]
                 cursor-pointer
                 transition-all duration-500 ease-out
                 ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* colored top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: team.color }} />

      <div className="flex items-start justify-between mt-1">
        {/* abbreviation as logo */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black"
          style={{ background: `${team.color}22`, color: team.color }}
        >
          {team.abbreviation}
        </div>
        {/* position badge — counts up */}
        <span
          className="text-sm font-bold px-3 py-1.5 rounded-full"
          style={{ background: `${team.color}22`, color: team.color }}
        >
          #<AnimatedNum value={team.position} delay={cardDelay + 150} />
        </span>
      </div>

      <div className="mt-3">
        <h3 className="text-[var(--text-primary)] font-bold text-lg leading-tight">{team.name}</h3>
        <p className="text-[var(--text-muted)] text-sm mt-0.5">{team.league}</p>
      </div>

      {/* W / D / L record — each number counts up */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[var(--text-secondary)] text-base font-medium">
          <AnimatedNum value={team.wins} delay={cardDelay + 250} />W
          {isBasketball ? (
            <> – <AnimatedNum value={team.losses} delay={cardDelay + 350} />L</>
          ) : (
            <>
              {" "}<AnimatedNum value={team.draws} delay={cardDelay + 350} />D
              {" "}<AnimatedNum value={team.losses} delay={cardDelay + 450} />L
            </>
          )}
        </span>
        {!isBasketball && (
          <span className="text-sm text-[var(--text-muted)]">
            <AnimatedNum value={team.points} delay={cardDelay + 450} /> pts
          </span>
        )}
      </div>

      {/* form dots — pop in one by one */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[var(--text-dim)] text-sm mr-1">Form</span>
        {team.form.map((r, i) => (
          <FormDot key={i} result={r} delay={cardDelay + 550 + i * 110} />
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-[var(--border-color)] text-sm text-[var(--text-muted)]">
        Next: <span className="text-[var(--text-secondary)]">{team.nextOpponent}</span>
      </div>
    </div>
    {open && detail && (
      <TeamDetailModal team={team} detail={detail} onClose={() => setOpen(false)} />
    )}
    </>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function TeamsPage() {
  const { sport } = useSport();
  const teams = followedTeams.filter((t) => t.sport === sport);

  const isBasketball = sport === "basketball";

  return (
    <main className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">

          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isBasketball ? "bg-orange-500/20" : "bg-white/10"}`}>
                {isBasketball ? (
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="46" stroke="#f97316" strokeWidth="6" />
                    <path d="M50 4 L50 96" stroke="#f97316" strokeWidth="5" />
                    <path d="M4 50 L96 50" stroke="#f97316" strokeWidth="5" />
                    <path d="M18 18 C40 38 40 62 18 82" stroke="#f97316" strokeWidth="5" fill="none" />
                    <path d="M82 18 C60 38 60 62 82 82" stroke="#f97316" strokeWidth="5" fill="none" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="46" stroke="#e5e7eb" strokeWidth="6" />
                    <polygon points="50,30 65,41 59,59 41,59 35,41" stroke="#e5e7eb" strokeWidth="5" fill="none" />
                    <line x1="50" y1="30" x2="50" y2="4"  stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="65" y1="41" x2="86" y2="27" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="59" y1="59" x2="77" y2="76" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="41" y1="59" x2="23" y2="76" stroke="#e5e7eb" strokeWidth="4" />
                    <line x1="35" y1="41" x2="14" y2="27" stroke="#e5e7eb" strokeWidth="4" />
                  </svg>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                  {isBasketball ? "Basketball" : "Football"} Teams
                </h2>
                <p className="text-sm text-[var(--text-muted)]">
                  {isBasketball ? "NBA" : "Premier League"} teams you follow
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teams.map((team, i) => (
                <TeamCard key={team.id} team={team} cardDelay={i * 150} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
