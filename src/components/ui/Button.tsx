import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  disabled?: boolean;
  title?: string;
  "aria-label"?: string;
};

const variants = {
  primary: "bg-primary text-zinc-950 hover:bg-cyan-300 shadow-glow",
  secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  outline: "border border-white/15 text-zinc-100 hover:border-primary/60 hover:bg-white/5 hover:text-white",
  ghost: "text-zinc-300 hover:bg-white/10 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5 min-h-9",
  md: "px-5 py-2.5 text-sm gap-2 min-h-11",
  lg: "px-7 py-3.5 text-base gap-2.5 min-h-12",
};

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  className = "",
  children,
  href,
  external,
  onClick,
  type = "button",
  disabled,
  title,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap select-none",
    "transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  const content = (
    <>
      {iconLeft && <span className="shrink-0 flex">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0 flex transition-transform duration-200 group-hover:translate-x-0.5">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        onClick={onClick}
        title={title}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group ${classes}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
