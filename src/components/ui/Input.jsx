/**
 * Input Component - Clear, Accessible Form Fields
 * Every input respects the user's time and attention
 */

import { forwardRef } from "react";
import { clsx } from "clsx";

const Input = forwardRef(
  (
    {
      className = "",
      type = "text",
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={clsx(
          "flex h-11 w-full rounded-lg border bg-white px-4 py-2",
          "text-base text-neutral-900 placeholder:text-neutral-400",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-destructive focus:ring-destructive"
            : "border-input focus:ring-ring",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

export function Label({ children, htmlFor, className = "", required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block text-sm font-medium text-neutral-900 mb-2",
        className
      )}
    >
      {children}
      {required && <span className="ml-1 text-destructive">*</span>}
    </label>
  );
}

export function HelperText({ children, className = "", error = false }) {
  return (
    <p
      className={clsx(
        "mt-2 text-sm",
        error ? "text-destructive" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

export function FormField({
  label,
  htmlFor,
  error,
  helperText,
  required,
  children,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {helperText && <HelperText error={!!error}>{helperText}</HelperText>}
    </div>
  );
}
