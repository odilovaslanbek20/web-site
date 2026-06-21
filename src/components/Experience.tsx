import PanelHeader from "./PanelHeader";

const ACHIEVEMENTS = [
  "Turli mijozlar uchun frontend loyihalarini ishlab chiqdim.",
  "Startap loyihalarda jamoa bilan ishladim.",
  "Tizim va tarmoq administratorligi bo'yicha amaliy ko'nikmalarga ega bo'ldim.",
  "Pentesting sohasida mustaqil bilim va amaliyot orttirdim.",
];

export default function Experience() {
  return (
    <div className="panel">
      <PanelHeader
        title="EXPERIENCE"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        }
      />
      <div>
        <div className="flex items-center gap-2 text-[13px] font-bold text-ink">
          <span className="w-2 h-2 rounded-full bg-brand-green shadow-glow flex-shrink-0" />
          Frilanser / Startap loyihalari ishtirokchisi
        </div>
        <div className="text-[10.5px] text-ink-faint ml-4 mt-[6px] mb-[14px]">
          2023 - Hozirgi vaqtgacha
        </div>
        <ul className="ml-4 flex flex-col gap-[10px]">
          {ACHIEVEMENTS.map((item) => (
            <li key={item} className="text-xs text-ink-dim leading-[1.6] flex gap-2">
              <span className="text-brand-green flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
