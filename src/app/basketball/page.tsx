import Header from "@/components/Header";
import LiveGamesGrid from "@/components/LiveGamesGrid";
import BottomSection from "@/components/BottomSection";
import BasketballBackground from "@/components/BasketballBackground";

export default function BasketballPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20" />
                <path d="M4.5 4.5C8 8 8 16 4.5 19.5M19.5 4.5C16 8 16 16 19.5 19.5" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">NBA Live Games</h2>
              <p className="text-sm text-[var(--text-muted)]">Real-time scores &amp; win probabilities</p>
            </div>
          </div>
          <LiveGamesGrid />
          <BottomSection />
        </div>
      </div>
    </main>
  );
}
