import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold font-[Inter] transition-all duration-200 cursor-pointer rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-[17px] text-base leading-6",
    lg: "px-10 py-5 text-base leading-6",
  };

  const variants = {
    primary: "text-white shadow-sm hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-0.5 active:translate-y-0 active:opacity-90",
    outline:
      "text-[var(--primary)] border border-primary/30 bg-white/60 hover:bg-[var(--secondary)] active:bg-[var(--secondary)]",
    ghost: "text-[var(--primary)] bg-transparent hover:bg-[var(--secondary)] border-0",
    white:
      "bg-white text-[var(--primary)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] hover:shadow-lg",
  };

  const primaryStyle =
    variant === "primary"
      ? {
          backgroundImage:
            "linear-gradient(161.95deg, var(--primary-dark) 0%, var(--primary) 100%)",
        }
      : {};

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={primaryStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} style={primaryStyle} {...props}>
      {children}
    </button>
  );
}
