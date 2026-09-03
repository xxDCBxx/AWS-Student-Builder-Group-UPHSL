"use client";

import Button from "@/component/UI/Button";
import Image from "next/image";
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex h-[70px] md:hidden"/>
      <div className='md:h-screen md:max-h-[600px] mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-16 px-4 py-8 md:py-0 max-w-7xl'>
        <main className='flex flex-col text-white gap-4 md:gap-6'>
          <h1 className='font-tektur text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight'>
            AWS STUDENT<br/>BUILDER GROUP
          </h1>
          <h2 className='font-tektur text-sm sm:text-base tracking-wide text-white/90'>University of Perpetual Help System Laguna - Biñan</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button variant="purple" className="pill-purple aura-maroon-btn font-tektur tracking-widest w-full sm:w-[240px] py-3" onClick={() => router.push("/membership")}>JOIN OUR COMMUNITY</Button>
            <Button variant="purple" className="pill-purple aura-maroon-btn font-tektur tracking-widest w-full sm:w-[160px] py-3" onClick={() => router.push("/verify")}>VERIFY</Button>
          </div>
        </main>

        {/* right: "It's always day one!" + sky/cloud panel */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="w-full max-w-2xl text-right font-tektur text-lg sm:text-xl text-white">It&apos;s always day one!</h2>
          <div className="relative w-full max-w-2xl aspect-[16/11] overflow-hidden rounded-xl aura-maroon-img">
            <Image
              src="/workshop.jpg"
              alt="AWS Student Builder Group Workshop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
