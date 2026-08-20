import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Analytics } from "@/components/layout/analytics";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StructuredData } from "@/components/layout/structured-data";
import { profile, siteUrl } from "@/data/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alan Camargo | Psicoterapia e Nutrição",
    template: "%s | Alan Camargo",
  },
  description:
    "Atendimentos individuais de psicoterapia e nutrição, online e presencialmente no Jardim Paulista, em São Paulo.",
  applicationName: "Alan Camargo",
  authors: [{ name: profile.fullName }],
  keywords: [
    "psicoterapia",
    "psicanálise",
    "nutricionista",
    "Jardim Paulista",
    "São Paulo",
    "atendimento online",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Alan Camargo",
    title: "Alan Camargo | Psicoterapia e Nutrição",
    description:
      "Escuta, autoconhecimento e cuidado individualizado — online e presencial em São Paulo.",
    images: [
      {
        url: "/images/alan-hero-embedded.svg",
        width: 1536,
        height: 1024,
        alt: "Alan Camargo em ambiente profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Camargo | Psicoterapia e Nutrição",
    description:
      "Escuta, autoconhecimento e cuidado individualizado — online e presencial em São Paulo.",
    images: ["/images/alan-hero-embedded.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071D2B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
