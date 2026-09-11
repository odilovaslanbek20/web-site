import PanelHeader from "./PanelHeader";

const LANGUAGES = [
  { name: "O'zbek tili", sub: "(Ona tili)", value: 100, dim: false },
];

export default function Languages() {
  return (
    <div className="panel">
      <PanelHeader
        title="LANGUAGES"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M3 5h12M9 3v2M5 5c0 5 4 7 6 9M13 5c0 6-5 8-9 10M14 21l4-9 4 9M16 18h4" />
          </svg>
        }
      />
      {LANGUAGES.map((lang, i) => (
        <div key={lang.name} className={i === LANGUAGES.length - 1 ? "" : "mb-6"}>
          <div className="text-[13px] font-bold text-ink mb-0.5">{lang.name}</div>
          <div className="text-[10px] text-ink-faint mb-[10px]">{lang.sub}</div>
          <div className="flex justify-between text-[11.5px] mb-[7px]">
            <span />
            <span className="text-ink font-semibold">{lang.value}%</span>
          </div>
          <div className="h-[7px] bg-border-soft rounded overflow-hidden">
            <div
              className={`h-full rounded ${
                lang.dim
                  ? "bg-gradient-to-r from-[#3a4048] to-[#4a525c]"
                  : "bg-gradient-to-r from-brand-greenDim to-brand-green shadow-[0_0_8px_rgba(57,255,106,0.3)]"
              }`}
              style={{ width: `${lang.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
