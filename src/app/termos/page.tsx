import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso e limites das informações publicadas neste site.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Termos"
      title="Termos de uso"
      intro="Ao navegar neste site, você reconhece os limites informativos e operacionais descritos abaixo."
      updatedAt="20 de agosto de 2026"
      sections={[
        {
          title: "Finalidade do site",
          paragraphs: [
            "O conteúdo apresenta os serviços profissionais de Alan Camargo Alves e oferece canais para solicitação de informações e agendamento.",
          ],
        },
        {
          title: "Conteúdo informativo",
          paragraphs: [
            "As informações publicadas não substituem avaliação individual, consulta, diagnóstico ou orientação de emergência. Nenhum resultado é garantido.",
          ],
        },
        {
          title: "Situações de emergência",
          paragraphs: [
            "Este site e o WhatsApp de agendamento não prestam atendimento emergencial. Em risco imediato, procure um serviço de urgência, ligue para o SAMU pelo 192 ou para o CVV pelo 188.",
          ],
        },
        {
          title: "Agendamentos",
          paragraphs: [
            "A solicitação pelo WhatsApp não garante automaticamente um horário. A reserva depende da disponibilidade e da confirmação prevista na Política de Agendamento.",
          ],
        },
        {
          title: "Propriedade intelectual",
          paragraphs: [
            "Textos, identidade visual, fotografias e demais materiais são protegidos e não podem ser reproduzidos comercialmente sem autorização.",
          ],
        },
      ]}
    />
  );
}
