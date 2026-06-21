import React from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function SocialIcon({
  href,
  label,
  children,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-lg
        border border-zinc-700
        text-zinc-300
        hover:text-green-400
        hover:border-green-500
        transition-all
      "
    >
      {children}
    </a>
  );
}