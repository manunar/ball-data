import Header from "@/components/Header";
import LiveGamesGrid from "@/components/LiveGamesGrid";
import BottomSection from "@/components/BottomSection";
import BasketballBackground from "@/components/BasketballBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white">
      <BasketballBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <LiveGamesGrid />
          <BottomSection />
        </div>
      </div>
    </main>
  );
}
