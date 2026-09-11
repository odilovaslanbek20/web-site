import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odilov Aslanbek — Web Pentester | Front-end Developer",
  description:
    "Odilov Aslanbek — Front-end Developer, Tizim va Tarmoq Administratori, Pentester. Toshkent, O'zbekiston.",
  icons: {
    icon: "/download.jpeg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-mono bg-bg text-ink antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}