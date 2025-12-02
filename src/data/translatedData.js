// Translated data for experience, projects, and services

export const getTranslatedExperience = (lang) => {
  const experiences = {
    'pt-BR': [
      {
        id: 1,
        company: 'Personal Card | Benefícios Flexíveis',
        position: 'Desenvolvedor Full Stack',
        period: 'Mar 2023 - Presente',
        duration: '2 anos 7 meses',
        location: 'Florianópolis, SC - Presencial',
        description:
          'Desenvolvimento de serviços para banco digital, incluindo transferências via TED, PIX, pagamentos de boletos, gestão de contas, compra de gift cards, notificações e processos de onboarding.',
        achievements: [
          'Integração com plataformas Celcoin e Topazio para serviços financeiros',
          'Desenvolvimento de sistema completo de banco digital',
          'Implementação de notificações e processos de onboarding',
        ],
        technologies: [
          'Angular',
          'Angular Material',
          'NgRx',
          'Node.js',
          'NestJS',
          'RabbitMQ',
          'SQL',
          'MongoDB',
          'Microsoft Azure',
        ],
      },
      {
        id: 2,
        company: 'Globo',
        position: 'Desenvolvedor Full Stack',
        period: 'Out 2021 - Dez 2022',
        duration: '1 ano 3 meses',
        location: 'Remoto',
        description:
          'Desenvolvimento de aplicações para otimização de processos internos, incluindo automação com Azure Functions e criação de Web Parts com SPFx para Microsoft SharePoint.',
        achievements: [
          'Liderança de desenvolvedores em projetos internos',
          'Projeto de redução de custos com licenças corporativas',
          'Eliminação de despesas desnecessárias como licenças Office 365',
        ],
        technologies: [
          'Angular',
          'Node.js',
          'NestJS',
          'RabbitMQ',
          'SQL',
          'Microsoft Azure',
          'SharePoint',
          'SPFx',
        ],
      },
      {
        id: 3,
        company: 'ZG Soluções',
        position: 'Desenvolvedor Full Stack',
        period: 'Jun 2021 - Out 2021',
        duration: '5 meses',
        location: 'Tempo integral',
        description:
          'Desenvolvimento Web utilizando tecnologias modernas e apoio na implementação de cultura ágil.',
        achievements: [
          'Desenvolvimento com stack moderna JavaScript',
          'Implementação de cultura ágil com Jira',
          'Trabalho com containerização e CI/CD',
        ],
        technologies: [
          'Node.js',
          'Angular',
          'Angular Material',
          'NgRx',
          'Docker',
          'TypeScript',
          'Java',
          'Groovy',
          'Jenkins',
        ],
      },
      {
        id: 4,
        company: 'Logikee',
        position: 'Desenvolvedor Full Stack',
        period: 'Mar 2018 - Jun 2021',
        duration: '3 anos 4 meses',
        location: 'Florianópolis, SC',
        description:
          'Desenvolvimento Full Stack para aplicações de grande porte utilizando tecnologias modernas e arquitetura de microserviços.',
        achievements: [
          'Desenvolvimento de aplicações escaláveis',
          'Implementação de arquitetura de microserviços',
          'Trabalho com cloud AWS e containerização',
        ],
        technologies: [
          'Node.js',
          'Express',
          'NestJS',
          'TypeScript',
          'RabbitMQ',
          'Angular',
          'Angular Material',
          'Ionic',
          'Docker',
          'MongoDB',
          'AWS',
        ],
      },
    ],
    'en': [
      {
        id: 1,
        company: 'Personal Card | Flexible Benefits',
        position: 'Full Stack Developer',
        period: 'Mar 2023 - Present',
        duration: '2 years 7 months',
        location: 'Florianópolis, SC - On-site',
        description:
          'Development of services for digital banking, including transfers via TED, PIX, bill payments, account management, gift card purchases, notifications, and onboarding processes.',
        achievements: [
          'Integration with Celcoin and Topazio platforms for financial services',
          'Development of complete digital banking system',
          'Implementation of notifications and onboarding processes',
        ],
        technologies: [
          'Angular',
          'Angular Material',
          'NgRx',
          'Node.js',
          'NestJS',
          'RabbitMQ',
          'SQL',
          'MongoDB',
          'Microsoft Azure',
        ],
      },
      {
        id: 2,
        company: 'Globo',
        position: 'Full Stack Developer',
        period: 'Oct 2021 - Dec 2022',
        duration: '1 year 3 months',
        location: 'Remote',
        description:
          'Development of applications for internal process optimization, including automation with Azure Functions and creation of Web Parts with SPFx for Microsoft SharePoint.',
        achievements: [
          'Leadership of developers in internal projects',
          'Corporate license cost reduction project',
          'Elimination of unnecessary expenses such as Office 365 licenses',
        ],
        technologies: [
          'Angular',
          'Node.js',
          'NestJS',
          'RabbitMQ',
          'SQL',
          'Microsoft Azure',
          'SharePoint',
          'SPFx',
        ],
      },
      {
        id: 3,
        company: 'ZG Soluções',
        position: 'Full Stack Developer',
        period: 'Jun 2021 - Oct 2021',
        duration: '5 months',
        location: 'Full-time',
        description:
          'Web development using modern technologies and support in implementing agile culture.',
        achievements: [
          'Development with modern JavaScript stack',
          'Implementation of agile culture with Jira',
          'Work with containerization and CI/CD',
        ],
        technologies: [
          'Node.js',
          'Angular',
          'Angular Material',
          'NgRx',
          'Docker',
          'TypeScript',
          'Java',
          'Groovy',
          'Jenkins',
        ],
      },
      {
        id: 4,
        company: 'Logikee',
        position: 'Full Stack Developer',
        period: 'Mar 2018 - Jun 2021',
        duration: '3 years 4 months',
        location: 'Florianópolis, SC',
        description:
          'Full Stack development for large-scale applications using modern technologies and microservices architecture.',
        achievements: [
          'Development of scalable applications',
          'Implementation of microservices architecture',
          'Work with AWS cloud and containerization',
        ],
        technologies: [
          'Node.js',
          'Express',
          'NestJS',
          'TypeScript',
          'RabbitMQ',
          'Angular',
          'Angular Material',
          'Ionic',
          'Docker',
          'MongoDB',
          'AWS',
        ],
      },
    ],
  };
  
  return experiences[lang] || experiences['en'];
};

