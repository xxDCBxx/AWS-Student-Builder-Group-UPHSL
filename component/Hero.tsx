"use client";

import Button from "@/component/UI/Button";
import SlideShow from "@/component/Hero/SlideShow";
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter();

  return (
    <>
      {/* mobile spacer for fixed header */}
      <div className="flex h-[70px] md:hidden"/>
      <div className="md:min-h-[calc(100vh-70px)] md:max-h-[800px] mx-auto grid md:grid-cols-2 items-center gap-12 lg:gap-16 px-4 py-12 md:py-0 max-w-7xl w-full">
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

        {/* right: auto-advancing slideshow */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="w-full max-w-2xl text-right font-tektur text-lg sm:text-xl text-white">It&apos;s always day one!</h2>
          <div className="w-full max-w-2xl aura-maroon-img rounded-xl overflow-hidden">
            <SlideShow />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
