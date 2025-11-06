// Mock data para o portfólio de Liam Cabral
export const personalInfo = {
  name: "Liam Cabral",
  title: "Especialista em Desenvolvimento de Sistemas",
  location: "Florianópolis, Santa Catarina, Brasil",
  yearsExperience: "7+",
  email: "liamcabral88@gmail.com",
  phone: "+55 (48) 98839-6929",
  linkedin: "https://www.linkedin.com/in/liamcabralteixeira/",
  github: "https://github.com/liamcabral",
  bio: "Especialista em Desenvolvimento de Sistemas com quase 7 anos de experiência, focado em backend e especialista em tecnologias modernas como Node.js e TypeScript. Busco aplicar minha expertise em projetos escaláveis e inovadores, com habilidade em liderança técnica, integração de sistemas financeiros, e automatização de processos.",
  freelancerNote:
    "Após anos desenvolvendo soluções para grandes empresas, agora estou disponível como freelancer para ajudar sua empresa a alcançar seus objetivos tecnológicos.",
};

export const experience = [
  {
    id: 1,
    company: "Personal Card | Benefícios Flexíveis",
    position: "Desenvolvedor Full Stack",
    period: "Mar 2023 - Presente",
    duration: "2 anos 7 meses",
    location: "Florianópolis, SC - Presencial",
    description:
      "Desenvolvimento de serviços para banco digital, incluindo transferências via TED, PIX, pagamentos de boletos, gestão de contas, compra de gift cards, notificações e processos de onboarding.",
    achievements: [
      "Integração com plataformas Celcoin e Topazio para serviços financeiros",
      "Desenvolvimento de sistema completo de banco digital",
      "Implementação de notificações e processos de onboarding",
    ],
    technologies: [
      "Angular",
      "Angular Material",
      "NgRx",
      "Node.js",
      "NestJS",
      "RabbitMQ",
      "SQL",
      "MongoDB",
      "Microsoft Azure",
    ],
  },
  {
    id: 2,
    company: "Globo",
    position: "Desenvolvedor Full Stack",
    period: "Out 2021 - Dez 2022",
    duration: "1 ano 3 meses",
    location: "Remoto",
    description:
      "Desenvolvimento de aplicações para otimização de processos internos, incluindo automação com Azure Functions e criação de Web Parts com SPFx para Microsoft SharePoint.",
    achievements: [
      "Liderança de desenvolvedores em projetos internos",
      "Projeto de redução de custos com licenças corporativas",
      "Eliminação de despesas desnecessárias como licenças Office 365",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "NestJS",
      "RabbitMQ",
      "SQL",
      "Microsoft Azure",
      "SharePoint",
      "SPFx",
    ],
  },
  {
    id: 3,
    company: "ZG Soluções",
    position: "Desenvolvedor Full Stack",
    period: "Jun 2021 - Out 2021",
    duration: "5 meses",
    location: "Tempo integral",
    description:
      "Desenvolvimento Web utilizando tecnologias modernas e apoio na implementação de cultura ágil.",
    achievements: [
      "Desenvolvimento com stack moderna JavaScript",
      "Implementação de cultura ágil com Jira",
      "Trabalho com containerização e CI/CD",
    ],
    technologies: [
      "Node.js",
      "Angular",
      "Angular Material",
      "NgRx",
      "Docker",
      "TypeScript",
      "Java",
      "Groovy",
      "Jenkins",
    ],
  },
  {
    id: 4,
    company: "Logikee",
    position: "Desenvolvedor Full Stack",
    period: "Mar 2018 - Jun 2021",
    duration: "3 anos 4 meses",
    location: "Florianópolis, SC",
    description:
      "Desenvolvimento Full Stack para aplicações de grande porte utilizando tecnologias modernas e arquitetura de microserviços.",
    achievements: [
      "Desenvolvimento de aplicações escaláveis",
      "Implementação de arquitetura de microserviços",
      "Trabalho com cloud AWS e containerização",
    ],
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "TypeScript",
      "RabbitMQ",
      "Angular",
      "Angular Material",
      "Ionic",
      "Docker",
      "MongoDB",
      "AWS",
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "Universidade do Vale do Itajaí (UNIVALI)",
    degree: "Análise e Desenvolvimento de Sistemas",
    field: "Programação de Computadores",
    period: "2021 - 2023",
    status: "Concluído",
  },
  {
    id: 2,
    institution: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    degree: "Ensino Técnico",
    field: "Programação de Computadores - Geral",
    period: "2018 - 2020",
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
    { name: "Ionic", level: 80, years: 3 },
  ],
  backend: [
    { name: "Node.js", level: 98, years: 7 },
    { name: "NestJS", level: 95, years: 5 },
    { name: "Express.js", level: 90, years: 6 },
    { name: "TypeScript", level: 95, years: 6 },
    { name: "Microservices", level: 88, years: 4 },
    { name: "RabbitMQ", level: 85, years: 4 },
    { name: "RESTful APIs", level: 95, years: 7 },
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
