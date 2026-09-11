import Contact from "@/components/Contact";
import CyberThumb from "@/components/CyberThumb";
import PanelHeader from "@/components/PanelHeader";

type Project = {
  title: string;
  description: string;
  tag: string;
  linkLabel: string;
  thumbBg: string;
  thumb: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    title: "EcoBazar",
    description:
      "Onlayn bozor veb-sayti. Zamonaviy dizayn va to'liq responsive elektron savdo platformasi.",
    tag: "Next.js",
    linkLabel: "View Project →",
    thumbBg: "linear-gradient(135deg,#0d1f14,#081209)",
    thumb: (
      <svg
        viewBox="0 0 400 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="200" fill="#0a1510" />
        <circle cx="80" cy="60" r="46" fill="#16a34a" opacity={0.18} />
        <circle cx="330" cy="150" r="60" fill="#22c55e" opacity={0.12} />
        <g
          transform="translate(150,55)"
          fill="none"
          stroke="#39ff6a"
          strokeWidth={2.2}
          opacity={0.85}
        >
          <path d="M40 70 L40 40 Q40 20 60 20 Q80 20 80 40 L80 70" />
          <circle cx="40" cy="78" r="8" />
          <circle cx="80" cy="78" r="8" />
          <path d="M20 40 L100 40 L92 70 L28 70 Z" />
        </g>
        <text
          x="200"
          y="160"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fill="#39ff6a"
          opacity={0.8}
        >
          ECOBAZAR.UZ
        </text>
      </svg>
    ),
  },
  {
    title: "BookShop",
    description:
      "Onlayn kitob do'koni. Kategoriyalar, savatcha va to'lov tizimi bilan.",
    tag: "Next.js",
    linkLabel: "View Project →",
    thumbBg: "linear-gradient(135deg,#0d1418,#08100f)",
    thumb: (
      <svg
        viewBox="0 0 400 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="400" height="200" fill="#0a1213" />
        <circle cx="320" cy="50" r="50" fill="#0ea5e9" opacity={0.14} />
        <g
          transform="translate(150,50)"
          fill="none"
          stroke="#39ff6a"
          strokeWidth={2.2}
          opacity={0.85}
        >
          <rect x="0" y="0" width="55" height="70" rx="2" />
          <rect x="20" y="14" width="55" height="70" rx="2" fill="#0a1213" />
          <line x1="28" y1="28" x2="65" y2="28" />
          <line x1="28" y1="40" x2="65" y2="40" />
          <line x1="28" y1="52" x2="55" y2="52" />
        </g>
        <text
          x="200"
          y="160"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="13"
          fill="#39ff6a"
          opacity={0.8}
        >
          BOOKSHOP.UZ
        </text>
      </svg>
    ),
  },
  {
  title: "NoName",
  description:
    "OffSec laboratoriyasida zaifliklarni aniqlab, tizimga chuqur kirish va ekspluatatsiya jarayonlarini muvaffaqiyatli amalga oshirdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="NoName" />,
},
{
  title: "CyberSploit1",
  description:
    "OffSec laboratoriyasida xavfsizlik zaifliklarini tahlil qilib, tizim ustidan yuqori darajadagi nazoratga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="CyberSploit1" />,
},
{
  title: "Reflection",
  description:
    "DockerLabs muhitida web ekspluatatsiya va privilege escalation bosqichlarini muvaffaqiyatli yakunladim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Reflection" />,
},
{
  title: "Injection",
  description:
    "DockerLabs mashinasida injeksiya zaifliklaridan foydalanib tizimga kirish va eskalatsiya jarayonlarini bajardim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Injection" />,
},
{
  title: "ApiBase",
  description:
    "API xavfsizligi zaifliklarini aniqlab, DockerLabs muhitida tizimga muvaffaqiyatli kirish huquqiga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="ApiBase" />,
},
{
  title: "EXEC",
  description:
    "VulNyx laboratoriyasida command execution zaifliklaridan foydalanib tizimni ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="EXEC" />,
},
{
  title: "Diff3r3ntS3c",
  description:
    "VulNyx muhitida turli zaifliklarni zanjirlab tizim ustidan nazoratni qo'lga kiritdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Diff3r3ntS3c" />,
},
{
  title: "ShowTime",
  description:
    "DockerLabs laboratoriyasida web enumeratsiya va ekspluatatsiya bosqichlarini muvaffaqiyatli yakunladim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="ShowTime" />,
},
{
  title: "Walking Dead",
  description:
    "DockerLabs muhitida tizimdagi zaifliklarni aniqlab, administrator darajasigacha kirish huquqiga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Walking Dead" />,
},
{
  title: "Redirection",
  description:
    "DockerLabs laboratoriyasida yo'naltirish va web xavfsizlik muammolarini ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Redirection" />,
},
{
  title: "Grooti",
  description:
    "DockerLabs mashinasida tizim konfiguratsiyasidagi zaifliklardan foydalanib yuqori huquqlarga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Grooti" />,
},
{
  title: "Inj3ct0rss",
  description:
    "DockerLabs muhitida injeksiya zaifliklarini tahlil qilib tizimni muvaffaqiyatli ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Inj3ct0rss" />,
},
{
  title: "Internal",
  description:
    "DockerLabs laboratoriyasida ichki xizmatlar va noto'g'ri konfiguratsiyalar orqali tizimga kirishga muvaffaq bo'ldim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Internal" />,
},
{
  title: "Zone",
  description:
    "VulNyx laboratoriyasida web va tizim zaifliklarini aniqlab, to'liq ekspluatatsiya zanjirini amalga oshirdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Zone" />,
},
{
  title: "PingCTF",
  description:
    "DockerLabs CTF muhitida tarmoq va web zaifliklarini ekspluatatsiya qilib tizimni egalladim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="PingCTF" />,
},
{
  title: "Waffy",
  description:
    "DockerLabs laboratoriyasida web ilova xavfsizligini tahlil qilib, tizim ustidan nazoratga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Waffy" />,
},
{
  title: "AnonymousPingu",
  description:
    "DockerLabs muhitida enumeratsiya va ekspluatatsiya bosqichlari orqali root darajasigacha yetib bordim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="AnonymousPingu" />,
},
{
  title: "File",
  description:
    "DockerLabs mashinasida fayllar bilan bog'liq zaifliklardan foydalanib tizimga kirishga muvaffaq bo'ldim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="File" />,
},
{
  title: "Deploy",
  description:
    "VulNyx laboratoriyasida noto'g'ri deploy qilingan xizmatlarni ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Deploy" />,
},
{
  title: "SRV",
  description:
    "VulNyx muhitida server konfiguratsiyasi va xizmatlaridagi zaifliklarni aniqladim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="SRV" />,
},
{
  title: "Blackperl",
  description:
    "LMS platformasidagi xavfsizlik muammolarini aniqlab, tizim ustidan nazoratni qo'lga kiritdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Blackperl" />,
},
{
  title: "Celryn",
  description:
    "LMS muhitida zaifliklarni ekspluatatsiya qilib, tizimning ichki resurslariga kirishga muvaffaq bo'ldim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Celryn" />,
},
{
  title: "Reactor",
  description:
    "Hack The Box laboratoriyasida murakkab ekspluatatsiya va privilege escalation jarayonlarini yakunladim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Reactor" />,
},
{
  title: "Pentester Lab XSS & MySQL",
  description:
    "XSS va MySQL bilan bog'liq zaifliklarni amaliy tarzda tahlil qilib ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Pentester Lab XSS & MySQL" />,
},
{
  title: "RickdiculouslyEasy",
  description:
    "VulnHub laboratoriyasida web va tizim zaifliklarini birlashtirib root darajasigacha erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="RickdiculouslyEasy" />,
},
{
  title: "WalkingCMS",
  description:
    "DockerLabs WalkingCMS muhitida CMS zaifliklarini aniqlab muvaffaqiyatli ekspluatatsiya qildim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="WalkingCMS" />,
},
{
  title: "Me and My Girlfriend",
  description:
    "VulnHub laboratoriyasida bir nechta zaifliklarni zanjirlab tizim ustidan to'liq nazoratga erishdim. To'liq hisobot Notion'da.",
  tag: "Notion",
  linkLabel: "View Report →",
  thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
  thumb: <CyberThumb title="Me and My Girlfriend" />,
},
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-[1240px] mx-auto px-[20px]" id="projects">
      <div className="panel mt-6">
        <PanelHeader
          title="FEATURED PROJECTS"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M3 9h18M9 4v14" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="border border-border-soft rounded-lg overflow-hidden bg-white/[0.012] flex flex-col transition-all hover:border-brand-greenDim hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
            >
              <div
                className="h-[150px] flex items-center justify-center"
                style={{ background: p.thumbBg }}
              >
                {p.thumb}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[14px] font-bold text-brand-green mb-[6px]">
                  {p.title}
                </h3>
                <p className="text-[11.5px] text-ink-dim leading-[1.7] flex-1">
                  {p.description}
                </p>
                <div className="flex items-center justify-between mt-[14px]">
                  <span className="text-[9.5px] border border-border text-ink-faint px-2 py-1 rounded">
                    {p.tag}
                  </span>
                  <a
                    href="/projects"
                    className="text-[11px] text-ink flex items-center gap-1 transition-colors hover:text-brand-green"
                  >
                    {p.linkLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Contact/>
    </section>
  );
}
