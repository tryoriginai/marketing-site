import Link from "next/link";

interface CtaButtonProps {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  showDot?: boolean;
  children?: React.ReactNode;
}

export function CtaButton({
  href = "/checkout",
  className = "",
  size = "md",
  variant = "primary",
  showDot = true,
  children = "Book a demo",
}: CtaButtonProps) {
  const sizeClasses = {
    sm: "text-[13px] px-4 py-2 gap-2",
    md: "text-[14px] px-5 py-2.5 gap-2.5",
    lg: "text-[14px] px-6 py-3 gap-2.5",
  };

  const dotSizes = {
    sm: "w-[7px] h-[7px]",
    md: "w-[7.5px] h-[7.5px]",
    lg: "w-[8px] h-[8px]",
  };

  const bgStyle = variant === "primary" ? "#111111" : "#ffffff";
  const textStyle = variant === "primary" ? "#ffffff" : "#111111";
  const borderStyle = variant === "primary" ? "none" : "1px solid rgba(0,0,0,0.12)";

  return (
    <Link
      href={href}
      className={`hero-cta-btn inline-flex items-center font-medium transition-all duration-200 select-none shrink-0 ${
        variant === "primary" ? "hover:opacity-95" : "hover:bg-black/[0.02]"
      } ${sizeClasses[size]} ${className}`}
      style={{
        background: bgStyle,
        color: textStyle,
        border: borderStyle,
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        borderRadius: "0px",
      }}
    >
      {showDot && (
        <span
          className={`cta-dot ${dotSizes[size]}`}
          style={{
            display: "inline-block",
            borderRadius: "50%",
            background: "#e8662a",
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </Link>
  );
}
