const cards = [
  {
    title: "Hands-On Workshops",
    description: "Practical, interactive sessions to help you build real-world AWS skills.",
  },
  {
    title: "Expert-Led Webinars",
    description: "Learn from industry professionals with deep AWS experience.",
  },
  {
    title: "Community Networking",
    description: "Connect, collaborate, and grow with other cloud enthusiasts.",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="w-full flex flex-col text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-tektur text-3xl sm:text-4xl font-medium tracking-wide mb-2">What We Offer</h2>
        <p className="font-tektur text-sm sm:text-base mb-8 text-white/80">
          A mix of educational programs and community-driven activities designed to help you excel in AWS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 min-h-[220px] aura-maroon tech-frame bg-gradient-to-b from-[#c026d3]/25 via-[#7a1f8e]/20 to-[#3a0f4d]/10 backdrop-blur-sm"
            >
              <h3 className="font-tektur font-bold tracking-wide text-lg mb-4">{card.title}</h3>
              <p className="font-tektur text-sm sm:text-base text-white/85 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
