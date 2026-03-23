"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SportToggle() {
  const pathname = usePathname();

  const isBasketball = pathname === "/" || pathname === "/basketball";
  const isFootball = pathname === "/football";

  const linkClass = (active: boolean) =>
    `flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
      active ? "bg-purple-600 text-white" : "text-gray-400 hover:text-gray-200"
    }`;

  return (
    <div className="flex items-center bg-[#1a1a2e] rounded-full p-1">
      <Link href="/basketball" className={linkClass(isBasketball)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 2C12 2 12 22 12 22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12C2 12 22 12 22 12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4.5 4.5C8 8 8 16 4.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M19.5 4.5C16 8 16 16 19.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        Basketball
      </Link>
      <Link href="/football" className={linkClass(isFootball)}>
        <svg width="16" height="16" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="7" />
          <polygon points="50,30 65,41 59,59 41,59 35,41" stroke="currentColor" strokeWidth="6" fill="none" />
          <line x1="50" y1="30" x2="50" y2="4"  stroke="currentColor" strokeWidth="5" />
          <line x1="65" y1="41" x2="86" y2="27" stroke="currentColor" strokeWidth="5" />
          <line x1="59" y1="59" x2="77" y2="76" stroke="currentColor" strokeWidth="5" />
          <line x1="41" y1="59" x2="23" y2="76" stroke="currentColor" strokeWidth="5" />
          <line x1="35" y1="41" x2="14" y2="27" stroke="currentColor" strokeWidth="5" />
        </svg>
        Football
      </Link>
    </div>
  );
}
