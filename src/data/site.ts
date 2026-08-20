import type {
  BookingPolicy,
  ContactConfig,
  Service,
  ServiceSlug,
  SiteProfile,
} from "@/types/content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alan-camargo.vercel.app";

export const profile: SiteProfile = {
  fullName: "Alan Camargo Alves",
  displayName: "Alan Camargo",
  roles: ["Psicoterapeuta", "Nutricionista"],
  credentials: [
    {
      title: "Nutricionista",
      registration: "CRN-3 60629",
      status: "confirmed",
    },
    {
      title: "Formação em Psicanálise",
      institution: null,
      registration: null,
      status: "pending",
    },
  ],
  address: {
    street: "Alameda Joaquim Eugênio de Lima",
    number: "680",
    complement: "Sala 174 · 17º andar",
    district: "Jardim Paulista",
    city: "São Paulo",
    state: "SP",
    postalCode: "01403-000",
  },
  attendanceModes: ["Online", "Presencial em São Paulo"],
  instagram: "@alan.psi.nutri",
};

export const contact: ContactConfig = {
  whatsapp: "5511981886531",
  instagramUrl: "https://www.instagram.com/alan.psi.nutri/",
  messages: {
    general:
      "Olá, Alan. Conheci seu trabalho pelo site e gostaria de informações sobre os atendimentos.",
    psicoterapia:
      "Olá, Alan. Conheci seu trabalho pelo site e gostaria de informações para agendar uma sessão de psicoterapia.",
    nutricao:
      "Olá, Alan. Conheci seu trabalho pelo site e gostaria de informações para agendar uma consulta nutricional.",
  },
};

export const bookingPolicy: BookingPolicy = {
  prepaymentPercent: 100,
  cancellationNoticeHours: 12,
  summary:
    "A confirmação do horário é feita mediante pagamento antecipado. Cancelamentos e reagendamentos devem ser comunicados com pelo menos 12 horas de antecedência.",
  details: [
    "O horário é confirmado após o pagamento antecipado de 100% do valor do atendimento.",
    "Cancelamentos ou pedidos de reagendamento devem ser comunicados com, no mínimo, 12 horas de antecedência.",
    "Solicitações fora desse prazo e não comparecimentos não terão o valor restituído, pois o horário foi reservado exclusivamente para o atendimento.",
    "A forma de pagamento e a confirmação de ciência da política são combinadas diretamente pelo WhatsApp.",
  ],
};

export const services: Record<ServiceSlug, Service> = {
  psicoterapia: {
    slug: "psicoterapia",
    eyebrow: "Escuta e autoconhecimento",
    title: "Psicoterapia",
    summary:
      "Um espaço de escuta para compreender padrões, ampliar a consciência e construir caminhos mais coerentes com quem você é.",
    description:
      "O processo psicoterapêutico oferece tempo e espaço para olhar com profundidade para emoções, escolhas, relações e repetições que atravessam sua história. O trabalho é individualizado e respeita o ritmo de cada pessoa.",
    outcomes: [
      "Compreender padrões e conflitos recorrentes",
      "Explorar identidade, escolhas e direção pessoal",
      "Ampliar repertório para lidar com emoções e relações",
      "Construir uma relação mais consciente consigo",
    ],
    references: [
      "Psicologia Analítica de Carl Gustav Jung",
      "Psicanálise Freudiana",
    ],
    audience: "Atendimento individual para adultos.",
    durationMinutes: 60,
    priceBRL: 150,
    priceLabel: "R$ 150 por sessão",
    modes: ["Online", "Presencial em São Paulo"],
    faqs: [
      {
        question: "Como funciona a primeira sessão?",
        answer:
          "É um primeiro espaço de conversa para você apresentar o que o trouxe ao atendimento, conhecer a forma de trabalho e avaliar os próximos passos.",
      },
      {
        question: "As sessões são online ou presenciais?",
        answer:
          "As duas modalidades estão disponíveis. O atendimento presencial acontece no Jardim Paulista, em São Paulo.",
      },
      {
        question: "Preciso saber exatamente o que falar?",
        answer:
          "Não. O processo começa a partir do que for possível trazer naquele momento, sem roteiro ou desempenho esperado.",
      },
    ],
  },
  nutricao: {
    slug: "nutricao",
    eyebrow: "Estratégia e acompanhamento",
    title: "Nutrição",
    summary:
      "Acompanhamento nutricional individualizado para composição corporal, saúde e uma rotina alimentar possível de sustentar.",
    description:
      "A consulta considera objetivos, rotina, preferências e contexto para construir uma estratégia alimentar aplicável à vida real. O foco não é entregar uma fórmula pronta, mas orientar decisões consistentes.",
    outcomes: [
      "Redução de gordura corporal",
      "Ganho de massa muscular",
      "Organização da alimentação e da rotina",
      "Cuidado nutricional voltado à saúde",
    ],
    audience: "Atendimento nutricional individual para adultos.",
    durationMinutes: 60,
    priceBRL: 350,
    priceLabel: "R$ 350 por consulta",
    modes: ["Online", "Presencial em São Paulo"],
    credential: "CRN-3 60629",
    faqs: [
      {
        question: "A consulta pode ser online?",
        answer:
          "Sim. O acompanhamento está disponível online e presencialmente em São Paulo.",
      },
      {
        question: "O plano considera minha rotina?",
        answer:
          "Sim. A estratégia é construída a partir dos seus objetivos, preferências, contexto e possibilidades reais.",
      },
      {
        question: "A consulta é apenas para emagrecimento?",
        answer:
          "Não. O atendimento também contempla ganho de massa muscular, organização alimentar e objetivos gerais de saúde.",
      },
    ],
  },
};

export const generalFaqs = [
  {
    question: "Como faço para agendar?",
    answer:
      "Escolha o atendimento desejado e fale diretamente com Alan pelo WhatsApp. Você receberá as orientações para reservar o horário.",
  },
  {
    question: "Onde acontece o atendimento presencial?",
    answer:
      "Na Alameda Joaquim Eugênio de Lima, 680, sala 174, 17º andar, Jardim Paulista, São Paulo.",
  },
  {
    question: "O site recebe pagamentos?",
    answer:
      "Não. A reserva e a forma de pagamento são combinadas diretamente pelo WhatsApp.",
  },
  {
    question: "Este canal atende situações de emergência?",
    answer:
      "Não. Em situações de risco imediato, procure um serviço de urgência, ligue para o SAMU (192) ou para o CVV (188).",
  },
];