export const getTranslatedProjects = (lang) => {
  const projects = {
    'pt-BR': [
      {
        id: 1,
        title: 'Sistema Bancário Digital',
        description:
          'Desenvolvimento completo de sistema bancário com funcionalidades de TED, PIX, pagamentos e gestão de contas.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'NestJS', 'Angular', 'MongoDB', 'Azure'],
        features: [
          'Integração com APIs bancárias (Celcoin, Topazio)',
          'Sistema de notificações em tempo real',
          'Processamento seguro de pagamentos',
          'Dashboard administrativo completo',
        ],
        category: 'Fintech',
        status: 'Production',
      },
      {
        id: 2,
        title: 'Plataforma de Automação Corporativa',
        description:
          'Sistema de otimização de processos internos com Azure Functions e integração SharePoint.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        technologies: ['Azure Functions', 'SharePoint', 'Angular', 'TypeScript'],
        features: [
          'Automação de fluxos de trabalho',
          'Integração com Office 365',
          'Redução de custos operacionais',
          'Interface moderna e intuitiva',
        ],
        category: 'Automação',
        status: 'Produção',
      },
      {
        id: 3,
        title: 'Aplicação Empresarial Escalável',
        description:
          'Desenvolvimento de aplicação de grande porte com arquitetura de microserviços e deploy em AWS.',
        image:
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'Angular', 'Docker', 'AWS', 'MongoDB'],
        features: [
          'Arquitetura de microserviços',
          'Alta disponibilidade e escalabilidade',
          'Containerização com Docker',
          'Monitoramento e logs centralizados',
        ],
        category: 'Enterprise',
        status: 'Produção',
      },
      {
        id: 4,
        title: 'Sistema de Gestão com Metodologia Ágil',
        description:
          'Implementação de sistema web moderno com cultura ágil e integração Jira.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        technologies: ['Angular', 'Node.js', 'Docker', 'Jira', 'Jenkins'],
        features: [
          'Interface responsiva moderna',
          'Integração com ferramentas ágeis',
          'Pipeline CI/CD automatizado',
          'Métricas e relatórios em tempo real',
        ],
        category: 'Gestão',
        status: 'Produção',
      },
    ],
    'en': [
      {
        id: 1,
        title: 'Digital Banking System',
        description:
          'Complete development of a banking system with TED, PIX, payments, and account management features.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'NestJS', 'Angular', 'MongoDB', 'Azure'],
        features: [
          'Integration with banking APIs (Celcoin, Topazio)',
          'Real-time notification system',
          'Secure payment processing',
          'Complete administrative dashboard',
        ],
        category: 'Fintech',
        status: 'Production',
      },
      {
        id: 2,
        title: 'Corporate Automation Platform',
        description:
          'Internal process optimization system with Azure Functions and SharePoint integration.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        technologies: ['Azure Functions', 'SharePoint', 'Angular', 'TypeScript'],
        features: [
          'Workflow automation',
          'Office 365 integration',
          'Operational cost reduction',
          'Modern and intuitive interface',
        ],
        category: 'Automação',
        status: 'Production',
      },
      {
        id: 3,
        title: 'Scalable Enterprise Application',
        description:
          'Development of a large-scale application with microservices architecture and AWS deployment.',
        image:
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
        technologies: ['Node.js', 'Angular', 'Docker', 'AWS', 'MongoDB'],
        features: [
          'Microservices architecture',
          'High availability and scalability',
          'Containerization with Docker',
          'Centralized monitoring and logs',
        ],
        category: 'Enterprise',
        status: 'Production',
      },
      {
        id: 4,
        title: 'Management System with Agile Methodology',
        description:
          'Implementation of a modern web system with agile culture and Jira integration.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        technologies: ['Angular', 'Node.js', 'Docker', 'Jira', 'Jenkins'],
        features: [
          'Modern responsive interface',
          'Integration with agile tools',
          'Automated CI/CD pipeline',
          'Real-time metrics and reports',
        ],
        category: 'Gestão',
        status: 'Production',
      },
    ],
  };
  
  return projects[lang] || projects['en'];
};

