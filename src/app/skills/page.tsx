import Contact from "@/components/Contact";
import MyStack from "@/components/MyStack";
import PanelHeader from "@/components/PanelHeader";
import Skills from "@/components/Skills";

const TOOLS = [
  {
    label: "Kali Linux",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="34"
        height="34"
        fill="none"
        stroke="#3b82f6"
        strokeWidth={1.5}
      >
        <path d="M3 12c4-6 14-6 18 0M3 12c4 6 14 6 18 0" />
        <circle cx="12" cy="12" r="2" fill="#3b82f6" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Burp Suite",
    bg: "#ff5722",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
        <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6Z" />
      </svg>
    ),
  },
  {
    label: "Hydra",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="none"
        stroke="#22c55e"
        strokeWidth={1.6}
      >
        <path d="M9 4c-3 0-5 2-5 5 0 2 1 3 1 3s-2 1-2 4c0 2 2 4 4 4M15 4c3 0 5 2 5 5 0 2-1 3-1 3s2 1 2 4c0 2-2 4-4 4M9 4c1 1 1 3 1 4M15 4c-1 1-1 3-1 4M10 12h4M9 20c0-2 1-3 3-3s3 1 3 3" />
      </svg>
    ),
  },
  {
    label: "Nmap",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth={1.6}
      >
        <path d="M2 12c2.5-5 7-8 10-8s7.5 3 10 8c-2.5 5-7 8-10 8s-7.5-3-10-8Z" />
        <circle cx="12" cy="12" r="3" fill="#0ea5e9" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Metasploit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#3b5bdb"
        strokeWidth={1.6}
      >
        <path
          d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z"
          fill="#3b5bdb"
          fillOpacity={0.15}
        />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Wireshark",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth={1.6}
      >
        <path d="M2 14c3-5 6-7 10-7s7 2 10 7c-1.5 1-3 1.5-4.5 1.5M5 17c2-2 4-3 7-3 2 0 3.5.5 5 1.5" />
      </svg>
    ),
  },
  {
    label: "SQLMap",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#dc2626"
        strokeWidth={1.6}
      >
        <path d="M12 2v8M9 6l3-4 3 4M7 14c0 4 2 7 5 8 3-1 5-4 5-8 0-2-2-3-5-3s-5 1-5 3Z" />
      </svg>
    ),
  },
  {
    label: "John the Ripper",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth={1.6}
      >
        <path d="M9 3h6l1 4-4 2-4-2 1-4ZM7 9c-2 3-2 7 0 10M17 9c2 3 2 7 0 10M9 19h6M10 13h4" />
      </svg>
    ),
  },
  {
    label: "Hashcat",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="none"
        stroke="#94a3b8"
        strokeWidth={1.6}
      >
        <path d="M7 2h10M7 22h10M8 2c0 5 2 6 4 7 2-1 4-2 4-7M8 22c0-5 2-6 4-7 2 1 4 2 4 7" />
      </svg>
    ),
  },
  {
    label: "FFUF",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#84cc16"
        strokeWidth={1.6}
      >
        <path d="M4 6h16M4 12h10M4 18h6" />
      </svg>
    ),
  },
  {
    label: "Gobuster",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.6}
      >
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    label: "Feroxbuster",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#ef4444"
        strokeWidth={1.6}
      >
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    label: "OWASP ZAP",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#3b82f6"
        strokeWidth={1.6}
      >
        <path d="M13 2 3 14h7l-1 8 12-14h-8l1-6Z" />
      </svg>
    ),
  },
  {
    label: "EyeWitness",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#06b6d4"
        strokeWidth={1.6}
      >
        <path d="M2 12c2.5-5 7-8 10-8s7.5 3 10 8c-2.5 5-7 8-10 8s-7.5-3-10-8Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Postman",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#f97316"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="8" />
        <path d="m12 12 5-5" />
      </svg>
    ),
  },
  {
    label: "Docker",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth={1.6}
      >
        <path d="M4 15h14a4 4 0 0 0 2-1" />
        <path d="M6 15V8h3v3h3V8h3v3h3" />
      </svg>
    ),
  },
  {
    label: "Git",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#f97316"
        strokeWidth={1.6}
      >
        <path d="M12 3 3 12l9 9 9-9-9-9Z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "WPScan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="#2563eb"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
  },
  {
    label: "Nuclei",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    label: "Amass",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#22c55e"
        strokeWidth={1.6}
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M5 12a7 7 0 0 1 14 0M7 7a10 10 0 0 1 10 0" />
      </svg>
    ),
  },
  {
    label: "NetExec",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="#e11d48"
        strokeWidth={1.6}
      >
        <path d="M4 6h16v12H4z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
];

export default function PentesterTools() {
  return (
    <section className="max-w-[1240px] mx-auto px-[20px]" id="tools">
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 my-10 items-stretch"
        id="skills"
      >
        <Skills />
        <MyStack />
      </div>
      <div className="panel mt-6">
        <PanelHeader
          title="PENTESTER TOOLS"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z" />
            </svg>
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-[14px]">
          {TOOLS.map((tool) => (
            <div
              key={tool.label}
              className="flex flex-col items-center gap-[10px] px-1 py-[14px] border border-border-soft rounded-md bg-white/[0.012] transition-all hover:-translate-y-0.5 hover:border-brand-greenDim"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: tool.bg ?? "transparent" }}
              >
                {tool.icon}
              </div>
              <span className="text-[9.5px] text-ink-dim text-center">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
}
