import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { bookingPolicy } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de agendamento",
  description: "Regras para reserva, cancelamento e reagendamento dos atendimentos.",
  alternates: { canonical: "/politica-de-agendamento" },
};

export default function BookingPolicyPage() {
  return (
    <LegalPage
      eyebrow="Informações importantes"
      title="Política de agendamento"
      intro="Regras claras ajudam a preservar o tempo reservado e a organização dos atendimentos."
      updatedAt="20 de agosto de 2026"
      sections={[
        {
          title: "Confirmação do horário",
          paragraphs: [bookingPolicy.details[0]],
        },
        {
          title: "Cancelamentos e reagendamentos",
          paragraphs: [bookingPolicy.details[1]],
        },
        {
          title: "Prazo inferior a 12 horas e não comparecimento",
          paragraphs: [bookingPolicy.details[2]],
        },
        {
          title: "Pagamento e ciência",
          paragraphs: [bookingPolicy.details[3]],
        },
        {
          title: "Contato",
          paragraphs: [
            "Qualquer necessidade de cancelamento ou reagendamento deve ser comunicada diretamente pelo WhatsApp profissional utilizado para a reserva.",
          ],
        },
      ]}
    />
  );
}
