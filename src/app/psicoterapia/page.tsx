import type { Metadata } from "next";

import { ServicePage } from "@/components/sections/service-page";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Psicoterapia",
  description:
    "Psicoterapia individual para adultos, online e presencialmente no Jardim Paulista, em São Paulo. Sessões de aproximadamente 60 minutos.",
  alternates: { canonical: "/psicoterapia" },
};

export default function PsychotherapyPage() {
  return <ServicePage service={services.psicoterapia} />;
}
