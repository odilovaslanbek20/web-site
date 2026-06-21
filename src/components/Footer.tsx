export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-[22px] mt-12">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center text-[11px] text-ink-faint flex-wrap gap-[10px]">
        <span>© 2025 Odilov Aslanbek. All rights reserved.</span>
        <a href="#home" className="flex items-center gap-[6px] transition-colors hover:text-brand-green">
          ↑ BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
