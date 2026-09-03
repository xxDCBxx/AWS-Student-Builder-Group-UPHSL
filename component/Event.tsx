"use client"

import { useState } from "react"
import ArrowLeft from "@/component/UI/ArrowLeft"
import ArrowRight from "@/component/UI/ArrowRight"
import Image from "next/image"

const events = [
  {
    title: "Start From Zero with Kiro - An Introduction to Kiro",
    details: "Hands-On Workshop · AWS Student Builder Group UPHSL",
    description: [
      "Introduction to Kiro, an agentic development tool for AI-powered software development.",
      "Explore Kiro's features through live demonstrations and hands-on activities.",
      "Learn AI-assisted development and create simple applications using Kiro.",
      "Gain practical experience with specification-driven workflows.",
      "Discover future learning opportunities through the AWS Student Builder Group.",
    ],
    img: "/event-kiro.jpg",
  },
  {
    title: "Sui Workshop",
    details: "Hands-On Workshop · AWS Student Builder Group UPHSL",
    description: [
      "Core Focus: Introduction to Sui Layer-1 blockchain.",
      "Programming Language: Hands-on training in Move for smart contracts.",
      "Practical Sessions: Building decentralized apps (dApps) and exploring the ecosystem like Walrus.",
      "Target Audience: College and university students in computer science and IT.",
      "Full-day campus workshop teaching Sui blockchain architecture and the Move programming language for smart contract development.",
    ],
    img: "/event-sui.jpg",
  },
]

const Event = () => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(events.length - 1, c + 1))

  const event = events[current]

  return (
    <div id="events" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-8">
          Major Events &amp; Community Participation
        </h1>

        <div className="flex items-center gap-4">
          <div className="hidden md:block flex-shrink-0">
            <ArrowLeft onClick={prev} />
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* left: text */}
            <div className="space-y-4 order-2 lg:order-1">
              <h2 className="font-tektur tracking-widest text-xl sm:text-2xl font-bold text-white">
                {event.title}
              </h2>
              <p className="font-tektur text-xs text-white/60">{event.details}</p>
              <ul className="font-tektur text-sm text-white/90 space-y-2 list-disc list-inside">
                {event.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            {/* right: event photo */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg aura-maroon-img">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
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

        {/* page dots */}
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-purple-400 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Event
