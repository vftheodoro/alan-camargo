import type { Metadata } from "next";

import { ServicePage } from "@/components/sections/service-page";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Nutrição | CRN-3 60629",
  description:
    "Consulta nutricional individualizada para composição corporal e saúde, online e presencialmente em São Paulo. Alan Camargo Alves, CRN-3 60629.",
  alternates: { canonical: "/nutricao" },
};

export default function NutritionPage() {
  return <ServicePage service={services.nutricao} />;
}
