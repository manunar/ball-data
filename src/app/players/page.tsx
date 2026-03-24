"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import BasketballBackground from "@/components/BasketballBackground";
import { followedPlayers, playerDetailData } from "@/data/mockData";
import { FollowedPlayer } from "@/lib/types";
import PlayerDetailModal from "@/components/PlayerDetailModal";
import { useSport } from "@/context/SportContext";

// ── count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1300, delay = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf: number;
    const timeout = setTimeout(() => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
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

// ── animated stat number ─────────────────────────────────────────────────────
function AnimatedStat({ value, delay }: { value: string | number; delay: number }) {
  const isPercent = typeof value === "string" && value.endsWith("%");
  const raw = typeof value === "string" ? value.replace("%", "") : String(value);
  const target = parseFloat(raw);
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;

  const animated = useCountUp(target, 1300, delay);

  return <>{animated.toFixed(decimals)}{isPercent ? "%" : ""}</>;
}

// ── rating ring with animated arc & number ───────────────────────────────────
function RatingRing({ rating, delay }: { rating: number; delay: number }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const animatedRating = useCountUp(rating, 1300, delay);
  const dash = ((animatedRating / 10) * circ);

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg width="56" height="56" viewBox="0 0 48 48" className="-rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="var(--ring-track)" strokeWidth="3.5" />
        <circle
          cx="24" cy="24" r={r} fill="none"
          stroke="#3b82f6" strokeWidth="3.5"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-sm font-bold text-[var(--text-primary)]">
        {animatedRating.toFixed(1)}
      </span>
    </div>
  );
}

// ── player card ───────────────────────────────────────────────────────────────
function PlayerCard({ player, delay }: { player: FollowedPlayer; delay: number }) {
  const [open, setOpen] = useState(false);
  const detail = playerDetailData[player.id];

  return (
    <>
    <div
      onClick={() => setOpen(true)}
      className="relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 overflow-hidden
                 hover:border-[var(--border-hover)] hover:-translate-y-1 hover:scale-[1.02]
                 transition-all duration-300 ease-out cursor-pointer"
    >
      {/* left color accent */}
      <div className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl" style={{ background: player.teamColor }} />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black"
            style={{ background: `${player.teamColor}22`, color: player.teamColor }}
          >
            #{player.number}
          </div>
          <div>
            <h3 className="text-[var(--text-primary)] font-bold text-base leading-tight">{player.name}</h3>
            <p className="text-[var(--text-muted)] text-sm">{player.position}</p>
            <p className="text-sm mt-0.5 font-medium" style={{ color: player.teamColor }}>
              {player.team}
            </p>
          </div>
        </div>
        <RatingRing rating={player.rating} delay={delay} />
      </div>

      {/* stats row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[player.stat1, player.stat2, player.stat3].map((stat, i) => (
          <div key={stat.label} className="bg-[var(--bg-surface)] rounded-lg py-2 px-1 text-center">
            <div className="text-[var(--text-primary)] font-bold text-base">
              <AnimatedStat value={stat.value} delay={delay + i * 80} />
            </div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
    {open && detail && (
      <PlayerDetailModal player={player} detail={detail} onClose={() => setOpen(false)} />
    )}
    </>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function PlayersPage() {
  const { sport } = useSport();
  const players = followedPlayers.filter((p) => p.sport === sport);

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
                  {isBasketball ? "Basketball" : "Football"} Players
                </h2>
                <p className="text-sm text-[var(--text-muted)]">
                  {isBasketball ? "NBA" : "Premier League"} players you follow
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {players.map((p, i) => (
                <PlayerCard key={p.id} player={p} delay={i * 150} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
