import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Alan Camargo — início">
      <Image
        aria-hidden="true"
        className={compact ? "brand-mark" : "brand-lockup"}
        src={compact ? "/brand/alan-camargo-mark.png" : "/brand/alan-camargo-logo.png"}
        alt=""
        width={compact ? 400 : 1374}
        height={compact ? 400 : 570}
        sizes={compact ? "56px" : "(max-width: 720px) 145px, 176px"}
      />
    </Link>
  );
}