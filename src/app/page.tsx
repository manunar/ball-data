import Header from "@/components/Header";
import LiveGamesGrid from "@/components/LiveGamesGrid";
import BottomSection from "@/components/BottomSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <LiveGamesGrid />
        <BottomSection />
      </div>
    </main>
  );
}
