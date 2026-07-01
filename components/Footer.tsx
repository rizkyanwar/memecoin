const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/meocoin_?s=11", icon: "𝕏" },
  { label: "Telegram", href: "#", icon: "✈️" },
  { label: "Discord", href: "#", icon: "💬" },
  { label: "DexScreener", href: "#", icon: "📊" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06060a]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold">
              <span className="text-2xl">🐱</span>
              <span className="bg-gradient-to-r from-meo-orange via-meo-pink to-meo-purple bg-clip-text text-transparent">
                Meo
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              The purrfect memecoin for cat lovers and degens alike. Not
              financial advice — just meo.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Tokenomics", href: "#tokenomics" },
                { label: "Roadmap", href: "#roadmap" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Community
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition-colors hover:border-meo-orange/50 hover:bg-meo-orange/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Meo ($MEO). All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            $MEO is a memecoin with no intrinsic value. DYOR. NFA. 🐾
          </p>
        </div>
      </div>
    </footer>
  );
}
