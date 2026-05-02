import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[color:var(--accent)] px-6 py-3.5 text-white shadow-[0_14px_32px_rgba(44,108,102,0.24)] hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]",
        secondary:
          "border-[color:var(--border-strong)] bg-white/75 px-6 py-3.5 text-[color:var(--foreground)] shadow-[0_12px_30px_rgba(53,56,51,0.08)] backdrop-blur hover:-translate-y-0.5 hover:bg-white",
        ghost:
          "border-transparent bg-transparent px-4 py-2.5 text-[color:var(--muted-foreground)] hover:bg-white/70 hover:text-[color:var(--foreground)]",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
