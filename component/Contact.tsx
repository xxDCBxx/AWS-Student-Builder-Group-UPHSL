const cards = [0, 1, 2];

const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col text-white px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[70px]">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-medium">TEXT</h1>
        <p className="font-tektur text-sm mt-2 mb-8">descrip</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((i) => (
            <div
              key={i}
              className="rounded-2xl p-6 min-h-[220px] aura-maroon tech-frame bg-gradient-to-b from-[#c026d3]/25 via-[#7a1f8e]/20 to-[#3a0f4d]/10 backdrop-blur-sm"
            >
              <h2 className="font-tektur font-bold tracking-widest text-lg mb-6">TEXT</h2>
              <ul className="font-tektur text-sm list-disc list-inside">
                <li>text</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
