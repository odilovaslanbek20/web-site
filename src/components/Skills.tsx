import PanelHeader from "./PanelHeader";

const SKILLS = [
  { label: "HTML / CSS", value: 95 },
  { label: "JavaScript / TypeScript", value: 90 },
  { label: "React / Next.js", value: 85 },
  { label: "Tailwind CSS", value: 90 },
  { label: "Python", value: 75 },
  { label: "Linux / Windows Server", value: 80 },
  { label: "Networking", value: 75 },
  { label: "Cybersecurity / Pentesting", value: 80 },
];

export default function Skills() {
  return (
    <div className="panel">
      <PanelHeader
        title="SKILLS"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        }
      />
      {SKILLS.map((skill) => (
        <div key={skill.label} className="mb-[14px] last:mb-0">
          <div className="flex justify-between text-[11.5px] mb-[7px]">
            <span className="text-ink-dim">{skill.label}</span>
            <span className="text-ink font-semibold">{skill.value}%</span>
          </div>
          <div className="h-[7px] bg-border-soft rounded overflow-hidden">
            <div
              className="h-full rounded bg-gradient-to-r from-brand-greenDim to-brand-green shadow-[0_0_8px_rgba(57,255,106,0.3)]"
              style={{ width: `${skill.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
