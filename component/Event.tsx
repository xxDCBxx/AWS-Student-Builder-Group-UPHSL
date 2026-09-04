"use client"

import { useState } from "react"
import Title from "@/component/Event/Title"
import ImageFrame from "@/component/Event/ImageFrame"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import Pagination from "@/component/UI/Pagination"
import { events } from "@/data/event"

const Event = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(events.length - 1, c + 1))

  const event = events[current]

  return (
    <div id="events" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <Title />

        <div className="flex items-center gap-4 mt-8">
          <div className="hidden md:block flex-shrink-0">
            <ArrowLeft onClick={prev} />
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* left: event images */}
            <div className="order-1">
              <ImageFrame image_path={event.pictures} />
            </div>

            {/* right: text */}
            <div className="space-y-4 order-2">
              <p className="font-tektur text-xs text-[#ffa23f] uppercase tracking-widest">{event.type}</p>
              <h2 className="font-tektur text-xl sm:text-2xl font-bold text-white">
                {event.title}
              </h2>
              <p className="font-tektur text-xs text-white/60">{event.date}{event.location ? ` · ${event.location}` : ""}</p>
              <p className="font-tektur text-sm text-white/90 leading-relaxed">
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
            onPageChange={setCurrent}
          />
        </div>
      </div>
    </div>
  )
}

export default Event
