"use client";

import { motion } from "framer-motion";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

// Shared props between button and anchor (no conflicting event handlers)
type SharedProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  | "id"
  | "className"
  | "style"
  | "onClick"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onFocus"
  | "onBlur"
  | "onKeyDown"
  | "onKeyUp"
  | "tabIndex"
  | "title"
  | "aria-label"
  | "aria-describedby"
  | "aria-expanded"
  | "aria-controls"
  | "role"
  | "type"
  | "disabled"
  | "href"
  | "target"
  | "rel"
  | "children"
>;

type ButtonProps = SharedProps & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
};

const variants = {
  primary: "bg-white text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200 border-none shadow-glow",
  secondary: "bg-zinc-800 text-white hover:bg-zinc-700 active:bg-zinc-600 border border-zinc-700",
  outline: "bg-transparent text-white hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-600",
  ghost: "bg-transparent text-white hover:bg-zinc-800 active:bg-zinc-700 border-none",
  danger: "bg-red-600 text-white hover:bg-red-500 active:bg-red-700 border-none shadow-[0_0_20px_-5px_rgb(239_68_68)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const ButtonContent = ({ loading, iconLeft, iconRight, children }: { loading?: boolean; iconLeft?: React.ReactNode; iconRight?: React.ReactNode; children: React.ReactNode }) => (
  <>
    {loading && (
      <motion.span
        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
    )}
    {!loading && iconLeft && <span className="flex-shrink-0" aria-hidden="true">{iconLeft}</span>}
    <span className={loading ? "opacity-0" : ""}>{children}</span>
    {!loading && iconRight && <span className="flex-shrink-0" aria-hidden="true">{iconRight}</span>}
  </>
);

export const Button = forwardRef<ButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, iconLeft, iconRight, fullWidth, children, className = "", disabled, style, asChild, ...props }, ref) => {
    const baseClassName = `relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

    const content = <ButtonContent loading={loading} iconLeft={iconLeft} iconRight={iconRight} children={children} />;

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={baseClassName}
          style={style}
          aria-disabled={disabled || loading}
          tabIndex={disabled || loading ? -1 : undefined}
          {...props}
        >
          {content}
        </Slot>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClassName}
        whileHover={{ scale: loading || disabled ? 1 : 1.02 }}
        whileTap={{ scale: loading || disabled ? 1 : 0.98 }}
        style={style}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";