const Title = () => {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 w-full px-4 sm:px-6 mb-4">
      <div className="flex gap-x-2 sm:gap-x-3 w-full items-center max-w-6xl">
        <div className="border border-[#ffa23f] flex-1"/>
        <h1 className="font-tektur text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:whitespace-nowrap">
          Upcoming <span className="text-[#ffa23f]">Events</span>
        </h1>  
        <div className="border border-[#ffa23f] flex-1"/>
      </div>
      <h2 className="font-tektur text-center max-w-[1000px] text-sm sm:text-base md:text-lg px-2 text-white/80">
        Join us for exciting events designed to enhance your AWS skills and connect with fellow cloud enthusiasts
      </h2>
    </div>
  )
}

export default Title