import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl, type ContactIntent } from "@/lib/whatsapp";

import { TrackedLink } from "./tracked-link";

interface WhatsAppLinkProps {
  intent?: ContactIntent;
  source: string;
  label?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export function WhatsAppLink({
  intent = "general",
  source,
  label = "Solicitar agendamento",
  variant = "primary",
  className = "",
}: WhatsAppLinkProps) {
  return (
    <TrackedLink
      className={`button button-${variant} ${className}`}
      href={buildWhatsAppUrl(intent, source)}
      target="_blank"
      rel="noopener noreferrer"
      eventName="whatsapp_click"
      eventLabel={`${intent}:${source}`}
      aria-label={`${label} pelo WhatsApp`}
    >
      <MessageCircle aria-hidden="true" size={18} />
      {label}
    </TrackedLink>
  );
}
