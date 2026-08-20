import { contact, profile, services, siteUrl } from "@/data/site";
import { formatAddress } from "@/lib/format";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    url: siteUrl,
    sameAs: [contact.instagramUrl],
    jobTitle: ["Psicoterapeuta", "Nutricionista"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Atendimentos — ${profile.fullName}`,
    url: siteUrl,
    telephone: `+${contact.whatsapp}`,
    description:
      "Atendimentos individuais de psicoterapia e nutrição, online e presencialmente em São Paulo.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${profile.address.street}, ${profile.address.number}, ${profile.address.complement}`,
      addressLocality: profile.address.city,
      addressRegion: profile.address.state,
      postalCode: profile.address.postalCode,
      addressCountry: "BR",
    },
    areaServed: "São Paulo",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Atendimentos",
      itemListElement: Object.values(services).map((item) => ({
        "@type": "Offer",
        priceCurrency: "BRL",
        price: item.priceBRL,
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.summary,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([person, service]).replace(/</g, "\\u003c"),
      }}
      data-address={formatAddress(profile.address)}
    />
  );
}
