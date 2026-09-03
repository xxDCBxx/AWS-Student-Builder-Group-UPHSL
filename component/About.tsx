import Mission from "@/component/About/Mission"

const offerings = [
  "Hands-On Workshops",
  "Expert-Led Webinars",
  "Community Networking",
];

const About = () => {
  return (
    <div id="about" className="relative w-full px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[70px] overflow-hidden">
      {/* constellation decorations */}
      <div className="pointer-events-none absolute top-10 right-6 hidden md:block">
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
          <polyline points="20,40 70,20 120,60 180,30 200,90" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
          <circle className="animate-twinkle" cx="20" cy="40" r="2" fill="#fff" />
          <circle className="animate-twinkle" cx="70" cy="20" r="2.5" fill="#fff" />
          <circle className="animate-twinkle" cx="120" cy="60" r="2" fill="#fff" />
          <circle className="animate-twinkle" cx="180" cy="30" r="3" fill="#fff" />
          <circle className="animate-twinkle" cx="200" cy="90" r="2" fill="#fff" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-4 hidden md:block">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
          <polyline points="10,70 60,40 90,90 150,60 180,110" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
          <circle className="animate-twinkle" cx="10" cy="70" r="2" fill="#fff" />
          <circle className="animate-twinkle" cx="60" cy="40" r="3" fill="#fff" />
          <circle className="animate-twinkle" cx="90" cy="90" r="2" fill="#fff" />
          <circle className="animate-twinkle" cx="150" cy="60" r="2.5" fill="#fff" />
          <circle className="animate-twinkle" cx="180" cy="110" r="2" fill="#fff" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* left: heading + pill buttons */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white">What we offer</h1>
          <div className="flex flex-col gap-5 max-w-md">
            {offerings.map((label) => (
              <button
                key={label}
                className="pill-purple aura-maroon-btn font-tektur tracking-widest uppercase text-white rounded-full py-4 px-6 text-sm sm:text-base transition-transform duration-300 hover:scale-[1.02]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* right: MISSION / VISION tech frames */}
        <Mission />
      </div>
    </div>
  );
};

export default About;
