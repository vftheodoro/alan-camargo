export function OrganicLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`organic-lines ${className}`}
      viewBox="0 0 900 560"
      fill="none"
      preserveAspectRatio="none"
    >
      <path d="M40 520C160 430 114 300 248 254c130-44 169 61 267 4 112-65 88-174 318-229" />
      <path d="M196 416c46-61 25-121 9-171-18-56 24-126 95-184" />
      <path d="M406 297c-1-104 73-158 174-213" />
      <path d="M532 248c89 13 164 72 302 61" />
      <path d="M286 265c-62-17-127 4-226-64" />
      <circle cx="248" cy="254" r="5" />
      <circle cx="515" cy="258" r="5" />
      <circle cx="205" cy="245" r="4" />
    </svg>
  );
}
