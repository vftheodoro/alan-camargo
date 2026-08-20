import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como este site trata dados e protege a sua privacidade.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de privacidade"
      intro="Este site foi projetado para coletar o mínimo possível de informações pessoais."
      updatedAt="20 de agosto de 2026"
      sections={[
        {
          title: "Dados coletados",
          paragraphs: [
            "O site não possui cadastro, formulário clínico, prontuário ou pagamento online. O contato acontece por plataformas externas escolhidas pelo visitante, como WhatsApp e Instagram.",
          ],
        },
        {
          title: "Métricas de navegação",
          paragraphs: [
            "Quando o serviço de analytics estiver habilitado, poderão ser coletadas informações técnicas e agregadas, como páginas visitadas, origem do acesso, dispositivo e cliques. Essas informações são usadas para melhorar a experiência e compreender o desempenho do site.",
          ],
        },
        {
          title: "Dados sensíveis",
          paragraphs: [
            "Não envie informações de saúde por meios públicos. Dados necessários ao atendimento devem ser tratados diretamente no canal profissional adequado e conforme as obrigações de confidencialidade aplicáveis.",
          ],
        },
        {
          title: "Links externos",
          paragraphs: [
            "WhatsApp, Instagram e Google Maps possuem suas próprias políticas de privacidade. Ao acessar esses serviços, o tratamento de dados também passa a seguir as regras de cada plataforma.",
          ],
        },
        {
          title: "Contato sobre privacidade",
          paragraphs: [
            "Solicitações relacionadas a dados podem ser feitas pelo WhatsApp profissional informado neste site.",
          ],
        },
      ]}
    />
  );
}
