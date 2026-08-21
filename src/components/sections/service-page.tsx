import { ArrowLeft, Check, Clock3, MapPin, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { OrganicLines } from "@/components/branding/organic-lines";
import { BookingNote } from "@/components/sections/booking-note";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import type { Service } from "@/types/content";

export function ServicePage({ service }: { service: Service }) {
  const isPsychotherapy = service.slug === "psicoterapia";

  return (
    <>
      <section className="service-hero">
        <OrganicLines />
        <div className="shell service-hero-grid">
          <div>
            <Link className="back-link" href="/">
              <ArrowLeft aria-hidden="true" size={16} />
              Voltar para o início
            </Link>
            <p className="eyebrow light">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="service-hero-lead">{service.summary}</p>
            <div className="service-hero-actions">
              <WhatsAppLink
                intent={service.slug}
                source={`/${service.slug}-hero`}
                label="Solicitar agendamento"
              />
              <span>{service.priceLabel}</span>
            </div>
            <div className="service-facts">
              <span>
                <Clock3 aria-hidden="true" size={17} /> Cerca de {service.durationMinutes} min
              </span>
              <span>
                <Monitor aria-hidden="true" size={17} /> Online
              </span>
              <span>
                <MapPin aria-hidden="true" size={17} /> Presencial em SP
              </span>
            </div>
          </div>
          <div className="service-hero-photo">
            <Image
              src={
                isPsychotherapy
                  ? "/images/alan-hero-embedded.svg"
                  : "/images/alan-original-embedded.svg"
              }
              alt={`Alan Camargo — atendimento de ${service.title}`}
              fill
              priority
              unoptimized
              sizes="(max-width: 900px) 100vw, 42vw"
              className="cover-image"
            />
          </div>
        </div>
      </section>

      <section className="section service-detail">
        <div className="shell service-detail-grid">
          <div>
            <SectionHeading
              eyebrow="A proposta"
              title={isPsychotherapy ? "Um espaço para elaborar o que pede compreensão" : "Estratégia para uma rotina que precisa funcionar na vida real"}
            />
            <p className="large-copy">{service.description}</p>
            <p>{service.audience}</p>
            {service.credential && <p className="credential-pill">{service.credential}</p>}
          </div>
          <div className="outcome-card">
            <p className="eyebrow">O que pode ser trabalhado</p>
            <ul>
              {service.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Check aria-hidden="true" size={18} />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {service.references && (
        <section className="references-section">
          <div className="shell references-grid">
            <div>
              <p className="eyebrow light">Referenciais de trabalho</p>
              <h2>Profundidade sem respostas prontas</h2>
            </div>
            <div>
              {service.references.map((reference, index) => (
                <article key={reference}>
                  <span>0{index + 1}</span>
                  <h3>{reference}</h3>
                </article>
              ))}
              <p className="reference-note">
                Os referenciais orientam a escuta e a compreensão do processo,
                sem reduzir a pessoa a uma teoria ou diagnóstico.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="section service-booking">
        <div className="shell service-booking-grid">
          <div>
            <SectionHeading
              eyebrow="Informações práticas"
              title="Clareza desde o primeiro contato"
            />
            <div className="price-card">
              <span>{service.title}</span>
              <strong>{service.priceLabel}</strong>
              <small>Cerca de {service.durationMinutes} minutos · online ou presencial</small>
            </div>
            <BookingNote />
          </div>
          <div>
            <SectionHeading eyebrow="Perguntas frequentes" title="Sobre o atendimento" />
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="service-final-cta">
        <div className="shell">
          <p className="eyebrow light">Quando fizer sentido para você</p>
          <h2>Solicite seu horário diretamente pelo WhatsApp.</h2>
          <WhatsAppLink
            intent={service.slug}
            source={`/${service.slug}-final`}
            label={`Agendar ${service.title.toLowerCase()}`}
          />
        </div>
      </section>
    </>
  );
}
