import PanelHeader from "./PanelHeader";

const BINARY_LINES = [
  "01001 11010 00101 11001 10110 01101",
  "10110 01100 10011 01010 11010 00101",
  "00101 11001 10110 01101 01001 11010",
  "11010 01100 10011 01010 01001 11010",
  "10110 01101 01001 11010 00101 11001",
  "01100 10011 01010 10110 01100 10011",
];

export default function Education() {
  return (
    <div className="panel">
      <PanelHeader
        title="EDUCATION"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
          </svg>
        }
      />

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-ink">
            <span className="w-2 h-2 rounded-full bg-brand-green shadow-glow flex-shrink-0" />
            Najot Ta&apos;lim — Frontend Dasturlash
          </div>
          <div className="text-[10.5px] text-ink-faint mt-[6px]">
            Frontend Development kursini muvaffaqiyatli tamomlagan
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-[13px] font-bold text-ink">
            <span className="w-2 h-2 rounded-full bg-brand-green shadow-glow flex-shrink-0" />
            HAAD TC — Kiberxavfsizlik
          </div>
          <div className="text-[10.5px] text-ink-faint mt-[6px]">
            Red Hat Security RED-0 kursini muvafaqiyatli tamomlagan.
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="mt-5 text-[9px] leading-[1.5] whitespace-pre text-brand-green/[0.18] overflow-hidden select-none"
      >
        {BINARY_LINES.join("\n")}
      </div>
    </div>
  );
}