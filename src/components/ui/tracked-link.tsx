"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: string;
  eventLabel: string;
}

export function TrackedLink({
  eventName,
  eventLabel,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", eventName, {
      event_category: "engagement",
      event_label: eventLabel,
    });
    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}
