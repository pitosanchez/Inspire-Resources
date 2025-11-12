/**
 * Alert Component - Important Messages with Clarity
 * Used for notifications, warnings, and critical information
 */

import { clsx } from "clsx";

const variants = {
  default: "bg-neutral-50 border-neutral-200 text-neutral-900",
  brand: "bg-brand-50 border-brand-200 text-brand-900",
  accent: "bg-accent-50 border-accent-200 text-accent-900",
  success: "bg-green-50 border-green-200 text-green-900",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
  destructive: "bg-red-50 border-red-200 text-red-900",
};

export default function Alert({
  children,
  variant = "default",
  className = "",
  title,
  icon,
  ...props
}) {
  return (
    <div
      role="alert"
      className={clsx(
        "relative w-full rounded-xl border p-4",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex gap-3">
        {icon && (
          <div className="flex-shrink-0 mt-0.5" aria-hidden="true">
            {icon}
          </div>
        )}
        <div className="flex-1 space-y-1">
          {title && <AlertTitle>{title}</AlertTitle>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function AlertTitle({ children, className = "" }) {
  return (
    <h5
      className={clsx(
        "font-semibold leading-none tracking-tight mb-1",
        className
      )}
    >
      {children}
    </h5>
  );
}

// Alert Icons
export function InfoIcon({ className = "" }) {
  return (
    <svg
      className={clsx("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <svg
      className={clsx("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function WarningIcon({ className = "" }) {
  return (
    <svg
      className={clsx("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

export function ErrorIcon({ className = "" }) {
  return (
    <svg
      className={clsx("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
