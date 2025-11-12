/**
 * Button Component - Tactile, Intentional Interactions
 * Every button tells a story about what happens next
 */

import { forwardRef } from "react";
import { clsx } from "clsx";

const variants = {
  primary:
    "bg-brand text-brand-foreground shadow-sm hover:bg-brand-600 focus-visible:ring-brand",
  secondary:
    "bg-transparent text-brand-600 border-2 border-brand hover:bg-brand-50 focus-visible:ring-brand",
  accent:
    "bg-accent text-accent-foreground shadow-sm hover:bg-accent-600 focus-visible:ring-accent",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400",
  outline:
    "border-2 border-neutral-300 bg-transparent hover:bg-neutral-50 focus-visible:ring-neutral-400",
  destructive:
    "bg-destructive text-destructive-foreground shadow-sm hover:bg-red-600 focus-visible:ring-destructive",
  subtle:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400",
};

const sizes = {
  sm: "h-9 px-4 text-sm rounded-md",
  md: "h-11 px-6 text-base rounded-lg",
  lg: "h-14 px-8 text-lg rounded-xl",
  icon: "h-10 w-10 rounded-lg",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      href,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles = clsx(
      "inline-flex items-center justify-center",
      "font-medium leading-none",
      "transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "active:scale-[0.98]",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          className={baseStyles}
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseStyles}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
