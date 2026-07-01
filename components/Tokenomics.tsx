const allocations = [
  {
    label: "Community & Airdrop",
    percent: 50,
    color: "from-meo-orange to-meo-pink",
    description: "Rewards for early believers and loyal holders",
  },
  {
    label: "Liquidity Pool",
    percent: 30,
    color: "from-meo-purple to-meo-pink",
    description: "Locked forever — LP tokens burned on launch",
  },
  {
    label: "Marketing",
    percent: 15,
    color: "from-meo-cyan to-meo-purple",
    description: "Memes, influencers, and cat-themed campaigns",
  },
  {
    label: "Team",
    percent: 5,
    color: "from-zinc-500 to-zinc-400",
    description: "Vested over 6 months — we eat last",
  },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-meo-orange">
            Tokenomics
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Fair &amp; Transparent
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            1 billion $MEO tokens. No hidden wallets, no sneaky taxes. Just
            honest cat economics.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
            <div
              className="absolute inset-2 rounded-full"
              style={{
                background: `conic-gradient(
                  #ff6b35 0deg 180deg,
                  #9d4edd 180deg 288deg,
                  #00f5ff 288deg 342deg,
                  #71717a 342deg 360deg
                )`,
              }}
            />
            <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full bg-[#0a0a0f]">
              <span className="text-4xl">🐱</span>
              <span className="mt-1 text-2xl font-bold text-white">1B</span>
              <span className="text-sm text-zinc-500">$MEO</span>
            </div>
          </div>

          <div className="space-y-5">
            {allocations.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <span
                    className={`rounded-full bg-gradient-to-r ${item.color} px-3 py-0.5 text-sm font-bold text-white`}
                  >
                    {item.percent}%
                  </span>
                </div>
                <p className="text-sm text-zinc-500">{item.description}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🔥",
              title: "LP Burned",
              desc: "Liquidity pool tokens sent to the void",
            },
            {
              icon: "🚫",
              title: "Zero Tax",
              desc: "Buy and sell without hidden fees",
            },
            {
              icon: "🔒",
              title: "Renounced",
              desc: "Contract ownership renounced at launch",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-3 font-bold text-white">{feature.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
