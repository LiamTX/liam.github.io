// Mock data para o portfólio de Liam Cabral
export const personalInfo = {
  name: "Liam Cabral",
  title: "Senior Full Stack Developer | AI Engineering",
  location: "Florianópolis, Santa Catarina, Brasil",
  yearsExperience: "7+",
  email: "liamcabral88@gmail.com",
  phone: "+55 (48) 98839-6929",
  linkedin: "https://www.linkedin.com/in/liamcabralteixeira/",
  github: "https://github.com/liamcabral",
  bio: "Desenvolvedor com 7 anos de experiência e histórico comprovado em projetos de alta escala. Especialista em ecossistema JavaScript (Node.js/NestJS/TypeScript) com foco em arquiteturas de microserviços e soluções em Nuvem (Azure/AWS). Atualmente focado em AI Engineering, integrando LLMs e Bancos Vetoriais a aplicações corporativas para criar soluções inteligentes e eficientes.",
  freelancerNote:
    "Busco oportunidades onde possa unir minha solidez técnica com as novas fronteiras da Inteligência Artificial Aplicada para gerar impacto real no negócio.",
};

export const experience = [
  {
    id: 1,
    company: "PayTech",
    position: "Senior Full Stack Developer",
    period: "Mar 2023 - Presente",
    duration: "2 anos",
    location: "Florianópolis, SC - Presencial",
    description:
      "Responsável pela arquitetura e sustentação do core de serviços bancários, garantindo alta disponibilidade de transferências e pagamentos.",
    achievements: [
      "Arquitetura de microserviços para sistema bancário (PIX/TED) com 99.9% de disponibilidade",
      "Otimização do onboarding digital com 99% de aprovação automática",
      "Cobertura de código acima de 90% com AI-driven development tools",
      "Redução de 95% na incidência de bugs críticos em produção",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "Angular",
      "RabbitMQ",
      "SQL",
      "Microsoft Azure",
      "AI-Assisted Workflows",
    ],
  },
  {
    id: 2,
    company: "Globo",
    position: "Tech Lead / Full Stack Developer",
    period: "Out 2021 - Dez 2022",
    duration: "1 ano 3 meses",
    location: "Remoto",
    description:
      "Liderança técnica em squads de inovação, focando no desenvolvimento de soluções internas para otimização de processos operacionais.",
    achievements: [
      "Liderança da squad de Inovação focada em Intelligent Process Automation (IPA)",
      "Redução de custos operacionais de ~R$ 1 milhão/ano com gestão automatizada de licenças",
      "Implementação de cultura de Code Review assistido por IA",
      "Mentoria de desenvolvedores junior/estagiários",
    ],
    technologies: [
      "Azure Functions",
      "Node.js",
      "NestJS",
      "Automation Scripts",
      "SPFx",
      "SQL",
      "Microsoft Azure",
    ],
  },
  {
    id: 3,
    company: "ZG Soluções",
    position: "Full Stack Developer",
    period: "Jun 2021 - Out 2021",
    duration: "5 meses",
    location: "Tempo integral",
    description:
      "Modernização de sistemas corporativos, integrando aplicações legadas com interfaces modernas, melhorando usabilidade e performance.",
    achievements: [
      "Integração de aplicações legadas (Java/Groovy) com interfaces modernas em Angular e Node.js",
      "Implementação de pipelines CI/CD com Jenkins e Docker",
      "Definição de processos de desenvolvimento ágil (Jira)",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "Java",
      "Groovy",
      "Docker",
      "Jenkins",
      "Jira",
    ],
  },
  {
    id: 4,
    company: "Logikee",
    position: "Full Stack Developer",
    period: "Mar 2018 - Jun 2021",
    duration: "3 anos 4 meses",
    location: "Florianópolis, SC",
    description:
      "Arquitetura de microserviços escaláveis suportando alto volume de requisições em aplicações de grande porte hospedadas na AWS.",
    achievements: [
      "Arquitetura de microserviços escaláveis com Node.js, NestJS e RabbitMQ",
      "Liderança técnica com code reviews que aceleraram onboarding em ~30%",
      "Otimização de MongoDB com tempos de resposta abaixo de 100ms",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "RabbitMQ",
      "MongoDB",
      "AWS",
      "Docker",
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "Universidade do Vale do Itajaí (UNIVALI)",
    degree: "Graduação - Análise e Desenvolvimento de Sistemas",
    field: "Programação de Computadores",
    period: "01/2021 - 11/2023",
    status: "Concluído",
  },
  {
    id: 2,
    institution: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    degree: "Técnico - Análise e Desenvolvimento de Sistemas",
    field: "Programação de Computadores - Geral",
    period: "01/2018 - 12/2020",
    status: "Concluído",
  },
];

export const skills = {
  frontend: [
    { name: "Angular", level: 95, years: 6 },
    { name: "Angular Material", level: 90, years: 5 },
    { name: "NgRx", level: 85, years: 4 },
    { name: "TypeScript", level: 95, years: 6 },
    { name: "JavaScript", level: 98, years: 7 },
    { name: "HTML5/CSS3", level: 90, years: 7 },
  ],
  backend: [
    { name: "Node.js", level: 98, years: 7 },
    { name: "NestJS", level: 95, years: 5 },
    { name: "Express.js", level: 90, years: 6 },
    { name: "TypeScript", level: 95, years: 6 },
    { name: "Microservices", level: 88, years: 4 },
    { name: "RabbitMQ", level: 85, years: 4 },
    { name: "RESTful APIs", level: 95, years: 7 },
    { name: "GraphQL", level: 80, years: 3 },
  ],
  database: [
    { name: "MongoDB", level: 90, years: 5 },
    { name: "SQL", level: 88, years: 6 },
    { name: "PostgreSQL", level: 85, years: 4 },
    { name: "MySQL", level: 80, years: 4 },
  ],
  cloud: [
    { name: "Microsoft Azure", level: 88, years: 3 },
    { name: "AWS", level: 85, years: 3 },
    { name: "Docker", level: 90, years: 4 },
    { name: "Jenkins", level: 75, years: 2 },
  ],
  ai: [
    { name: "AI Engineering", level: 75, years: 1 },
    { name: "LLMs Integration", level: 70, years: 1 },
    { name: "AI-Assisted Development", level: 85, years: 2 },
  ],
  tools: [
    { name: "Git", level: 95, years: 7 },
    { name: "Jira", level: 85, years: 4 },
    { name: "SharePoint", level: 80, years: 2 },
    { name: "Azure Functions", level: 85, years: 2 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Sistema Bancário Digital",
    description:
      "Desenvolvimento completo de sistema bancário com funcionalidades de TED, PIX, pagamentos e gestão de contas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Node.js", "NestJS", "Angular", "MongoDB", "Azure"],
    features: [
      "Integração com APIs bancárias (Celcoin, Topazio)",
      "Sistema de notificações em tempo real",
      "Processamento seguro de pagamentos",
      "Dashboard administrativo completo",
    ],
    category: "Fintech",
    status: "Produção",
  },
  {
    id: 2,
    title: "Plataforma de Automação Corporativa",
    description:
      "Sistema de otimização de processos internos com Azure Functions e integração SharePoint.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Azure Functions", "SharePoint", "Angular", "TypeScript"],
    features: [
      "Automação de fluxos de trabalho",
      "Integração com Office 365",
      "Redução de custos operacionais",
      "Interface moderna e intuitiva",
    ],
    category: "Automação",
    status: "Produção",
  },
  {
    id: 3,
    title: "Aplicação Empresarial Escalável",
    description:
      "Desenvolvimento de aplicação de grande porte com arquitetura de microserviços e deploy em AWS.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Angular", "Docker", "AWS", "MongoDB"],
    features: [
      "Arquitetura de microserviços",
      "Alta disponibilidade e escalabilidade",
      "Containerização com Docker",
      "Monitoramento e logs centralizados",
    ],
    category: "Enterprise",
    status: "Produção",
  },
  {
    id: 4,
    title: "Sistema de Gestão com Metodologia Ágil",
    description:
      "Implementação de sistema web moderno com cultura ágil e integração Jira.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["Angular", "Node.js", "Docker", "Jira", "Jenkins"],
    features: [
      "Interface responsiva moderna",
      "Integração com ferramentas ágeis",
      "Pipeline CI/CD automatizado",
      "Métricas e relatórios em tempo real",
    ],
    category: "Gestão",
    status: "Produção",
  },
];

