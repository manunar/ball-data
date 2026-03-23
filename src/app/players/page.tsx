"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import BasketballBackground from "@/components/BasketballBackground";
import { followedPlayers } from "@/data/mockData";
import { FollowedPlayer } from "@/lib/types";

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
    <div className="relative w-12 h-12 flex items-center justify-center">
      <svg width="48" height="48" viewBox="0 0 48 48" className="-rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="#1e1e2e" strokeWidth="3.5" />
        <circle
          cx="24" cy="24" r={r} fill="none"
          stroke="#a855f7" strokeWidth="3.5"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-bold text-white">
        {animatedRating.toFixed(1)}
      </span>
    </div>
  );
}

// ── player card ───────────────────────────────────────────────────────────────
function PlayerCard({ player, delay }: { player: FollowedPlayer; delay: number }) {
  return (
    <div
      className="relative bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5 overflow-hidden
                 hover:border-[#2e2e4e] hover:-translate-y-1 hover:scale-[1.02]
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
            <h3 className="text-white font-bold text-sm leading-tight">{player.name}</h3>
            <p className="text-gray-500 text-xs">{player.position}</p>
            <p className="text-xs mt-0.5 font-medium" style={{ color: player.teamColor }}>
              {player.team}
            </p>
          </div>
        </div>
        <RatingRing rating={player.rating} delay={delay} />
      </div>

      {/* stats row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[player.stat1, player.stat2, player.stat3].map((stat, i) => (
          <div key={stat.label} className="bg-[#0d0d14] rounded-lg py-2 px-1 text-center">
            <div className="text-white font-bold text-sm">
              <AnimatedStat value={stat.value} delay={delay + i * 80} />
            </div>
            <div className="text-gray-500 text-[10px] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function PlayersPage() {
  const basketballPlayers = followedPlayers.filter((p) => p.sport === "basketball");
  const footballPlayers = followedPlayers.filter((p) => p.sport === "football");

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Basketball section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="46" stroke="#f97316" strokeWidth="6" />
                  <path d="M50 4 L50 96" stroke="#f97316" strokeWidth="5" />
                  <path d="M4 50 L96 50" stroke="#f97316" strokeWidth="5" />
                  <path d="M18 18 C40 38 40 62 18 82" stroke="#f97316" strokeWidth="5" fill="none" />
                  <path d="M82 18 C60 38 60 62 82 82" stroke="#f97316" strokeWidth="5" fill="none" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Basketball Players</h2>
                <p className="text-xs text-gray-500">NBA players you follow</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {basketballPlayers.map((p, i) => (
                <PlayerCard key={p.id} player={p} delay={i * 150} />
              ))}
            </div>
          </section>

          {/* Football section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="46" stroke="#e5e7eb" strokeWidth="6" />
                  <polygon points="50,30 65,41 59,59 41,59 35,41" stroke="#e5e7eb" strokeWidth="5" fill="none" />
                  <line x1="50" y1="30" x2="50" y2="4"  stroke="#e5e7eb" strokeWidth="4" />
                  <line x1="65" y1="41" x2="86" y2="27" stroke="#e5e7eb" strokeWidth="4" />
                  <line x1="59" y1="59" x2="77" y2="76" stroke="#e5e7eb" strokeWidth="4" />
                  <line x1="41" y1="59" x2="23" y2="76" stroke="#e5e7eb" strokeWidth="4" />
                  <line x1="35" y1="41" x2="14" y2="27" stroke="#e5e7eb" strokeWidth="4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Football Players</h2>
                <p className="text-xs text-gray-500">Premier League players you follow</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {footballPlayers.map((p, i) => (
                <PlayerCard key={p.id} player={p} delay={i * 150} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
