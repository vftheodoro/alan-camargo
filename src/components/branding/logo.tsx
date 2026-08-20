import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const color = variant === "light" ? "#F3EFE7" : "#071D2B";

  return (
    <Link className="brand-logo" href="/" aria-label="Alan Camargo — início">
      <svg
        aria-hidden="true"
        className="brand-mark"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M17 48 31.8 13 47 48M22.5 37.5h19"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M49.8 21.6c8.7 10 5.7 22.6-5.7 28.2-11.4 5.6-27 2-34.8-8-7.8-10-4.8-22.6 6.6-28.2 8.7-4.3 19.8-3.2 28.1 2.2"
          stroke="#B99457"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      {!compact && (
        <span className="brand-wordmark" style={{ color }}>
          <strong>Alan Camargo</strong>
          <small>Psicoterapeuta · Nutricionista</small>
        </span>
      )}
    </Link>
  );
}
