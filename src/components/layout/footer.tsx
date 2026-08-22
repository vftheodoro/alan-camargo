import { Camera, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/branding/logo";
import { TrackedLink } from "@/components/ui/tracked-link";
import { contact, profile } from "@/data/site";
import { formatAddress, formatPhone } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p>
            Atendimento individual, online e presencial, com escuta,
            responsabilidade e respeito à singularidade de cada pessoa.
          </p>
        </div>
        <div>
          <p className="footer-title">Atendimentos</p>
          <Link href="/psicoterapia">Psicoterapia</Link>
          <Link href="/nutricao">Nutrição</Link>
          <Link href="/politica-de-agendamento">Política de agendamento</Link>
        </div>
        <div>
          <p className="footer-title">Contato</p>
          <TrackedLink
            href={buildWhatsAppUrl("general", "footer")}
            target="_blank"
            rel="noopener noreferrer"
            eventName="whatsapp_click"
            eventLabel="general:footer"
          >
            <MessageCircle aria-hidden="true" size={16} />
            {formatPhone(contact.whatsapp)}
          </TrackedLink>
          <TrackedLink
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            eventName="instagram_click"
            eventLabel="footer"
          >
            <Camera aria-hidden="true" size={16} />
            {profile.instagram}
          </TrackedLink>
          <p className="footer-address">
            <MapPin aria-hidden="true" size={16} />
            <span>{formatAddress(profile.address)}</span>
          </p>
        </div>
      </div>
      <div className="footer-credit">
        <a
          className="footer-credit-link"
          href="https://bythe.com.br"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site criado pela Bythe"
        >
          <img src="/brand/bythe.svg" alt="Bythe" width="35" height="28" />
          <span>
            <span className="footer-credit-label">Site criado pela</span>
            <strong>BYTHE</strong>
            <small>Sites, sistemas e presença digital</small>
          </span>
        </a>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Alan Camargo Alves.</p>
        <div>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/termos">Termos</Link>
        </div>
      </div>
    </footer>
  );
}
