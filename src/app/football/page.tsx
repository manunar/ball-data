import Header from "@/components/Header";
import FootballGamesGrid from "@/components/FootballGamesGrid";
import FootballBottomSection from "@/components/FootballBottomSection";
import FootballBackground from "@/components/FootballBackground";

export default function FootballPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <FootballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" stroke="#e5e7eb" strokeWidth="5" />
                <polygon points="50,30 65,41 59,59 41,59 35,41" stroke="#e5e7eb" strokeWidth="4" fill="none" />
                <line x1="50" y1="30" x2="50" y2="4"  stroke="#e5e7eb" strokeWidth="3.5" />
                <line x1="65" y1="41" x2="86" y2="27" stroke="#e5e7eb" strokeWidth="3.5" />
                <line x1="59" y1="59" x2="77" y2="76" stroke="#e5e7eb" strokeWidth="3.5" />
                <line x1="41" y1="59" x2="23" y2="76" stroke="#e5e7eb" strokeWidth="3.5" />
                <line x1="35" y1="41" x2="14" y2="27" stroke="#e5e7eb" strokeWidth="3.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Premier League Live</h2>
              <p className="text-sm text-[var(--text-muted)]">Real-time scores &amp; win probabilities</p>
            </div>
          </div>
          <FootballGamesGrid />
          <FootballBottomSection />
        </div>
      </div>
    </main>
  );
}
