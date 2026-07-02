export const services = [
  {
    id: "fintech",
    title: "Sistemas sob medida e plataformas críticas",
    badge: "Especialidade principal",
    description:
      "Para empresas que precisam de sistemas confiáveis, integrações complexas, operação segura e escala. Experiência com fintech, pagamentos, onboarding, crédito e rotinas administrativas.",
    metric:
      "Arquitetura preparada para produção, rastreabilidade e evolução contínua.",
    icon: "Shield",
  },
  {
    id: "automacao",
    title: "Automação de processos internos",
    description:
      "Reduzimos tarefas manuais, retrabalho, planilhas e fluxos operacionais difíceis de rastrear, conectando sistemas e criando governança desde o início.",
    metric: "Menos custo operacional, mais controle e decisões baseadas em dados.",
    icon: "Zap",
  },
  {
    id: "ai",
    title: "IA aplicada à operação",
    description:
      "Criamos automações, assistentes e fluxos inteligentes conectados ao contexto real da empresa, com foco em produtividade, rastreabilidade e resultado mensurável.",
    metric: "Soluções com IA em produção, não apenas demos.",
    icon: "Brain",
  },
];

export const cases = [
  {
    id: "banking-platform",
    title: "Plataforma bancária digital em produção",
    description:
      "Desenvolvimento e evolução de uma operação financeira completa, com módulos para PIX, TED, pagamento de boletos, onboarding digital, pagamentos em lote, cadastro de beneficiários, antecipações, linhas de crédito e painel administrativo, em arquitetura preparada para operação crítica, integrações financeiras, rastreabilidade e evolução para modelo white label.",
    stack: ["Node.js", "NestJS", "Angular", "RabbitMQ", "Azure"],
    results: [
      { metric: "99.9%", label: "disponibilidade em produção" },
      { metric: "99%", label: "aprovação automática no onboarding" },
      { metric: "-95%", label: "bugs críticos em produção" },
    ],
  },
  {
    id: "license-governance",
    title: "Automação de governança de licenças corporativas",
    description:
      "Sistema interno para identificar licenças corporativas sem uso, notificar colaboradores, aplicar regras de validação e automatizar o corte de custos recorrentes que antes ficavam invisíveis na operação. Dashboards de economia, licenças cortadas, valores recuperados e acompanhamento do ciclo de decisão antes do cancelamento.",
    stack: ["Azure Functions", "Node.js", "SPFx", "SharePoint"],
    results: [
      { metric: "~R$ 1M/ano", label: "em redução de custo operacional" },
      { metric: "Dashboards", label: "de economia e licenças cortadas" },
      { metric: "Ciclo", label: "de decisão antes do cancelamento" },
    ],
  },
  {
    id: "soon",
    title: "Próximo case: IA aplicada à operação",
    description:
      "Estamos documentando automações com IA aplicadas a processos internos, análise de informação e produtividade operacional.",
    soon: true,
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Entendimento",
    description:
      "Conversamos sobre contexto, objetivo, restrições e urgência. O foco aqui é separar sintoma de problema real.",
  },
  {
    id: 2,
    title: "Definição",
    description:
      "Organizamos escopo, arquitetura inicial, prioridades e caminho de execução. Você sai com direção clara antes de investir mais tempo ou dinheiro.",
  },
  {
    id: 3,
    title: "Construção",
    description:
      "Implementamos com entregas progressivas, revisão contínua e alinhamento próximo. Sem sumiço no meio do caminho.",
  },
  {
    id: 4,
    title: "Entrega e evolução",
    description:
      "Colocamos em produção com cuidado, acompanhamos os primeiros ciclos e ajustamos o que for necessário.",
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
  linkedin: "https://www.linkedin.com/in/liamcabralteixeira/",
  github: "https://github.com/liamcabral",
};

export const stats = [
  { value: "7+", label: "anos em engenharia de software" },
  {
    value: "Sistemas financeiros, automação e IA",
    label: "projetos em produção",
  },
  { value: "Florianópolis, SC", label: "base com atendimento remoto" },
];
