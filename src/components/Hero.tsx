export default function Hero() {
  return (
    <section className="pt-14 pb-10" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: intro */}
        <div className="relative py-2">
          <span
            aria-hidden
            className="binary-strip hidden md:block"
          >
            {"01001 10110 01101\n11010 00101 11001\n01100 10011 01010"}
          </span>

          <h1 className="font-display text-[28px] sm:text-[34px] md:text-[42px] lg:text-[54px] leading-[1.05] font-bold tracking-[1px] uppercase flex items-start flex-wrap gap-x-4">
            ODILOV
            <br />
            ASLANBEK
            <span className="inline-block w-[14px] h-[14px] bg-brand-green shadow-glow ml-[10px] translate-y-2 flex-shrink-0" />
          </h1>

          <p className="mt-[18px] text-brand-green text-[15px] font-medium tracking-[0.3px] leading-[1.6]">
            Front-end Developer | Tizim va Tarmoq
            <br />
            Administratori | Pentester
          </p>

          <p className="mt-[18px] text-ink-dim text-[13.5px] leading-[1.9] max-w-[480px]">
            <span className="text-brand-green mr-[6px]">&gt;</span>
            Kod yozaman. Tarmoqlarni boshqaraman.
            <br />
            Xavfsizlikni sinovdan o&apos;tkazaman.
            <br />
            Yangi g&apos;oyalarni amaliyotga aylantiraman.
          </p>

          <div className="flex gap-[14px] mt-[26px] flex-wrap">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-[26px] py-[13px] text-[12.5px] font-bold tracking-[0.8px] rounded bg-brand-green text-[#04130a] transition-all hover:shadow-glowLg hover:-translate-y-px"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-[26px] py-[13px] text-[12.5px] font-bold tracking-[0.8px] rounded border border-border bg-white/[0.02] transition-all hover:border-ink-dim hover:bg-white/[0.05]"
            >
              CONTACT ME
            </a>
          </div>

          <div className="flex gap-[14px] mt-[30px]">
            <SocialIcon href="https://github.com/odilovaslanbek20" label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.17v3.21c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://t.me/odilovaslanbek" label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m21.94 4.6-3.18 15.02c-.24 1.07-.87 1.33-1.76.83l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.97.48l.35-4.94 8.99-8.13c.39-.35-.08-.54-.61-.19L6.4 12.84l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55L20.6 3.27c.88-.32 1.65.21 1.34 1.33Z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="mailto:aslanbekodilov524@gmail.com" label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Right: visual scene */}
        <div className="order-first md:order-last relative rounded-lg overflow-hidden border border-border min-h-[280px] md:min-h-[340px] bg-[radial-gradient(ellipse_at_60%_30%,rgba(57,255,106,0.10),transparent_60%),linear-gradient(160deg,#0a1410_0%,#050a12_55%,#06080d_100%)]">
          <div className="absolute inset-0">
            <div className="monitor" style={{ top: "10%", left: "6%", width: "30%", height: "34%" }} />
            <div className="monitor" style={{ top: "8%", right: "6%", width: "30%", height: "34%" }} />
            <div className="monitor" style={{ top: "6%", left: "36%", width: "28%", height: "30%" }} />

            {/* Rasm shu yerda — hero-figure ichida background-image sifatida CSS'da ulanadi */}
            <div className="hero-figure" />

            <div className="absolute right-[5%] bottom-[6%] w-[80%] sm:w-[58%] bg-[#05090780] border border-brand-greenDim rounded-md px-4 py-[14px] text-[11px] leading-[1.85] backdrop-blur-sm shadow-[0_0_28px_rgba(0,0,0,0.5)]">
              <div className="text-brand-green font-bold mb-1">&gt; whoami</div>
              <div className="text-ink-dim">
                Name: <b className="text-ink font-medium">Odilov Aslanbek</b>
              </div>
              <div className="text-ink-dim">
                Role: <b className="text-ink font-medium">Developer | Admin | Pentester</b>
              </div>
              <div className="text-ink-dim">
                Location: <b className="text-ink font-medium">Toshkent, Uzbekistan</b>
              </div>
              <div className="text-ink-dim">
                Status: <span className="text-brand-green">Available for work</span>
              </div>
              <div className="text-ink-dim">
                &gt; _<span className="cursor-blink animate-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
      aria-label={label}
      className="w-[38px] h-[38px] flex items-center justify-center border border-border rounded-md text-ink-dim transition-all hover:text-brand-green hover:border-brand-greenDim hover:shadow-glow hover:-translate-y-0.5 [&>svg]:w-[17px] [&>svg]:h-[17px]"
    >
      {children}
    </a>
  );
}
