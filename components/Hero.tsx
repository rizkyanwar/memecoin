export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-34"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-meo-purple/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-meo-orange/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-meo-pink/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="animate-float mb-8 inline-block text-8xl md:text-9xl">
          🐱
        </div>

        <p className="mb-4 inline-block rounded-full border border-meo-cyan/30 bg-meo-cyan/10 px-4 py-1.5 text-sm font-medium text-meo-cyan">
          $MEO — The Purrfect Memecoin
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-meo-orange via-meo-pink to-meo-purple bg-clip-text text-transparent">
            Meo Your Way
          </span>
          <br />
          <span className="text-white">To The Moon</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Meo is the cutest cat on the blockchain. No utility, no roadmap
          promises we can&apos;t keep — just pure vibes, community, and
          infinite meows. Join the cat army today.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="w-full rounded-full bg-gradient-to-r from-meo-orange to-meo-pink px-8 py-4 text-lg font-bold text-white shadow-xl shadow-meo-orange/30 transition-transform hover:scale-105 sm:w-auto"
          >
            Buy $MEO
          </a>
          <a
            href="#tokenomics"
            className="w-full rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
          >
            View Tokenomics
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { label: "Total Supply", value: "1B" },
            { label: "Tax", value: "0%" },
            { label: "Liquidity", value: "Burned" },
            { label: "Community", value: "100%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <p className="text-2xl font-bold text-meo-orange md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
