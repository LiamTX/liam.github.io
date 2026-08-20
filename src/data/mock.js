export const services = [
  {
    id: "sistemas-sob-medida",
    title: "Sistemas sob medida",
    description:
      "Construímos produtos digitais, plataformas e ferramentas internas alinhadas à operação, desde a definição dos requisitos até a entrada em produção.",
    metric:
      "Software conectado ao problema real e preparado para evoluir.",
    icon: "Shield",
  },
  {
    id: "integracoes-automacao",
    title: "Integrações e automações",
    description:
      "Conectamos sistemas e automatizamos processos manuais para reduzir retrabalho, erros e falta de rastreabilidade. Quando gera valor concreto, IA pode fazer parte da solução.",
    metric: "Menos tarefas manuais, mais controle e eficiência operacional.",
    icon: "Zap",
  },
  {
    id: "evolucao-sistemas",
    title: "Evolução de sistemas existentes",
    description:
      "Assumimos sistemas que precisam ganhar estabilidade, novas funcionalidades, melhor arquitetura ou capacidade de entrega sem interromper a operação atual.",
    metric: "Mais estabilidade, velocidade de evolução e previsibilidade.",
    icon: "Brain",
  },
];

export const cases = [
  {
    id: "banking-platform",
    title: "Aplicação financeira em operação",
    context:
      "Operação de pagamentos e serviços financeiros com módulos de PIX, TED, pagamento de boletos, onboarding digital, pagamentos em lote, cadastro de beneficiários, antecipações, linhas de crédito e painel administrativo.",
    role:
      "A Cabral Labs liderou o desenvolvimento e a evolução da aplicação, incluindo módulos financeiros, integrações, regras de negócio, aplicativo do cliente e painel administrativo.",
    collaboration:
      "A infraestrutura e a operação dos ambientes foram realizadas em colaboração com uma equipe especializada. A disponibilidade da plataforma é resultado conjunto entre desenvolvimento e infraestrutura.",
    stack: ["Node.js", "NestJS", "Angular", "RabbitMQ", "Azure"],
    results: [
      { metric: "99,9%", label: "de disponibilidade da plataforma" },
      { metric: "99%", label: "aprovação automática no onboarding" },
      { metric: "-95%", label: "bugs críticos em produção" },
    ],
  },
  {
    id: "license-governance",
    title: "Automação de governança de licenças corporativas",
    context:
      "Sistema interno para identificar licenças corporativas sem uso, notificar colaboradores, aplicar regras de validação e automatizar o corte de custos recorrentes que antes ficavam invisíveis na operação.",
    role:
      "A Cabral Labs construiu o sistema de ponta a ponta, desde a descoberta do processo até a implementação das integrações, regras de negócio, dashboards e automações de notificação.",
    collaboration:
      "Trabalhamos junto à área de governança e procurement para mapear o ciclo de decisão antes do cancelamento e garantir conformidade com as políticas internas.",
    stack: ["Azure Functions", "Node.js", "SPFx", "SharePoint"],
    results: [
      { metric: "~R$ 1M/ano", label: "em redução de custo operacional" },
      { metric: "Dashboards", label: "de economia e licenças cortadas" },
      { metric: "Ciclo", label: "de decisão antes do cancelamento" },
    ],
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Descoberta",
    description:
      "Contexto, operação, objetivo e restrições. O foco aqui é separar sintoma de problema real.",
  },
  {
    id: 2,
    title: "Definição",
    description:
      "Requisitos, prioridades, solução e critérios de aceite. Você sai com direção clara antes de investir mais tempo ou dinheiro.",
  },
  {
    id: 3,
    title: "Construção e QA",
    description:
      "Entregas progressivas, validação funcional e comunicação próxima. Sem sumiço no meio do caminho.",
  },
  {
    id: 4,
    title: "Produção e evolução",
    description:
      "Publicação, acompanhamento inicial e próximos ciclos. Colocamos em produção com cuidado e ajustamos o que for necessário.",
  },
];

export const fintechScreens = [
  {
    id: "app-inicial",
    src: "/fintech-screens/app-inicial.jpeg",
    group: "App do cliente",
    title: "Visão geral da conta",
    caption: "Saldo, atalhos e resumo da operação em uma tela.",
  },
  {
    id: "app-extratos",
    src: "/fintech-screens/app-extratos.jpeg",
    group: "App do cliente",
    title: "Extratos e conciliação",
    caption: "Lançamentos detalhados com entrada, saída e comprovantes.",
  },
  {
    id: "admin-dashboard",
    src: "/fintech-screens/admin-dashboard.jpeg",
    group: "Painel administrativo",
    title: "Dashboard operacional",
    caption: "Volume de contas, transações e comparativos mensais.",
  },
  {
    id: "admin-reconciliacao-mensalidades",
    src: "/fintech-screens/admin-reconciliacao-mensalidades.jpeg",
    group: "Painel administrativo",
    title: "Reconciliação de mensalidades",
    caption: "Contas, mensalidades em aberto e valores devidos centralizados.",
  },
];

export const clientLogos = [
  { name: "PayTech", logo: "/paytechh_logo.jfif" },
  { name: "Globo", logo: "/globo_logo.svg" },
  { name: "Logikee", logo: "/logikee_logo.jfif" },
  { name: "ZG Soluções", logo: "/zg_solucoes_logo.jfif" },
  { name: "Personal Card", logo: "/personal_card_logo.jfif" },
];

export const contact = {
  email: "liamcabral88@gmail.com",
  phone: "+55 (48) 98839-6929",
  whatsappUrl: "https://wa.me/5548988396929",
  location: "Florianópolis, SC",
  linkedin: "https://www.linkedin.com/company/cabrallabs/",
};

export const stats = [
  { value: "7+", label: "anos em engenharia de software" },
  {
    value: "Sistemas, integrações e automações",
    label: "projetos em produção",
  },
  { value: "Florianópolis, SC", label: "base com atendimento remoto" },
];
