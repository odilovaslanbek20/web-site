"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/skills", label: "SKILLS" },
  { href: "/certificates", label: "CERTIFICATE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      let current = "home";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120) current = sec.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[100] bg-bg/85 backdrop-blur-md border-b border-border-soft">
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="flex items-center gap-2 text-[16px] font-bold tracking-[0.5px]"
        >
          <span className="text-brand-green font-bold">&gt;_</span> ASLANBEK
        </a>

        <nav
          className={`
    fixed top-16 left-0 right-0
    flex flex-col items-start gap-[18px]
    bg-bg border-b border-border-soft
    overflow-hidden
    transition-[max-height,padding] duration-300 ease-in-out
    z-[99]
    shadow-[0_12px_24px_rgba(0,0,0,0.5)]

    ${open ? "max-h-[420px] px-6 py-[18px] pb-6" : "max-h-0 px-6 py-0"}

    min-[850px]:static
    min-[850px]:flex
    min-[850px]:flex-row
    min-[850px]:items-center
    min-[850px]:gap-7
    min-[850px]:max-h-none
    min-[850px]:overflow-visible
    min-[850px]:bg-transparent
    min-[850px]:border-0
    min-[850px]:px-0
    min-[850px]:py-0
    min-[850px]:shadow-none

    text-[12.5px]
    tracking-[0.5px]
    text-ink-dim
  `}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`relative py-1 transition-colors hover:text-ink ${
                active === link.href.replace("#", "")
                  ? "text-brand-green after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-3 after:h-[2px] after:bg-brand-green after:shadow-glow"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]">
          <a
            target="_blank"
            href="/Resume.pdf"
            className="flex items-center gap-2 border border-brand-greenDim text-brand-green bg-brand-green/5 px-4 py-[9px] text-xs tracking-[0.5px] font-semibold rounded transition-all hover:bg-brand-green/10 hover:shadow-glow whitespace-nowrap"
          >
            <span className="hidden sm:inline">DOWNLOAD CV</span> ↓
          </a>
          <button
            aria-label="Menyuni ochish"
            onClick={() => setOpen((v) => !v)}
            className="min-[850px]:hidden flex flex-col gap-[5px] bg-transparent border-none p-[6px]"
          >
            <span className="w-[22px] h-[2px] bg-ink transition-all" />
            <span className="w-[22px] h-[2px] bg-ink transition-all" />
            <span className="w-[22px] h-[2px] bg-ink transition-all" />
          </button>
        </div>
      </div>
    </header>
  );
}
