const Mission = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* MISSION */}
      <div className="flex flex-col items-center">
        <h2 className="font-tektur tracking-widest text-white text-lg sm:text-xl mb-3">MISSION</h2>
        <div className="relative w-full">
          <div
            className="tech-frame bg-black/40 backdrop-blur-sm p-6 text-center"
            style={{ clipPath: "polygon(4% 0, 96% 0, 100% 25%, 100% 100%, 4% 100%, 0 75%, 0 0)" }}
          >
            <p className="font-tektur text-[10px] sm:text-xs leading-relaxed text-white/90">
              &quot;Our mission is to foster a friendly and collaborative environment where individuals interested in technology, especially AWS and cloud computing, can connect, learn, and grow. We aim to support members in developing their cloud skills, building meaningful connections, and exploring innovative solutions in the tech industry.&quot;
            </p>
          </div>
          {/* circuit connector */}
          <svg className="absolute -bottom-6 -left-6 hidden sm:block" width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M10,30 L40,30 L55,15 L115,15" stroke="#c026d3" strokeWidth="1.5" fill="none" />
            <circle cx="10" cy="30" r="4" fill="none" stroke="#c026d3" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* VISION */}
      <div className="flex flex-col items-center">
        <h2 className="font-tektur tracking-widest text-white text-lg sm:text-xl mb-3">VISION</h2>
        <div className="relative w-full">
          <div
            className="tech-frame bg-black/40 backdrop-blur-sm p-6 text-center"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 70%)" }}
          >
            <p className="font-tektur text-[10px] sm:text-xs leading-relaxed text-white/90">
              &quot;To create a supportive space at the University of Perpetual Help System Laguna, where students and tech enthusiasts can come together to explore, learn, and share emerging technologies, with a focus on AWS and cloud computing.&quot;
            </p>
          </div>
          {/* circuit connector */}
          <svg className="absolute -bottom-6 -right-6 hidden sm:block" width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M110,30 L80,30 L65,15 L5,15" stroke="#c026d3" strokeWidth="1.5" fill="none" />
            <circle cx="110" cy="30" r="4" fill="none" stroke="#c026d3" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Mission
