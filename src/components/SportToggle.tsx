"use client";

import { useState } from "react";

export default function SportToggle() {
  const [active, setActive] = useState<"basketball" | "football">("basketball");

  return (
    <div className="flex items-center bg-[#1a1a2e] rounded-full p-1">
      <button
        onClick={() => setActive("basketball")}
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
          active === "basketball"
            ? "bg-purple-600 text-white"
            : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 2C12 2 12 22 12 22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 12C2 12 22 12 22 12" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4.5 4.5C8 8 8 16 4.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M19.5 4.5C16 8 16 16 19.5 19.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        Basketball
      </button>
      <button
        onClick={() => setActive("football")}
        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
          active === "football"
            ? "bg-purple-600 text-white"
            : "text-gray-400 hover:text-gray-200"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 2L9 8L3 9L7 14L5 22L12 18L19 22L17 14L21 9L15 8Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        Football
      </button>
    </div>
  );
}
