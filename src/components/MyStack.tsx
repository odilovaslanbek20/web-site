import { TbBrandPowershell } from "react-icons/tb";
import PanelHeader from "./PanelHeader";
import { SiGnubash } from "react-icons/si";

type StackItem = {
  label: string;
  bg: string;
  color: string;
  border?: boolean;
  content: React.ReactNode;
};

const STACK: StackItem[] = [
  { label: "HTML5", bg: "#e44d26", color: "#fff", content: "5" },
  { label: "CSS3", bg: "#264de4", color: "#fff", content: "3" },
  {
    label: "Tailwind",
    bg: "#0d1117",
    color: "#38bdf8",
    border: true,
    content: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.12-2.15-4.59-2.15Z" />
      </svg>
    ),
  },
  { label: "JavaScript", bg: "#f0db4f", color: "#000", content: "JS" },
  { label: "TypeScript", bg: "#3178c6", color: "#fff", content: "TS" },
  {
    label: "React",
    bg: "#0d1117",
    color: "#61dafb",
    border: true,
    content: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <circle cx="12" cy="12" r="2.2" />
        <g fill="none" stroke="currentColor" strokeWidth={1}>
          <ellipse rx="10" ry="4.2" cx="12" cy="12" />
          <ellipse
            rx="10"
            ry="4.2"
            cx="12"
            cy="12"
            transform="rotate(60 12 12)"
          />
          <ellipse
            rx="10"
            ry="4.2"
            cx="12"
            cy="12"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  { label: "Next.js", bg: "#000", color: "#fff", border: true, content: "N" },
  {
    label: "Python",
    bg: "#3776ab",
    color: "#ffd43b",
    content: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M11.9 1.5c-4.6 0-4.3 2-4.3 2v2.1h4.4v.6H5.6S2.5 6 2.5 11.9c0 5.9 2.7 5.6 2.7 5.6h1.6v-2.3s-.1-2.7 2.6-2.7h4.3s2.5 0 2.5-2.4V4.2s.4-2.7-4.3-2.7Zm-2.4 1.5c.4 0 .8.3.8.8 0 .4-.3.8-.8.8-.4 0-.8-.3-.8-.8 0-.4.4-.8.8-.8Z" />
        <path d="M12.1 22.5c4.6 0 4.3-2 4.3-2v-2.1h-4.4v-.6h6.4s3.1.3 3.1-5.6c0-5.9-2.7-5.6-2.7-5.6h-1.6v2.3s.1 2.7-2.6 2.7H10.3s-2.5 0-2.5 2.4v4s-.4 2.7 4.3 2.7Zm2.4-1.5c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8.4 0 .8.3.8.8 0 .4-.4.8-.8.8Z" />
      </svg>
    ),
  },
  {
    label: "Linux",
    bg: "#0d1117",
    color: "#fbc02d",
    border: true,
    content: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0c-1 2-2.5 3.2-2.5 5.5 0 1.4 1 2.5 1 2.5S9 9 9 11c0 1 .5 1.8.5 1.8S7 14 7 17c0 4 3.5 7 5 7s5-3 5-7c0-3-2.5-4.2-2.5-4.2s.5-.8.5-1.8c0-2-1.5-3-1.5-3s1-1.1 1-2.5C15 3.2 13 2 12 0Z" />
      </svg>
    ),
  },
  {
    label: "Windows",
    bg: "#00adef",
    color: "#fff",
    content: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M0 3.4 9.8 2v9.4H0V3.4ZM11 1.9 24 0v11.4H11V1.9ZM0 12.6h9.8V22L0 20.5v-7.9Zm11 0h13V24l-13-1.8V12.6Z" />
      </svg>
    ),
  },
  {
    label: "Bash",
    bg: "#0d1117",
    color: "#4caf50",
    border: true,
    content: <SiGnubash size={22} />,
  },
  {
    label: "PowerShell",
    bg: "#0d1117",
    color: "#2196f3",
    border: true,
    content: <TbBrandPowershell size={22}/>,
  },
];

export default function MyStack() {
  return (
    <div className="panel">
      <PanelHeader
        title="MY STACK"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
          </svg>
        }
      />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-[14px]">
        {STACK.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 px-1 py-3 border border-border-soft rounded-md bg-white/[0.012] transition-all hover:-translate-y-0.5 hover:border-brand-greenDim hover:shadow-[0_6px_18px_rgba(0,0,0,0.3)]"
          >
            <div
              className={`w-[34px] h-[34px] rounded-md flex items-center justify-center font-bold text-[13px] ${
                item.border ? "border border-border" : ""
              }`}
              style={{ background: item.bg, color: item.color }}
            >
              {item.content}
            </div>
            <span className="text-[10px] text-ink-dim text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
