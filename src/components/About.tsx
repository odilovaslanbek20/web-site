import PanelHeader from "./PanelHeader";

const STATS = [
  {
    num: "1+",
    label: "Yil tajriba",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    num: "10+",
    label: "Loyiha",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "100%",
    label: "Natijaga intilish",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="m20 6-11 11-5-5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="panel">
      <PanelHeader
        title="ABOUT ME"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        }
      />
      <p className="text-ink-dim text-[13px] leading-[1.9] mb-5">
        Men front-end ishlab chiquvchi, tizim va tarmoq administratori hamda kiberxavfsizlik
        (pentester) yo&apos;nalishida faoliyat yuritaman. Zamonaviy texnologiyalar yordamida
        foydali va xavfsiz tizimlar yaratishga intilaman.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-[10px] border border-border-soft rounded-md px-[10px] py-3 bg-white/[0.015]"
          >
            <span className="text-brand-green flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4">{s.icon}</span>
            <div>
              <div className="text-sm font-bold text-ink leading-tight">{s.num}</div>
              <div className="text-[9.5px] text-ink-faint tracking-[0.2px]">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
