import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  updatedAt?: string;
}

export function LegalPage({ eyebrow, title, intro, sections, updatedAt }: LegalPageProps) {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="shell legal-hero-inner">
          <Link className="back-link" href="/">
            <ArrowLeft aria-hidden="true" size={16} /> Voltar para o início
          </Link>
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          {updatedAt && <small>Última atualização: {updatedAt}</small>}
        </div>
      </header>
      <div className="shell legal-content">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
