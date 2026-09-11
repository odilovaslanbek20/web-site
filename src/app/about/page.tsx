import Image from "next/image";
import PanelHeader from "@/components/PanelHeader";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const STATS = [
  {
    num: "1+",
    label: "Yil tajriba",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    num: "10+",
    label: "Loyiha",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="m20 6-11 11-5-5" />
      </svg>
    ),
  },
];

const FOCUS = [
  "Web Pentesting",
  "API Security",
  "Linux Administration",
  "Network Security",
  "Frontend Development",
  "System Hardening",
];

const FACTS = [
  "📍 Toshkent, O'zbekiston",
  "🎯 Web Pentester",
  "💻 Kali Linux User",
  "🌐 Uzbek",
  "🐧 Linux Enthusiast",
  "🚀 Continuous Learning",
];

export default function AboutPage() {
  return (
    <div className="max-w-[1240px] mx-auto px-[20px] py-[30px]">
      <div className="panel">
        <PanelHeader
          title="ABOUT ME"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          }
        />

        <div className="grid md:grid-cols-[220px_1fr] gap-6 mb-6">
          <div className="flex justify-center">
            <div className="border border-border-soft rounded-xl p-2 bg-white/[0.015] h-[220px]">
              <Image
                src="/myphoto.png"
                alt="Odilov Aslanbek"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[26px] font-bold text-ink mb-2">
              Odilov Aslanbek
            </h2>

            <p className="text-brand-green text-sm mb-4">
              Web Pentester • Frontend Developer • System Administrator
            </p>

            <p className="text-ink-dim text-[13px] leading-[1.9]">
              Men kiberxavfsizlik va web texnologiyalari yo'nalishida faoliyat
              yuritaman. Asosiy e'tiborim web ilovalar xavfsizligini tahlil
              qilish, zaifliklarni aniqlash hamda xavfsiz va ishonchli tizimlar
              yaratishga qaratilgan. Frontend dasturlash va tizim
              administratsiyasi bo'yicha bilimlarim xavfsizlikka texnik va
              amaliy nuqtai nazardan yondashishimga yordam beradi.
            </p>

            <p className="text-ink-dim text-[13px] leading-[1.9] mt-3">
              Hozirda web application security, API security, penetration
              testing, Linux tizimlari va tarmoq infratuzilmasi bo'yicha amaliy
              tajriba orttirib bormoqdaman. Turli laboratoriyalar, CTF
              platformalari va real loyihalar orqali o'z ko'nikmalarimni
              rivojlantirib, zamonaviy xavfsizlik muammolarini o'rganishga
              intilaman.
            </p>

            <p className="text-ink-dim text-[13px] leading-[1.9] mt-3">
              Maqsadim xalqaro darajadagi kiberxavfsizlik mutaxassisi sifatida
              rivojlanish, murakkab xavfsizlik loyihalarida ishtirok etish va
              tashkilotlarga o'z tizimlarini yanada xavfsiz qilishda yordam
              berishdir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-[10px] border border-border-soft rounded-md px-[10px] py-3 bg-white/[0.015]"
            >
              <span className="text-brand-green flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                {s.icon}
              </span>

              <div>
                <div className="text-sm font-bold text-ink leading-tight">
                  {s.num}
                </div>

                <div className="text-[9.5px] text-ink-faint tracking-[0.2px]">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-xs text-ink mb-3 tracking-wider">FOCUS AREAS</h3>

          <div className="flex flex-wrap gap-2">
            {FOCUS.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-md border border-border-soft text-[11px] text-ink-dim bg-white/[0.015]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs text-ink mb-3 tracking-wider">QUICK FACTS</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {FACTS.map((fact) => (
              <div
                key={fact}
                className="border border-border-soft rounded-md px-3 py-2 text-[12px] text-ink-dim bg-white/[0.015]"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10"
        id="experience"
      >
        <Experience />
        <Education />
      </div>
      <Contact />
    </div>
  );
}
