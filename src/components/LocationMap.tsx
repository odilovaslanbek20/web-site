export default function LocationMap() {
  return (
    <div className="panel p-0 overflow-hidden flex flex-col">
      <div className="flex-1 relative min-h-[160px] bg-[radial-gradient(ellipse_at_60%_35%,rgba(57,255,106,0.10),transparent_65%),#070a09]">
        <div className="map-dots" />
        <span
          aria-hidden
          className="absolute w-2 h-2 bg-brand-green rounded-full shadow-[0_0_0_4px_rgba(57,255,106,0.18),0_0_14px_rgba(57,255,106,0.6)]"
          style={{ left: "58%", top: "42%" }}
        />
      </div>
      <div className="px-[18px] py-[14px] border-t border-border-soft bg-panel text-[11px]">
        <div className="flex items-center gap-2 text-brand-green font-bold mb-2 text-[10.5px]">
          &gt; LOCATION
        </div>
        <div className="flex items-center gap-2 text-ink-dim">
          <span className="w-4 h-[11px] rounded-sm overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 30 20" width="16" height="11">
              <rect width="30" height="20" fill="#1eb53a" />
              <rect width="30" height="13.33" fill="#0099b5" />
              <rect width="30" height="6.67" fill="#ce1126" />
              <rect y="3" width="30" height="1" fill="#fff" />
              <rect y="9.5" width="30" height="1" fill="#fff" />
            </svg>
          </span>
          Tashkent, Uzbekistan
        </div>
      </div>
    </div>
  );
}
