import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] shadow-[0_18px_50px_rgba(53,56,51,0.08),0_0_0_1px_rgba(92,97,92,0.05)] transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:rotate-[-0.45deg] hover:shadow-[0_28px_70px_rgba(53,56,51,0.12),0_0_0_1px_rgba(92,97,92,0.08)] hover:border-[color:var(--border-strong)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 md:p-7", className)} {...props} />;
}
