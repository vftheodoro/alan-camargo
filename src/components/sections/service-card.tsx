import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import type { Service } from "@/types/content";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <article className={`service-card ${featured ? "is-featured" : ""}`}>
      <p className="eyebrow">{service.eyebrow}</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul>
        {service.outcomes.slice(0, 3).map((outcome) => (
          <li key={outcome}>
            <Check aria-hidden="true" size={16} />
            {outcome}
          </li>
        ))}
      </ul>
      <div className="service-meta">
        <span>{service.durationMinutes} min</span>
        <span>{service.priceLabel}</span>
      </div>
      <Link className="text-link" href={`/${service.slug}`}>
        Conhecer o atendimento
        <ArrowUpRight aria-hidden="true" size={18} />
      </Link>
    </article>
  );
}
