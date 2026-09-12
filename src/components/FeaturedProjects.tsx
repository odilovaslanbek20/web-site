import PanelHeader from "./PanelHeader";

type Project = {
  title: string;
  description: string;
  tag: string;
  linkLabel: string;
  thumbBg: string;
  thumb: React.ReactNode;
  url: string;
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
      <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#0a1510" />
        <circle cx="80" cy="60" r="46" fill="#16a34a" opacity={0.18} />
        <circle cx="330" cy="150" r="60" fill="#22c55e" opacity={0.12} />
        <g transform="translate(150,55)" fill="none" stroke="#39ff6a" strokeWidth={2.2} opacity={0.85}>
          <path d="M40 70 L40 40 Q40 20 60 20 Q80 20 80 40 L80 70" />
          <circle cx="40" cy="78" r="8" />
          <circle cx="80" cy="78" r="8" />
          <path d="M20 40 L100 40 L92 70 L28 70 Z" />
        </g>
        <text x="200" y="160" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#39ff6a" opacity={0.8}>
          ECOBAZAR.UZ
        </text>
      </svg>
    ),
    url: "https://eco-bozor-web.vercel.app/",
  },
  {
    title: "BookShop",
    description: "Onlayn kitob do'koni. Kategoriyalar, savatcha va to'lov tizimi bilan.",
    tag: "Next.js",
    linkLabel: "View Project →",
    thumbBg: "linear-gradient(135deg,#0d1418,#08100f)",
    thumb: (
      <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#0a1213" />
        <circle cx="320" cy="50" r="50" fill="#0ea5e9" opacity={0.14} />
        <g transform="translate(150,50)" fill="none" stroke="#39ff6a" strokeWidth={2.2} opacity={0.85}>
          <rect x="0" y="0" width="55" height="70" rx="2" />
          <rect x="20" y="14" width="55" height="70" rx="2" fill="#0a1213" />
          <line x1="28" y1="28" x2="65" y2="28" />
          <line x1="28" y1="40" x2="65" y2="40" />
          <line x1="28" y1="52" x2="55" y2="52" />
        </g>
        <text x="200" y="160" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#39ff6a" opacity={0.8}>
          BOOKSHOP.UZ
        </text>
      </svg>
    ),
    url: "https://book-shop-livid.vercel.app/",
  },
  {
    title: "Penetratsion Test Hisoboti — CyberSploit",
    description:
      "Tizimdagi zaifliklarni aniqlab, root darajasigacha kirish huquqiga erishdim. To'liq hisobot Notion'da.",
    tag: "Notion",
    linkLabel: "View Report →",
    thumbBg: "linear-gradient(135deg,#0a1410,#06100a)",
    thumb: (
      <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="200" fill="#070d09" />
        <g opacity={0.08}>
          <text x="10" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#39ff6a">
            01001 11010 00101 11001 10110 01101 00101 11001 10110 01101
          </text>
          <text x="10" y="35" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#39ff6a">
            10110 01100 10011 01010 11010 00101 10110 01100 10011 01010
          </text>
          <text x="10" y="50" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#39ff6a">
            11010 00101 11001 10110 01101 01001 11010 00101 11001 10110
          </text>
          <text x="10" y="180" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#39ff6a">
            00101 11001 10110 01101 01001 11010 00101 11001 10110 01101
          </text>
          <text x="10" y="165" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#39ff6a">
            10110 01100 10011 01010 11010 00101 10110 01100 10011 01010
          </text>
        </g>
        <g transform="translate(170,65)" fill="none" stroke="#39ff6a" strokeWidth={2.2} opacity={0.9}>
          <path d="M35 0 L65 12 V35 Q65 60 35 70 Q5 60 5 35 V12 Z" />
          <path d="M22 35 L31 44 L48 26" />
        </g>
        <text x="200" y="160" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#39ff6a" opacity={0.85}>
          CYBERSPLOIT // REPORT
        </text>
      </svg>
    ),
    url: "https://github.com/odilovaslanbek20/Reports/blob/main/Machine_reports_month_1/CyberSploit1__offsec.pdf",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="panel mt-6" id="projects">
      <PanelHeader
        title="FEATURED PROJECTS"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M3 9h18M9 4v14" />
          </svg>
        }
        action={
          <a
            href="/projects"
            className="flex items-center gap-[6px] text-[11px] text-ink-dim border border-border-soft px-[14px] py-2 rounded-md transition-all hover:text-brand-green hover:border-brand-greenDim"
          >
            VIEW ALL PROJECTS →
          </a>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="border border-border-soft rounded-lg overflow-hidden bg-white/[0.012] flex flex-col transition-all hover:border-brand-greenDim hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
          >
            <div className="h-[150px] flex items-center justify-center" style={{ background: p.thumbBg }}>
              {p.thumb}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-[14px] font-bold text-brand-green mb-[6px]">{p.title}</h3>
              <p className="text-[11.5px] text-ink-dim leading-[1.7] flex-1">{p.description}</p>
              <div className="flex items-center justify-between mt-[14px]">
                <span className="text-[9.5px] border border-border text-ink-faint px-2 py-1 rounded">
                  {p.tag}
                </span>
                <a href={p.url} target="_blank" className="text-[11px] text-ink flex items-center gap-1 transition-colors hover:text-brand-green">
                  {p.linkLabel}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
