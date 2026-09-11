import PanelHeader from "./PanelHeader";

const SKILLS = [
  { label: "HTML / CSS"},
  { label: "JavaScript / TypeScript"},
  { label: "React / Next.js"},
  { label: "Tailwind CSS"},
  { label: "Python"},
  { label: "Bash / Cmd / PowerShell"},
  { label: "Linux / Windows Server"},
  { label: "Networking"},
  { label: "Cybersecurity / Web Pentesting"},
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
          </div>
        </div>
      ))}
    </div>
  );
}
