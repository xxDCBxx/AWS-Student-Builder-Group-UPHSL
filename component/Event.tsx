"use client"

import { useState, useEffect, useRef } from "react"
import Title from "@/component/Event/Title"
import ImageFrame from "@/component/Event/ImageFrame"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import Pagination from "@/component/UI/Pagination"
import { events } from "@/data/event"
import { EventType } from "@/component/UpcomingEvent/Card"

const typeIcon: Record<EventType, string> = {
  [EventType.SEMINAR]: "🎙️",
  [EventType.WORKSHOP]: "🔧",
  [EventType.COMPETITION]: "🏆",
  [EventType.COMMUNITY]: "🤝",
}

const Event = () => {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)   // drives opacity for crossfade
  const pendingRef = useRef<number | null>(null)  // next index waiting to show

  const FADE_MS = 220

  const goTo = (next: number) => {
    // Fade out, swap content, fade back in
    setVisible(false)
    pendingRef.current = next
  }

  const prev = () => goTo((current - 1 + events.length) % events.length)
  const next = () => goTo((current + 1) % events.length)

  // When we fade out, wait for the transition then swap + fade in
  useEffect(() => {
    if (!visible && pendingRef.current !== null) {
      const t = setTimeout(() => {
        setCurrent(pendingRef.current!)
        pendingRef.current = null
        setVisible(true)
      }, FADE_MS)
      return () => clearTimeout(t)
    }
  }, [visible])

  const event = events[current]

  return (
    <div id="events" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <Title />

        <div className="flex items-center gap-4 mt-8">
          <div className="hidden md:block flex-shrink-0">
            <ArrowLeft onClick={prev} />
          </div>

          {/* Fading content area */}
          <div
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            {/* left: event images */}
            <div className="order-1">
              <ImageFrame image_path={event.pictures} />
            </div>

            {/* right: text */}
            <div className="space-y-4 order-2">
              <div className="flex items-center gap-2">
                <span className="text-base">{typeIcon[event.type] ?? "📅"}</span>
                <p className="font-tektur text-xs sm:text-sm text-[#ffa23f] uppercase tracking-widest">{event.type}</p>
              </div>
              <h2 className="font-tektur text-xl sm:text-2xl font-bold text-white">
                {event.title}
              </h2>
              <p className="font-tektur text-xs sm:text-sm text-white/60">
                {event.date}{event.location ? ` · ${event.location}` : ""}
              </p>
              <p className="font-tektur text-sm sm:text-base text-white/90 leading-relaxed">
                {event.subtitle}
              </p>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0">
            <ArrowRight onClick={next} />
          </div>
        </div>

        {/* mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-6">
          <ArrowLeft onClick={prev} />
          <ArrowRight onClick={next} />
        </div>

        {/* pagination dots */}
        <div className="flex justify-center mt-6">
          <Pagination
            count={events.length}
            currentPage={current}
            onPageChange={(i) => goTo(i)}
          />
        </div>
      </div>
    </div>
  )
}

export default Event
