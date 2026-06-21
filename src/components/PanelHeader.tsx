import { ReactNode } from "react";

export default function PanelHeader({
  icon,
  title,
  action,
}: {
  icon: ReactNode;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 flex-wrap mb-[18px]">
      <div className="flex items-center gap-[10px] text-[13px] font-bold tracking-[1.2px] uppercase text-ink">
        <span className="w-5 h-5 flex items-center justify-center text-brand-green flex-shrink-0 [&>svg]:w-[18px] [&>svg]:h-[18px]">
          {icon}
        </span>
        {title}
      </div>
      {action}
    </div>
  );
}