export const getTranslatedServices = (lang) => {
  const services = {
    'pt-BR': [
      {
        id: 1,
        title: 'Desenvolvimento Full Stack',
        description:
          'Desenvolvimento completo de aplicações web modernas, do frontend ao backend, com tecnologias escaláveis.',
        icon: 'Code',
        features: ['Angular/React', 'Node.js/NestJS', 'APIs RESTful', 'Banco de dados'],
      },
      {
        id: 2,
        title: 'Landing Pages & Dashboards',
        description:
          'Criação de landing pages modernas e dashboards interativos para apresentar seus produtos e dados de forma profissional.',
        icon: 'Layers',
        features: ['Design responsivo', 'Performance otimizada', 'SEO otimizado', 'Analytics integrado'],
      },
      {
        id: 3,
        title: 'Integração de Sistemas',
        description:
          'Integração de sistemas legados com APIs modernas, automação de processos e sincronização de dados.',
        icon: 'Cloud',
        features: ['APIs terceiros', 'Microserviços', 'Automação', 'Sincronização'],
      },
      {
        id: 4,
        title: 'Consultoria Técnica',
        description:
          'Análise de sistemas existentes, otimização de performance e definição de arquiteturas técnicas para projetos de qualquer tamanho.',
        icon: 'Users',
        features: ['Code Review', 'Otimização', 'Mentoria', 'Arquitetura'],
      },
    ],
    'en': [
      {
        id: 1,
        title: 'Full Stack Development',
        description:
          'Complete development of modern web applications, from frontend to backend, with scalable technologies.',
        icon: 'Code',
        features: ['Angular/React', 'Node.js/NestJS', 'RESTful APIs', 'Database'],
      },
      {
        id: 2,
        title: 'Landing Pages & Dashboards',
        description:
          'Creation of modern landing pages and interactive dashboards to present your products and data professionally.',
        icon: 'Layers',
        features: ['Responsive design', 'Optimized performance', 'SEO optimized', 'Integrated analytics'],
      },
      {
        id: 3,
        title: 'Systems Integration',
        description:
          'Integration of legacy systems with modern APIs, process automation, and data synchronization.',
        icon: 'Cloud',
        features: ['Third-party APIs', 'Microservices', 'Automation', 'Synchronization'],
      },
      {
        id: 4,
        title: 'Technical Consulting',
        description:
          'Analysis of existing systems, performance optimization, and definition of technical architectures for projects of any size.',
        icon: 'Users',
        features: ['Code Review', 'Optimization', 'Mentoring', 'Architecture'],
      },
    ],
  };
  
  return services[lang] || services['en'];
};

