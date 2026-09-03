"use client"

import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"

const upcomingEvents = [
  {
    type: "SEMINAR",
    title: "TechTuhan (Reworked)",
    description:
      "A dynamic, media-driven interactive session designed to inspire students through the shared career journeys and insights of guest speakers. Taking inspiration from the popular podcast format, the session blends technical communication with entertainment (\"infotainment\")—featuring debates on trending tech discussions from Reddit and LinkedIn, deep dives into new AWS technologies, and exclusive reveals of puzzle solutions from the \"Build with Awie!\" games.",
    date: "Monthly, Starting September 2026",
    time: "TBA",
    location: "AWS Student Builder Group - UPHSL Discord Server",
  },
  {
    type: "WORKSHOP",
    title: "Data Analytics and Machine Learning Workshop with AWS",
    description:
      "A hands-on, month-long workshop designed to introduce students to the fundamentals of data analytics and machine learning. Under the guidance of experienced mentors, participants will master data analysis techniques, familiarize themselves with core platform interfaces, and complete guided exercises to gain practical experience in data visualization and predictive modeling.",
    date: "February 2027",
    time: "TBA",
    location: "Macintosh Laboratory, UPHSL",
  },
]

const typeIcon: Record<string, string> = {
  SEMINAR: "🎙️",
  WORKSHOP: "🔧",
}

const UpcomingEvent = () => {
  const noop = () => {}

  return (
    <div id="upcoming" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">UPCOMING EVENTS</h1>

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
                  <span className="font-tektur tracking-widest text-xs text-white/70 uppercase">{event.type}</span>
                </div>

                {/* title */}
                <h2 className="font-tektur font-bold text-lg text-white leading-snug">{event.title}</h2>

                {/* description */}
                <p className="font-tektur text-xs text-white/80 leading-relaxed">{event.description}</p>

                {/* meta */}
                <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 font-tektur text-xs text-white/70">
                    <span>📅</span><span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 font-tektur text-xs text-white/70">
                    <span>🕐</span><span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 font-tektur text-xs text-white/70">
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
