import {
  ArrowRight,
  Brain,
  Clock3,
  HeartHandshake,
  MapPin,
  Monitor,
  Scale,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { OrganicLines } from "@/components/branding/organic-lines";
import { BookingNote } from "@/components/sections/booking-note";
import { ServiceCard } from "@/components/sections/service-card";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { TrackedLink } from "@/components/ui/tracked-link";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { contact, generalFaqs, profile, services } from "@/data/site";
import { formatAddress } from "@/lib/format";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/alan-hero-embedded.svg"
          alt="Alan Camargo sentado em um consultório contemporâneo"
          fill
          preload
          fetchPriority="high"
          unoptimized
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <OrganicLines className="hero-lines" />
        <div className="shell hero-content">
          <p className="eyebrow light">Psicoterapia · Nutrição</p>
          <h1>
            Torne‑se quem
            <em> você é.</em>
          </h1>
          <p className="hero-lead">
            Um espaço de escuta, consciência e cuidado para compreender seus
            padrões e construir caminhos mais coerentes com a sua história.
          </p>
          <div className="hero-actions">
            <WhatsAppLink
              intent="psicoterapia"
              source="home-hero"
              label="Agendar psicoterapia"
            />
            <Link className="button button-ghost" href="/psicoterapia">
              Conhecer a abordagem
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="hero-trust">
            <span>
              <Monitor aria-hidden="true" size={17} /> Online
            </span>
            <span>
              <MapPin aria-hidden="true" size={17} /> Jardim Paulista · SP
            </span>
            <span>
              <Clock3 aria-hidden="true" size={17} /> Sessões de cerca de 60 min
            </span>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="shell intro-grid">
          <p className="quote-mark">“</p>
          <p className="intro-quote">
            Conhecer a si mesmo não encerra as perguntas. Ajuda a fazer
            perguntas mais honestas.
          </p>
          <p className="intro-copy">
            Atendimento individualizado, sem fórmulas prontas, respeitando o
            tempo, o contexto e a singularidade de cada pessoa.
          </p>
        </div>
      </section>

      <section className="section services-section" id="atendimentos">
        <div className="shell">
          <SectionHeading
            eyebrow="Dois caminhos de cuidado"
            title="Escolha o atendimento que faz sentido para você"
            description="Psicoterapia e Nutrição possuem objetivos e processos próprios. Conheça cada proposta antes de solicitar seu horário."
          />
          <div className="services-grid">
            <ServiceCard service={services.psicoterapia} featured />
            <ServiceCard service={services.nutricao} />
          </div>
        </div>
      </section>

      <section className="section philosophy-section">
        <OrganicLines className="philosophy-lines" />
        <div className="shell philosophy-grid">
          <div>
            <SectionHeading
              eyebrow="Um processo singular"
              title="Escuta com profundidade, presença e responsabilidade"
              description="O ponto de partida não é uma resposta pronta. É a disposição para compreender o que se repete, o que mobiliza e o que pede transformação."
              light
            />
            <Link className="text-link light-link" href="/psicoterapia">
              Como funciona a psicoterapia
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="principles-grid">
            <article>
              <Brain aria-hidden="true" />
              <h3>Consciência</h3>
              <p>Observar padrões, escolhas e significados com mais clareza.</p>
            </article>
            <article>
              <HeartHandshake aria-hidden="true" />
              <h3>Singularidade</h3>
              <p>Um processo que respeita sua história e seu próprio ritmo.</p>
            </article>
            <article>
              <Sparkles aria-hidden="true" />
              <h3>Individuação</h3>
              <p>Aproximar-se de quem você é, além das expectativas externas.</p>
            </article>
            <article>
              <Scale aria-hidden="true" />
              <h3>Responsabilidade</h3>
              <p>Conduta ética, limites claros e compromisso com o atendimento.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="shell about-grid">
          <div className="about-photo-wrap">
            <Image
              src="/images/alan-editorial-embedded.svg"
              alt="Retrato profissional de Alan Camargo"
              width={922}
              height={1152}
              sizes="(max-width: 800px) 100vw, 42vw"
              className="about-photo"
            />
            <div className="about-seal" aria-label="Nutricionista registrado">
              <span>CRN-3</span>
              <strong>60629</strong>
            </div>
          </div>
          <div className="about-content">
            <SectionHeading
              eyebrow="Sobre"
              title="Alan Camargo Alves"
              description="Nutricionista e psicoterapeuta, com um trabalho voltado à compreensão do indivíduo em sua totalidade — corpo, escolhas, relações e história."
            />
            <p>
              Na psicoterapia, utiliza como referenciais a Psicologia Analítica
              de Carl Gustav Jung e a Psicanálise Freudiana, criando um espaço
              de escuta para adultos que desejam compreender padrões e ampliar
              sua consciência sobre si.
            </p>
            <p>
              Na Nutrição, acompanha objetivos de composição corporal e saúde
              com estratégias construídas a partir da rotina e das
              possibilidades reais de cada pessoa.
            </p>
            <div className="about-tags" aria-label="Modalidades de atendimento">
              <span>Atendimento online</span>
              <span>Presencial em São Paulo</span>
              <span>Individual para adultos</span>
            </div>
            <TrackedLink
              className="text-link"
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="instagram_click"
              eventLabel="about"
            >
              Acompanhar conteúdos no Instagram
              <ArrowRight aria-hidden="true" size={18} />
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Do interesse ao atendimento"
            title="Como começar"
            align="center"
          />
          <ol className="journey-grid">
            <li>
              <span>01</span>
              <h3>Escolha o atendimento</h3>
              <p>Conheça as propostas de Psicoterapia e Nutrição.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Converse pelo WhatsApp</h3>
              <p>Solicite informações e consulte a disponibilidade.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Reserve seu horário</h3>
              <p>A confirmação acontece após o pagamento antecipado.</p>
            </li>
            <li>
              <span>04</span>
              <h3>Inicie o processo</h3>
              <p>Compareça online ou presencialmente no horário combinado.</p>
            </li>
          </ol>
          <BookingNote />
        </div>
      </section>

      <section className="section location-section">
        <div className="shell location-grid">
          <div className="location-copy">
            <SectionHeading
              eyebrow="Atendimento presencial"
              title="No coração do Jardim Paulista"
              description={formatAddress(profile.address)}
              light
            />
            <div className="location-actions">
              <TrackedLink
                className="button button-primary"
                href="https://www.google.com/maps/search/?api=1&query=Alameda+Joaquim+Eugenio+de+Lima+680+Jardim+Paulista+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                eventName="map_click"
                eventLabel="home-location"
              >
                <MapPin aria-hidden="true" size={18} />
                Ver no Google Maps
              </TrackedLink>
              <span>Atendimento online também disponível</span>
            </div>
          </div>
          <div className="map-card" aria-hidden="true">
            <OrganicLines />
            <MapPin size={42} />
            <strong>Jardim Paulista</strong>
            <span>São Paulo · SP</span>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Antes de agendar"
            description="Informações essenciais para você iniciar o contato com clareza."
          />
          <FaqList items={generalFaqs} />
        </div>
      </section>

      <section className="final-cta">
        <OrganicLines />
        <div className="shell final-cta-inner">
          <p className="eyebrow light">Seu próximo passo</p>
          <h2>Começar também é uma forma de se escutar.</h2>
          <p>Converse diretamente com Alan e encontre o atendimento adequado.</p>
          <WhatsAppLink source="home-final" label="Falar com Alan" />
        </div>
      </section>
    </>
  );
}