"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ArrowLeft from "@/component/UI/ArrowLeft";
import ArrowRight from "@/component/UI/ArrowRight";
import { teamYears } from "@/data/team";

const CARD_W     = 180;
const CARD_GAP   = 20;
const CARD_STEP  = CARD_W + CARD_GAP;
const PX_PER_SEC = 40;
const STEP_SPEED = CARD_STEP / 0.42; // one card in ~420ms
const PAUSE_MS   = 5000;

// How many cards to render on each side of the visible area.
// This is the ONLY source of truth for which cards appear — derived
// from domOff during render, never stored in a separate state.
const BUFFER = 20;

function mod(n: number, len: number) {
  return ((n % len) + len) % len;
}

const Team: React.FC = () => {
  const [yearIndex, setYearIndex]       = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [paused, setPaused]             = useState(false);
  // domOff is the ONLY scroll state — everything else is derived from it
  const [domOff, setDomOff]             = useState(0);

  const selectedYear = teamYears[yearIndex];
  const members      = selectedYear.members;
  const count        = members.length;

  // All mutable scroll bookkeeping in refs
  const domOffRef     = useRef(0);
  const pausedRef     = useRef(false);
  const steppingRef   = useRef(false);
  const stepRemRef    = useRef(0);
  const lastTimeRef   = useRef<number | null>(null);
  const rafRef        = useRef<number | null>(null);
  const pauseTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  pausedRef.current = paused;

  // ── Derive the visible card strip directly from domOff ──────────────────
  //
  // domOff is a pixel offset that grows (more negative = scrolled further left).
  // We figure out which logical card index sits at the left edge of the viewport,
  // then render BUFFER cards to the left of that and BUFFER to the right.
  //
  // No separate window state — so offset and content are always in sync.
  const getStrip = (off: number) => {
    // which card index is at pixel 0 of the scrolling row?
    // off is negative; -off / CARD_STEP gives how many cards we've scrolled past
    const leftCard  = Math.floor(-off / CARD_STEP) - BUFFER;
    const total     = BUFFER * 2 + 10; // a bit of extra padding
    return Array.from({ length: total }, (_, i) => {
      const logical = leftCard + i;
      return {
        logical,
        member: members[mod(logical, count)],
        x: logical * CARD_STEP + off,  // pixel position relative to viewport left
      };
    });
  };

  // ── rAF loop ─────────────────────────────────────────────────────────────
  const tick = useCallback((time: number) => {
    if (lastTimeRef.current === null) lastTimeRef.current = time;
    const delta = Math.min(time - lastTimeRef.current, 50);
    lastTimeRef.current = time;

    let off = domOffRef.current;

    if (steppingRef.current) {
      const maxMove = (STEP_SPEED * delta) / 1000;
      const rem     = stepRemRef.current;
      const move    = Math.abs(rem) <= maxMove ? rem : Math.sign(rem) * maxMove;
      off += move;
      stepRemRef.current -= move;

      if (Math.abs(stepRemRef.current) < 0.5) {
        // Snap to exact card boundary — no rounding error
        off = Math.round(off / CARD_STEP) * CARD_STEP;
        stepRemRef.current = 0;
        steppingRef.current = false;
        if (pauseTimer.current) clearTimeout(pauseTimer.current);
        pauseTimer.current = setTimeout(() => setPaused(false), PAUSE_MS);
      }
    } else if (!pausedRef.current) {
      off -= (PX_PER_SEC * delta) / 1000;
    }

    // Keep offset bounded — when we've drifted a full set to the left,
    // silently jump right by one set. Because domOff mod (count*CARD_STEP)
    // is preserved, the visible cards are identical before and after.
    const setW = count * CARD_STEP;
    while (off <= -(setW * 2)) off += setW;
    while (off > 0)            off -= setW;

    domOffRef.current = off;
    setDomOff(off);

    rafRef.current = requestAnimationFrame(tick);
  }, [count]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  // Reset on year change
  useEffect(() => {
    domOffRef.current   = 0;
    steppingRef.current = false;
    stepRemRef.current  = 0;
    lastTimeRef.current = null;
    setDomOff(0);
    setPaused(false);
  }, [yearIndex]);

  // Arrow — only when not mid-step
  const handleArrow = useCallback((direction: "prev" | "next") => {
    if (steppingRef.current) return;
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    setPaused(true);
    stepRemRef.current  = direction === "prev" ? CARD_STEP : -CARD_STEP;
    steppingRef.current = true;
  }, []);

  const handleYearChange = (i: number) => {
    setYearIndex(i);
    setDropdownOpen(false);
  };

  // Derive the strip from current domOff — always in sync, no separate state
  const strip = getStrip(domOff);

  return (
    <div id="team" className="relative flex flex-col gap-6 px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header + year dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="font-tektur text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-wide">
            Meet Our Team
          </h1>

          <div className="relative self-start sm:self-auto">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-3 font-tektur text-sm tracking-widest text-white border border-[#ffa23f]/60 rounded-full px-5 py-2 bg-black/30 backdrop-blur-sm hover:border-[#ffa23f] hover:bg-[#ffa23f]/10 transition-all duration-200"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span>{selectedYear.label}</span>
              <svg
                className={`w-3 h-3 text-[#ffa23f] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 10 6" stroke="currentColor" strokeWidth="2"
              >
                <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul role="listbox" className="absolute right-0 mt-2 min-w-full bg-[#1a0a2e] border border-[#ffa23f]/40 rounded-xl overflow-hidden z-20 shadow-xl">
                {teamYears.map((y, i) => (
                  <li key={y.year}>
                    <button
                      role="option"
                      aria-selected={i === yearIndex}
                      onClick={() => handleYearChange(i)}
                      className={`w-full text-left font-tektur text-sm tracking-widest px-5 py-3 transition-colors duration-150
                        ${i === yearIndex ? "text-[#ffa23f] bg-[#ffa23f]/10" : "text-white/80 hover:text-white hover:bg-white/5"}`}
                    >
                      {y.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Conveyor belt */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex-shrink-0">
            <ArrowLeft onClick={() => handleArrow("prev")} />
          </div>

          {/* Viewport — uses relative positioning; cards are absolutely placed */}
          <div className="flex-1 overflow-hidden relative" style={{ height: CARD_W + 80 }}>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
              style={{ background: "linear-gradient(to right, #050208, transparent)" }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
              style={{ background: "linear-gradient(to left, #050208, transparent)" }} />

            {strip.map(({ logical, member, x }) => (
              <div
                key={logical}
                className="absolute top-0 flex flex-col text-white"
                style={{ left: x, width: CARD_W }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden aura-maroon mb-3"
                  style={{ width: CARD_W, height: CARD_W }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes={`${CARD_W}px`}
                  />
                </div>
                <p className="font-tektur text-xs tracking-widest text-[#ffa23f] uppercase mb-0.5 leading-tight truncate">
                  {member.title}
                </p>
                <h2 className="font-tektur font-bold text-sm leading-snug line-clamp-2 mb-1">
                  {member.name}
                </h2>
                {(member.facebook || member.linkedin) && (
                  <div className="flex gap-2 mt-0.5">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-[#ffa23f] transition-colors duration-150"
                        aria-label={`${member.name} Facebook`}
                      >
                        <FaFacebook size={14} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-[#ffa23f] transition-colors duration-150"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0">
            <ArrowRight onClick={() => handleArrow("next")} />
          </div>
        </div>

        {paused && (
          <p className="font-tektur text-xs text-white/35 text-center mt-3 tracking-widest">
            resuming shortly...
          </p>
        )}
      </div>
    </div>
  );
};

export default Team;
