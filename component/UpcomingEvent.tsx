"use client"

import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import { upcomingEvents } from "@/data/upcomingEvent"
import { EventType } from "@/component/UpcomingEvent/Card"

const typeIcon: Record<EventType, string> = {
  [EventType.SEMINAR]: "🎙️",
  [EventType.WORKSHOP]: "🔧",
  [EventType.COMPETITION]: "🏆",
  [EventType.COMMUNITY]: "🤝",
}

const UpcomingEvent = () => {
  const noop = () => {}

  return (
    <div id="upcoming" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-tektur text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-wide">UPCOMING EVENTS</h1>

        <button className="pill-purple aura-maroon-btn font-tektur tracking-widest text-white rounded-full py-2 px-5 text-sm mb-10">
          WORK WITH US
        </button>

        <div className="flex items-start gap-4">
          <div className="hidden md:flex items-center self-center">
            <ArrowLeft onClick={noop} />
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl p-6 aura-maroon tech-frame bg-gradient-to-b from-[#c026d3]/20 via-[#7a1f8e]/15 to-[#3a0f4d]/10 backdrop-blur-sm flex flex-col gap-4"
              >
                {/* type badge */}
                <div className="flex items-center gap-2">
                  <span className="text-base">{typeIcon[event.type] ?? "📅"}</span>
                  <span className="font-tektur tracking-widest text-xs sm:text-sm text-white/70 uppercase">{event.type}</span>
                </div>

                {/* title */}
                <h2 className="font-tektur font-bold text-xl sm:text-2xl text-white leading-snug">{event.title}</h2>

                {/* description */}
                <p className="font-tektur text-sm sm:text-base text-white/80 leading-relaxed">{event.subtitle}</p>

                {/* meta */}
                <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 font-tektur text-xs sm:text-sm text-white/70">
                    <span>📅</span><span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 font-tektur text-xs sm:text-sm text-white/70">
                    <span>🕐</span><span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 font-tektur text-xs sm:text-sm text-white/70">
                    <span>📍</span><span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center self-center">
            <ArrowRight onClick={noop} />
          </div>
        </div>

        {/* mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-6">
          <ArrowLeft onClick={noop} />
          <ArrowRight onClick={noop} />
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
