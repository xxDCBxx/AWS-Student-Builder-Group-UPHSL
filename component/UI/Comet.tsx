import React from "react";

type Props = {
  /** CSS top value, e.g. "20%", "320px" */
  top: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Overall opacity 0–1 */
  opacity?: number;
  /** Tilt angle in degrees (positive = nose tilts down-right) */
  angle?: number;
  /** Width of the comet SVG */
  size?: number;
};

/**
 * A single comet streak.
 * Head is on the RIGHT, tail streams to the LEFT.
 * The keyframe (cometFly) translates purely left → right.
 * Position the comet vertically via `top`; horizontal entry is off-screen left.
 */
const Comet = ({ top, delay = 0, opacity = 0.45, angle = -18, size = 260 }: Props) => {
  const height = Math.round(size * 0.28);
  const headX = size - 14;
  const headY = 12;
  const tailX = 0;
  const tailY = height - 10;

  return (
    <div
      className="pointer-events-none fixed left-0 z-[2] hidden md:block"
      style={{ top, opacity }}
      aria-hidden="true"
    >
      <div
        className="animate-comet"
        style={{ animationDelay: `${delay}s` }}
      >
        <svg
          width={size}
          height={height}
          viewBox={`0 0 ${size} ${height}`}
          fill="none"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <defs>
            {/* gradient: transparent at tail (left/x=0), bright at head (right/x=1) */}
            <linearGradient id={`ct-${delay}-${top}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(192,38,211,0)" />
              <stop offset="75%" stopColor="rgba(192,38,211,0.7)" />
              <stop offset="100%" stopColor="rgba(255,210,138,0.9)" />
            </linearGradient>
          </defs>

          {/* main tail stroke from left-bottom to right-top */}
          <path
            d={`M${tailX},${tailY} L${headX},${headY}`}
            stroke={`url(#ct-${delay}-${top})`}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* secondary thinner tail for depth */}
          <path
            d={`M${tailX + 12},${tailY + 6} L${headX},${headY + 3}`}
            stroke={`url(#ct-${delay}-${top})`}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* head glow — right side */}
          <circle cx={headX} cy={headY} r="7" fill="#ffd28a" />
          <circle cx={headX} cy={headY} r="13" fill="rgba(255,180,90,0.28)" />
        </svg>
      </div>
    </div>
  );
};

export default Comet;
