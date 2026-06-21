"use client";

import { FormEvent, useState } from "react";
import PanelHeader from "./PanelHeader";

const CONTACT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    content: <span>Toshkent shahar, Uzbekistan</span>,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
    content: (
      <a href="mailto:aslanbekodilov524@gmail.com" className="hover:text-brand-green transition-colors">
        aslanbekodilov524@gmail.com
      </a>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    content: (
      <a href="tel:+998950689767" className="hover:text-brand-green transition-colors">
        +998 95 068 97 67
      </a>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.17v3.21c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
    content: (
      <a
        href="https://github.com/odilovaslanbek20"
        target="_blank"
        rel="noopener"
        className="hover:text-brand-green transition-colors"
      >
        github.com/odilovaslanbek20
      </a>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static demo: no backend wired up yet. Swap this for a real submit
    // handler (API route, email service, etc.) when ready.
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 2200);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_0.9fr] gap-5 mt-10" id="contact">
      <div className="panel">
        <PanelHeader
          title="CONTACT ME"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
          }
        />
        <div className="flex flex-col gap-[18px] mt-1.5">
          {CONTACT_ITEMS.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-[11.5px] text-ink-dim">
              <span className="text-brand-green flex-shrink-0 mt-px [&>svg]:w-[15px] [&>svg]:h-[15px]">
                {item.icon}
              </span>
              {item.content}
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-white/[0.02] border border-border-soft rounded px-[14px] py-3 text-ink text-xs mb-3 placeholder:text-ink-faint focus:outline-none focus:border-brand-greenDim transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/[0.02] border border-border-soft rounded px-[14px] py-3 text-ink text-xs mb-3 placeholder:text-ink-faint focus:outline-none focus:border-brand-greenDim transition-colors"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            className="w-full bg-white/[0.02] border border-border-soft rounded px-[14px] py-3 text-ink text-xs mb-3 placeholder:text-ink-faint focus:outline-none focus:border-brand-greenDim transition-colors resize-y min-h-[96px]"
          />
          <button
            type="submit"
            className="w-full bg-brand-green text-[#04130a] border-none rounded px-[13px] py-[13px] text-xs font-bold tracking-[0.6px] flex items-center justify-center gap-2 transition-all hover:shadow-glowLg"
          >
            {sent ? "YUBORILDI ✓" : (
              <>
                SEND MESSAGE
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m2 21 21-9L2 3v7l15 2-15 2v7Z" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      <div className="panel flex flex-col justify-center items-start gap-[14px]">
        <h3 className="font-display text-[18px] tracking-[0.5px] uppercase font-bold">
          LET&apos;S WORK TOGETHER
        </h3>
        <p className="text-xs text-ink-dim leading-[1.7]">
          Yangi loyihalar va qiziqarli g&apos;oyalar ustida ishlashga tayyorman!
        </p>
        <div className="text-[34px] text-brand-green font-bold tracking-[2px] [text-shadow:0_0_18px_var(--green-glow)]">
          &lt;/&gt;
        </div>
      </div>
    </div>
  );
}
