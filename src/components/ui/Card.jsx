/**
 * Card Component - Like index cards from a craftsman's workbench
 * Tactile, organized, and elegant
 */

import { clsx } from "clsx";

const variants = {
  default: "bg-white border-neutral-200 shadow-sm",
  brand: "bg-brand-50 border-brand-200 shadow-sm",
  accent: "bg-accent-50 border-accent-200 shadow-sm",
  warm: "bg-warm-50 border-warm-200 shadow-sm",
  elevated: "bg-white shadow-lg border-neutral-200",
  ghost: "bg-transparent border-transparent",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  interactive = false,
  ...props
}) {
  const baseStyles = clsx(
    "rounded-2xl border transition-all duration-300",
    variants[variant],
    interactive &&
      "cursor-pointer hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]",
    !interactive && "hover:shadow-md",
    className
  );

  return (
    <div className={baseStyles} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={clsx("space-y-1.5 p-6", className)}>{children}</div>;
}

export function CardTitle({ children, className = "", as: Component = "h3" }) {
  return (
    <Component
      className={clsx(
        "text-2xl font-serif font-semibold leading-tight tracking-tight text-neutral-900",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p
      className={clsx(
        "text-sm text-muted-foreground leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={clsx("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={clsx("flex items-center p-6 pt-0", className)}>
      {children}
    </div>
  );
}
