const phases = [
  {
    phase: "Phase 1",
    title: "The MeoCoin Begins",
    status: "done",
    items: [
      "Token launch on Base",
      "Website & social media live",
      "Community Telegram & Discord",
      "1,000+ holders milestone",
    ],
  },
  {
    phase: "Phase 2",
    title: "Cat Army Assembles",
    status: "active",
    items: [
      "CoinGecko & CMC listing",
      "Meme contest with $MEO prizes",
      "Partnership with cat influencers",
      "Merch store launch",
    ],
  },
  {
    phase: "Phase 3",
    title: "To The Moon",
    status: "upcoming",
    items: [
      "CEX listing applications",
      "Meo NFT collection drop",
      "Charity donation to cat shelters",
      "Global meow flash mob event",
    ],
  },
  {
    phase: "Phase 4",
    title: "Galactic Cats",
    status: "upcoming",
    items: [
      "Meo metaverse experience",
      "Cross-chain bridge expansion",
      "Meo DAO governance launch",
      "First cat on Mars (probably)",
    ],
  },
];

const statusStyles = {
  done: {
    dot: "bg-meo-cyan",
    badge: "bg-meo-cyan/20 text-meo-cyan",
    label: "Completed",
  },
  active: {
    dot: "bg-meo-orange animate-pulse-glow",
    badge: "bg-meo-orange/20 text-meo-orange",
    label: "In Progress",
  },
  upcoming: {
    dot: "bg-zinc-600",
    badge: "bg-zinc-700/50 text-zinc-400",
    label: "Upcoming",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-meo-purple/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-meo-purple">
            Roadmap
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            The Meo Plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Our journey from a tiny kitten to the biggest cat coin in crypto.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-meo-cyan via-meo-orange to-zinc-700 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">
            {phases.map((phase, index) => {
              const style = statusStyles[phase.status as keyof typeof statusStyles];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={phase.phase}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden w-1/2 md:block" />

                  <div
                    className={`absolute left-4 top-8 hidden h-4 w-4 rounded-full border-4 border-[#0a0a0f] md:left-1/2 md:block md:-translate-x-1/2 ${style.dot}`}
                  />

                  <div
                    className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-white/20">
                      <div
                        className={`mb-3 flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}
                      >
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold ${style.badge}`}
                        >
                          {style.label}
                        </span>
                        <span className="text-sm font-medium text-zinc-500">
                          {phase.phase}
                        </span>
                      </div>
                      <h3 className="mb-4 text-xl font-bold text-white">
                        {phase.title}
                      </h3>
                      <ul
                        className={`space-y-2 ${isEven ? "md:items-end" : ""}`}
                      >
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2 text-sm text-zinc-400 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}
                          >
                            <span className="mt-0.5 text-meo-orange">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
