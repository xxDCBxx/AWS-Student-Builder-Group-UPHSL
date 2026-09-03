"use client";

import React from "react";

const Team: React.FC = () => {
  const members = [0, 1, 2, 3, 4];

  return (
    <div id="team" className="relative flex flex-col gap-8 px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[70px] overflow-hidden">
      {/* comet */}
      <div className="pointer-events-none absolute top-8 right-10 hidden md:block">
        <div className="animate-comet">
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
            <defs>
              <linearGradient id="cometTail" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(192,38,211,0)" />
                <stop offset="100%" stopColor="rgba(192,38,211,0.9)" />
              </linearGradient>
            </defs>
            <path d="M0,70 L180,20" stroke="url(#cometTail)" strokeWidth="6" strokeLinecap="round" />
            <path d="M20,78 L180,20" stroke="url(#cometTail)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <circle cx="188" cy="18" r="10" fill="#ffd28a" />
            <circle cx="188" cy="18" r="16" fill="rgba(255,180,90,0.35)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-10">Meet Our Team</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {members.map((i) => (
            <div key={i} className="flex flex-col text-white">
              <div className="aspect-square rounded-2xl border border-white/15 aura-maroon bg-[radial-gradient(ellipse_at_center,rgba(60,60,70,0.6),rgba(10,10,14,0.95))] shadow-lg mb-4" />
              <h2 className="font-tektur font-bold tracking-widest text-lg">POSTION</h2>
              <p className="font-tektur text-sm mt-1">name</p>
              <p className="font-tektur text-sm text-white/80 mt-1">position descrip</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team;
