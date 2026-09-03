"use client"

import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import Image from "next/image"

const Event = () => {
  const noop = () => {}

  return (
    <div id="events" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-8">
          Major Events &amp; Community Participation
        </h1>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ArrowLeft onClick={noop} />
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left: text */}
            <div className="space-y-4 order-2 lg:order-1">
              <h2 className="font-tektur tracking-widest text-2xl sm:text-3xl font-bold text-white">
                Start From Zero with Kiro - An Introduction to Kiro
              </h2>
              <p className="font-tektur text-sm text-white/70">
                Hands-On Workshop &nbsp;·&nbsp; AWS Student Builder Group UPHSL
              </p>
              <ul className="font-tektur text-sm text-white/90 space-y-2 list-disc list-inside">
                <li>Introduction to Kiro, an agentic development tool for AI-powered software development.</li>
                <li>Explore Kiro&apos;s features through live demonstrations and hands-on activities.</li>
                <li>Learn AI-assisted development and create simple applications using Kiro.</li>
                <li>Gain practical experience with specification-driven workflows.</li>
                <li>Discover future learning opportunities through the AWS Student Builder Group.</li>
              </ul>
            </div>

            {/* right: event photo */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg aura-maroon-img">
                <Image
                  src="/event-kiro.jpg"
                  alt="Start From Zero with Kiro - Event Documentation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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

export default Event
