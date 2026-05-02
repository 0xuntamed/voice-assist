import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-white/82 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-[color:var(--muted-foreground)] shadow-[0_10px_24px_rgba(53,56,51,0.06)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
