"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { followedPlayers, followedTeams } from "@/data/mockData";

interface SearchResult {
  type: "player" | "team";
  id: string;
  name: string;
  subtitle: string;
  color: string;
  href: string;
}

function buildResults(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const p of followedPlayers) {
    if (
      p.name.toLowerCase().includes(q) ||
      p.team.toLowerCase().includes(q) ||
      p.position.toLowerCase().includes(q)
    ) {
      results.push({
        type: "player",
        id: p.id,
        name: p.name,
        subtitle: `${p.position} · ${p.team}`,
        color: p.teamColor,
        href: `/players/${p.id}`,
      });
    }
  }

  for (const t of followedTeams) {
    if (
      t.name.toLowerCase().includes(q) ||
      t.abbreviation.toLowerCase().includes(q) ||
      t.league.toLowerCase().includes(q)
    ) {
      results.push({
        type: "team",
        id: t.id,
        name: t.name,
        subtitle: t.league,
        color: t.color,
        href: `/teams/${t.id}`,
      });
    }
  }

  return results.slice(0, 8);
}

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const results = buildResults(query);

  useEffect(() => {
    setSelectedIdx(-1);
  }, [query]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIdx >= 0 && results[selectedIdx]) {
      setOpen(false);
      setQuery("");
      window.location.href = results[selectedIdx].href;
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-hover)] rounded-lg px-4 py-2 text-base text-[var(--text-muted)] hover:border-[#64748b] hover:text-[var(--text-secondary)] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        Search...
        <kbd className="hidden sm:inline text-xs text-[var(--text-dim)] border border-[var(--border-hover)] rounded px-1.5 py-0.5 ml-2">
          Ctrl+K
        </kbd>
      </button>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center bg-[var(--bg-card)] border border-blue-500/50 rounded-lg px-4 py-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search players, teams..."
          className="bg-transparent border-none outline-none text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] ml-2 w-56"
        />
        <button
          onClick={() => { setOpen(false); setQuery(""); }}
          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm ml-1"
        >
          Esc
        </button>
      </div>

      {/* dropdown results */}
      {query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden z-50"
          style={{ minWidth: 320 }}
        >
          {results.length === 0 ? (
            <div className="px-5 py-4 text-base text-[var(--text-muted)]">No results found</div>
          ) : (
            results.map((r, i) => (
              <Link
                key={`${r.type}-${r.id}`}
                href={r.href}
                onClick={() => { setOpen(false); setQuery(""); }}
                className={`flex items-center gap-3 px-5 py-3.5 transition-colors ${
                  i === selectedIdx ? "bg-[var(--bg-card)]" : "hover:bg-[var(--bg-card)]"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${r.color}22`, color: r.color }}
                >
                  {r.type === "player" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-base font-medium text-[var(--text-primary)] truncate">{r.name}</div>
                  <div className="text-xs text-[var(--text-muted)] truncate">{r.subtitle}</div>
                </div>
                <span className="text-xs text-[var(--text-dim)] uppercase shrink-0">{r.type}</span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
