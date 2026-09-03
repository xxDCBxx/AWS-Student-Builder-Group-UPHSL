"use client"

import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"

const UpcomingEvent = () => {
  const noop = () => {}
  const cards = [0, 1, 2]

  return (
    <div id="upcoming" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">UPCOMING EVENTS</h1>

        <button className="pill-purple font-tektur tracking-widest text-white rounded-full py-2 px-5 text-sm mb-10">
          WORK WITH US
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ArrowLeft onClick={noop} />
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl border border-white/15 aura-maroon bg-[radial-gradient(ellipse_at_center,rgba(120,40,120,0.25),rgba(5,2,8,0.9))] backdrop-blur-sm shadow-lg"
              />
            ))}
          </div>

          <div className="hidden md:block">
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
