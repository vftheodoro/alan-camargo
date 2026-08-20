import { contact } from "@/data/site";
import type { ServiceSlug } from "@/types/content";

export type ContactIntent = ServiceSlug | "general";

export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function buildWhatsAppUrl(
  intent: ContactIntent = "general",
  source = "site",
): string {
  const phone = normalizePhone(contact.whatsapp);
  const message = `${contact.messages[intent]}\n\nOrigem: ${source}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
