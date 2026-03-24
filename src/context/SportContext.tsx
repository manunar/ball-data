"use client";

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Sport = "basketball" | "football";

const SportContext = createContext<{
  sport: Sport;
  setSport: (s: Sport) => void;
}>({ sport: "basketball", setSport: () => {} });

function SportProviderInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sport, setSport] = useState<Sport>("basketball");

  useEffect(() => {
    // Sync from ?sport= query param first (takes priority)
    const sportParam = searchParams.get("sport");
    if (sportParam === "football" || sportParam === "basketball") {
      setSport(sportParam);
      return;
    }

    // Sync from URL route on home pages
    if (pathname === "/football") {
      setSport("football");
    } else if (pathname === "/" || pathname === "/basketball") {
      setSport("basketball");
    }
  }, [pathname, searchParams]);

  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}

export function SportProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <SportProviderInner>{children}</SportProviderInner>
    </Suspense>
  );
}

export function useSport() {
  return useContext(SportContext);
}
