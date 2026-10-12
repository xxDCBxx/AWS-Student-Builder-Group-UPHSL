"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

// ---------------------------------------------------------------------------
// Trajectories — fromX/fromY → toX/toY in vw/vh units (off-screen edges)
// ---------------------------------------------------------------------------
const TRAJECTORIES = [
  // top-left → bottom-right
  { id: "a", fromX: -8,  fromY: -4,  toX: 72,  toY: 88,  size: 280 },
  // bottom-left → top-right
  { id: "b", fromX: -6,  fromY: 94,  toX: 96,  toY: 4,   size: 240 },
  // right-mid → left-upper
  { id: "c", fromX: 106, fromY: 52,  toX: -4,  toY: 14,  size: 220 },
  // bottom-right → mid-left
  { id: "d", fromX: 104, fromY: 96,  toX: 8,   toY: 38,  size: 200 },
  // top-right → bottom-left
  { id: "e", fromX: 100, fromY: -3,  toX: 4,   toY: 100, size: 260 },
  // mid-top → bottom-right
  { id: "f", fromX: 32,  fromY: -5,  toX: 106, toY: 82,  size: 230 },
  // left-mid → right-lower
  { id: "g", fromX: -5,  fromY: 48,  toX: 102, toY: 70,  size: 250 },
  // top-center → bottom-left
  { id: "h", fromX: 50,  fromY: -4,  toX: -4,  toY: 96,  size: 210 },
] as const;

type Trajectory = (typeof TRAJECTORIES)[number];

const TRAVEL_MS = 4500;       // how long the comet takes to cross (ms)
const MIN_INTERVAL_MS = 5000;
const MAX_INTERVAL_MS = 60000;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function angleDeg(t: Trajectory) {
  const dx = t.toX - t.fromX;
  const dy = t.toY - t.fromY;
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

// ---------------------------------------------------------------------------
// Single comet rendering
// ---------------------------------------------------------------------------
type ActiveComet = {
  trajectory: Trajectory;
  key: number; // forces remount so CSS transition reruns
};

const CometVisual: React.FC<{ t: Trajectory; traveling: boolean }> = ({ t, traveling }) => {
  const w = t.size;
  const h = Math.round(w * 0.22);
  const headX = w - 12;
  const midY = Math.round(h / 2);
  const gradId = `cg-${t.id}`;
  const deg = angleDeg(t);

  const dx = `${t.toX - t.fromX}vw`;
  const dy = `${t.toY - t.fromY}vh`;

  return (
    <div
      style={{
        position: "fixed",
        left: `${t.fromX}vw`,
        top: `${t.fromY}vh`,
      zIndex: -1,
        pointerEvents: "none",
        opacity: traveling ? 0.45 : 0,
        transform: traveling ? `translate(${dx}, ${dy})` : "translate(0, 0)",
        transition: traveling
          ? `transform ${TRAVEL_MS}ms linear, opacity 300ms ease-in`
          : "opacity 400ms ease-out",
        willChange: "transform, opacity",
      }}
      aria-hidden="true"
    >
      <div style={{ transform: `rotate(${deg}deg)`, transformOrigin: "left center" }}>
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(192,38,211,0)" />
              <stop offset="68%"  stopColor="rgba(192,38,211,0.75)" />
              <stop offset="100%" stopColor="rgba(255,210,138,1)" />
            </linearGradient>
          </defs>
          {/* main tail */}
          <path
            d={`M0,${midY} L${headX},${midY}`}
            stroke={`url(#${gradId})`}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* soft secondary tail */}
          <path
            d={`M0,${midY + 3} L${headX - 24},${midY + 2}`}
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.38"
          />
          {/* head glow */}
          <circle cx={headX} cy={midY} r="6"  fill="#ffd28a" />
          <circle cx={headX} cy={midY} r="12" fill="rgba(255,180,90,0.25)" />
        </svg>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Shower controller — fires one comet at a time, random gap between each
// ---------------------------------------------------------------------------
const CometShower: React.FC = () => {
  const [active, setActive] = useState<ActiveComet | null>(null);
  const [traveling, setTraveling] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keyRef = useRef(0);
  // track last trajectory index to avoid immediate repeats
  const lastIndexRef = useRef(-1);

  const fireNext = useCallback(() => {
    // pick a trajectory that isn't the same as the last one
    let idx: number;
    do {
      idx = Math.floor(Math.random() * TRAJECTORIES.length);
    } while (idx === lastIndexRef.current);
    lastIndexRef.current = idx;

    keyRef.current += 1;
    setActive({ trajectory: TRAJECTORIES[idx], key: keyRef.current });
    setTraveling(false);

    // small tick so the browser paints the start position before we begin moving
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTraveling(true);
      });
    });

    // after travel completes, fade out then schedule the next one
    timerRef.current = setTimeout(() => {
      setTraveling(false);
      // fade-out duration is 400ms, then wait random interval
      timerRef.current = setTimeout(() => {
        setActive(null);
        const gap = rand(MIN_INTERVAL_MS, MAX_INTERVAL_MS);
        timerRef.current = setTimeout(fireNext, gap);
      }, 450);
    }, TRAVEL_MS);
  }, []);

  useEffect(() => {
    // initial random delay before very first comet (2–8s so page loads first)
    const initialDelay = rand(2000, 8000);
    timerRef.current = setTimeout(fireNext, initialDelay);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fireNext]);

  if (!active) return null;

  return (
    <CometVisual
      key={active.key}
      t={active.trajectory}
      traveling={traveling}
    />
  );
};

export default CometShower;