export const services = [
  {
    id: 1,
    title: "Desenvolvimento Full Stack",
    description:
      "Desenvolvimento completo de aplicações web modernas, do frontend ao backend, com tecnologias escaláveis.",
    icon: "Code",
    features: [
      "Angular/React",
      "Node.js/NestJS",
      "APIs RESTful",
      "Banco de dados",
    ],
  },
  {
    id: 2,
    title: "Landing Pages & Dashboards",
    description:
      "Criação de landing pages modernas e dashboards interativos para apresentar seus produtos e dados de forma profissional.",
    icon: "Layers",
    features: [
      "Design responsivo",
      "Performance otimizada",
      "SEO otimizado",
      "Analytics integrado",
    ],
  },
  {
    id: 3,
    title: "Integração de Sistemas",
    description:
      "Integração de sistemas legados com APIs modernas, automação de processos e sincronização de dados.",
    icon: "Cloud",
    features: ["APIs terceiros", "Microserviços", "Automação", "Sincronização"],
  },
  {
    id: 4,
    title: "Consultoria Técnica",
    description:
      "Análise de sistemas existentes, otimização de performance e definição de arquiteturas técnicas para projetos de qualquer tamanho.",
    icon: "Users",
    features: ["Code Review", "Otimização", "Mentoria", "Arquitetura"],
  },
];
