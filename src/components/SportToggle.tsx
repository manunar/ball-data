"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSport } from "@/context/SportContext";

export default function SportToggle() {
  const pathname = usePathname();
  const { sport } = useSport();

  // On home/basketball/football pages, use Link navigation
  const isHomePage = pathname === "/" || pathname === "/basketball" || pathname === "/football";

  const isBasketball = isHomePage
    ? pathname === "/" || pathname === "/basketball"
    : sport === "basketball";
  const isFootball = isHomePage ? pathname === "/football" : sport === "football";

  const btnClass = (active: boolean) =>
    `flex items-center gap-2 px-5 py-2 rounded-full text-base font-medium transition-colors cursor-pointer ${
      active ? "bg-blue-600 text-white" : "text-[var(--text-secondary)] hover:text-gray-200"
    }`;

  const basketballIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 2C12 2 12 22 12 22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12C2 12 22 12 22 12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 4.5C8 8 8 16 4.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M19.5 4.5C16 8 16 16 19.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );

  const footballIcon = (
    <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="7" />
      <polygon points="50,30 65,41 59,59 41,59 35,41" stroke="currentColor" strokeWidth="6" fill="none" />
      <line x1="50" y1="30" x2="50" y2="4"  stroke="currentColor" strokeWidth="5" />
      <line x1="65" y1="41" x2="86" y2="27" stroke="currentColor" strokeWidth="5" />
      <line x1="59" y1="59" x2="77" y2="76" stroke="currentColor" strokeWidth="5" />
      <line x1="41" y1="59" x2="23" y2="76" stroke="currentColor" strokeWidth="5" />
      <line x1="35" y1="41" x2="14" y2="27" stroke="currentColor" strokeWidth="5" />
    </svg>
  );

  return (
    <div className="flex items-center bg-[var(--bg-card)] rounded-full p-1">
      <Link
        href={isHomePage ? "/basketball" : `${pathname}?sport=basketball`}
        className={btnClass(isBasketball)}
      >
        {basketballIcon}
        Basketball
      </Link>
      <Link
        href={isHomePage ? "/football" : `${pathname}?sport=football`}
        className={btnClass(isFootball)}
      >
        {footballIcon}
        Football
      </Link>
    </div>
  );
}
