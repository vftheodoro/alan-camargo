import type { Address } from "@/types/content";

export function formatAddress(address: Address): string {
  return `${address.street}, ${address.number} · ${address.complement} · ${address.district}, ${address.city}–${address.state} · CEP ${address.postalCode}`;
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "").replace(/^55/, "");

  if (digits.length !== 11) return phone;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
