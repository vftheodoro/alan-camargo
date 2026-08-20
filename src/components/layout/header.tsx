import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/branding/logo";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";

const navItems = [
  { href: "/psicoterapia", label: "Psicoterapia" },
  { href: "/nutricao", label: "Nutrição" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <WhatsAppLink
          className="header-cta"
          source="header"
          label="Agendar"
          variant="dark"
        />
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">
            <Menu className="menu-open-icon" aria-hidden="true" size={24} />
            <X className="menu-close-icon" aria-hidden="true" size={24} />
          </summary>
          <nav aria-label="Navegação móvel">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <WhatsAppLink source="menu-mobile" label="Solicitar agendamento" />
          </nav>
        </details>
      </div>
    </header>
  );
}
