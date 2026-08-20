export type ServiceSlug = "psicoterapia" | "nutricao";

export interface Credential {
  title: string;
  registration?: string | null;
  institution?: string | null;
  status: "confirmed" | "pending";
}

export interface Address {
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface SiteProfile {
  fullName: string;
  displayName: string;
  roles: string[];
  credentials: Credential[];
  address: Address;
  attendanceModes: string[];
  instagram: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  references?: string[];
  audience: string;
  durationMinutes: number;
  priceBRL: number;
  priceLabel: string;
  modes: string[];
  credential?: string;
  faqs: ServiceFaq[];
}

export interface ContactConfig {
  whatsapp: string;
  instagramUrl: string;
  messages: Record<ServiceSlug | "general", string>;
}

export interface BookingPolicy {
  prepaymentPercent: number;
  cancellationNoticeHours: number;
  summary: string;
  details: string[];
}
