export const services = [
  {
    id: "fintech",
    title: "Sistemas Robustos & Fintech",
    badge: "Especialidade principal",
    description:
      "Desenvolvemos sistemas que não podem falhar — de plataformas de pagamento com PIX e TED a aplicações de missão crítica com alta disponibilidade. Já construímos core bancário completo em produção.",
    metric: "99.9% de disponibilidade em produção",
    icon: "Shield",
  },
  {
    id: "automacao",
    title: "Automação Corporativa",
    description:
      "Eliminamos trabalho manual que custa tempo e dinheiro. Automações sob medida que conectam seus sistemas, com governança, rastreabilidade e ROI mensurável desde o primeiro mês.",
    metric: "Até R$ 1M/ano em redução de custo operacional",
    icon: "Zap",
  },
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "Integramos inteligência artificial onde ela gera resultado real — em produtos, operações e fluxos internos. LLMs, RAG e agentes em produção, com custo controlado e métricas de impacto.",
    metric: "Soluções de IA em produção, não em demo",
    icon: "Brain",
  },
];

export const cases = [
  {
    id: "paytech",
    title: "Core bancário PayTech",
    description:
      "Arquitetura de microserviços para sistema bancário com PIX, TED, pagamentos e onboarding digital ponta a ponta.",
    stack: ["Node.js", "NestJS", "Angular", "RabbitMQ", "Azure"],
    results: [
      { metric: "99.9%", label: "disponibilidade" },
      { metric: "99%", label: "aprovação automática no onboarding" },
      { metric: "-95%", label: "bugs críticos em produção" },
    ],
  },
  {
    id: "globo",
    title: "Automação interna Globo",
    description:
      "Squad de Intelligent Process Automation com gestão automatizada de licenças e processos operacionais corporativos.",
    stack: ["Azure Functions", "Node.js", "NestJS", "SPFx", "SharePoint"],
    results: [
      { metric: "~R$ 1M/ano", label: "em redução de custo" },
      { metric: "1 squad", label: "de inovação liderada" },
      { metric: "100%", label: "de processos rastreáveis" },
    ],
  },
  {
    id: "soon",
    title: "Próximo case",
    description:
      "Estamos finalizando a documentação de um novo projeto de IA aplicada. Em breve por aqui.",
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

export const clientLogos = ["PayTech", "Globo", "Logikee", "ZG Soluções"];

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
  { value: "Fintech, automação e IA", label: "projetos em produção" },
  { value: "Florianópolis, SC", label: "base com atendimento remoto" },
];
