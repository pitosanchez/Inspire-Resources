/**
 * Badge Component - Subtle Information Labels
 * Used for status, categories, and small highlights
 */

import { clsx } from "clsx";

const variants = {
  default: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
  brand: "bg-brand-100 text-brand-900 hover:bg-brand-200",
  accent: "bg-accent-100 text-accent-900 hover:bg-accent-200",
  warm: "bg-warm-100 text-warm-900 hover:bg-warm-200",
  success: "bg-green-100 text-green-900 hover:bg-green-200",
  destructive: "bg-red-100 text-red-900 hover:bg-red-200",
  outline: "border border-neutral-300 text-neutral-700 hover:bg-neutral-50",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium rounded-full transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
