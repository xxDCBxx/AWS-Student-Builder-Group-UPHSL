"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/component/UI/ArrowLeft";
import ArrowRight from "@/component/UI/ArrowRight";

const members = [
  { name: "Marc Angelo Casugbo", role: "President", img: "/data/New Officers/Marc Angelo Casugbo - President.png" },
  { name: "Rain Jade De Castro", role: "Vice President", img: "/data/New Officers/Rain Jade De Castro - Vice President.png" },
  { name: "Zain Raza Khan", role: "Head of Operations (HO)", img: "/data/New Officers/Zain Raza Khan - Head of Operations (HO).png" },
  { name: "Trisha Biglete", role: "Head of Relations and Community Outreach (HRC)", img: "/data/New Officers/Trisha Biglete - Head of Relations and Community Outreach (HRC).png" },
  { name: "Alyssa Marie Valera", role: "Head of Marketing and Multimedia (HMM)", img: "/data/New Officers/Alyssa Marie Valera - Head of Marketing and Multimedia (HMM).png" },
  { name: "Gil Ashley Bien", role: "Executive Secretary", img: "/data/New Officers/Gil Ashley Bien - Executive Secretary.png" },
  { name: "Auxi Nicole Pongos", role: "Associate Secretary", img: "/data/New Officers/Auxi Nicole Pongos - Associate Secretary.png" },
  { name: "Yzabel Claurie Nett Mallari", role: "Treasurer", img: "/data/New Officers/Yzabel Claurie Nett Mallari - Treasurer.png" },
  { name: "Claurenz Mallari", role: "Auditor", img: "/data/New Officers/Claurenz Mallari - Auditor.png" },
  { name: "Allyza Shamel Hernandez", role: "Internal Relation Officer", img: "/data/New Officers/Allyza Shamel Hernandez - Internal Relation Officer.png" },
  { name: "Don Santiago Sigue", role: "External Relation Officer", img: "/data/New Officers/Don Santiago Sigue - External Relation Officer.png" },
  { name: "Irish Nicole Montañez", role: "Communications Manager", img: "/data/New Officers/Irish Nicole Montañez Communications Manager.png" },
  { name: "Angela Shayne Montañez", role: "Social Media Marketing Manager", img: "/data/New Officers/Angela Shayne Montañez - Social Media Marketing Manager.png" },
  { name: "Jedidiah Barcelona", role: "Content Manager", img: "/data/New Officers/Jedidiah Barcelona - Content Manager.png" },
  { name: "Jasmine Fae Dictado", role: "Multimedia Specialist", img: "/data/New Officers/Jasmine Fae Dictado - Multimedia Specialist.png" },
  { name: "Kylle Vincent Amondina", role: "Video Editor", img: "/data/New Officers/Kylle Vincent Amondina - Video Editor.png" },
  { name: "Lucky Angel Guevarra", role: "Community Manager", img: "/data/New Officers/Lucky Angel Guevarra - Community Manager.png" },
  { name: "Norven Zaldy Carandang", role: "Logistics Coordinator", img: "/data/New Officers/Norven Zaldy Carandang -Logistics Coordinator.png" },
  { name: "Christopher James Nuqui", role: "Web Development Specialist", img: "/data/New Officers/Christopher James Nuqui - Web Development Specialist.png" },
  { name: "Alliana Faith Palmiery", role: "Support Staff", img: "/data/New Officers/Alliana Faith Palmiery - Support Staff.png" },
  { name: "Zyrus Alvez", role: "Consultant", img: "/data/New Officers/Zyrus Alvez - Consultant.png" },
];

const PAGE_SIZE = 5;
const totalPages = Math.ceil(members.length / PAGE_SIZE);

const Team: React.FC = () => {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const visible = members.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

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

        <div className="flex items-center gap-4">
          {/* left arrow */}
          <div className="flex-shrink-0">
            <ArrowLeft onClick={prev} />
          </div>

          {/* 5-column grid */}
          <div className="flex-1 grid grid-cols-5 gap-4">
            {visible.map((member) => (
              <div key={member.name} className="flex flex-col text-white">
                <div className="relative aspect-square rounded-2xl overflow-hidden aura-maroon mb-3">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="font-tektur font-bold text-xs sm:text-sm leading-snug">{member.name}</h2>
                <p className="font-tektur text-xs text-white/70 mt-1 leading-snug">{member.role}</p>
              </div>
            ))}
          </div>

          {/* right arrow */}
          <div className="flex-shrink-0">
            <ArrowRight onClick={next} />
          </div>
        </div>

        {/* page dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === page ? "bg-purple-400 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
