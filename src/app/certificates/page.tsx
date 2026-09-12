import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    title: "Frontend ReactJS (Standard)",
    issuer: "Najot Ta'lim",
    year: "2025",
    image: "/sertificat.png",
    url: "/nt_sertificat.pdf",
  },
];

export default function CertificatesPage() {
  return (
    <section className="max-w-[1240px] mx-auto px-5 py-10">
      <div className="mb-14">
        <p className="text-brand-green uppercase tracking-[0.25em] text-sm">
          Credentials
        </p>

        <h1 className="text-5xl max-[400px]:text-[38px] font-black mt-3">
          Certificates
        </h1>

        <p className="text-ink-dim mt-4 max-w-2xl">
          Professional training, certifications, and cybersecurity learning achievements.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 max-[860px]:grid-cols-2 max-[585px]:grid-cols-1">
        {certificates.map((cert) => (
          <Link
            key={cert.title}
            href={cert.url}
            target="_blank"
            className="group w-full rounded-2xl border border-white/10 overflow-hidden hover:border-brand-green transition"
          >
            <div className="relative h-56">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {cert.title}
              </h3>

              <p className="text-brand-green">
                {cert.issuer}
              </p>

              <p className="text-ink-dim mt-2">
                {cert.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Contact/>
    </section>
  );
}