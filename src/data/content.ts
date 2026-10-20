import { Project, Service, ProcessStep, FaqItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_web_creation_preview_1792497685104.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'burger-district',
    name: 'Burger District',
    type: 'Projeto Conceitual',
    category: 'Gastronomia & Delivery',
    shortDescription: 'Identidade visual gastronômica com atmosfera urbana, cardápio estruturado e foco na apresentação dos produtos artesanais.',
    fullDescription: 'O Burger District foi desenvolvido como um conceito de presença digital para hamburguerias artesanais. O projeto explora uma atmosfera escura com contrastes quentes, priorizando a fotografia apetitosa dos hambúrgueres e uma navegação rápida para consulta de cardápio e horário de funcionamento.',
    objectives: 'Facilitar a consulta do cardápio em celulares, destacar produtos especiais e oferecer uma apresentação visual alinhada ao ambiente do restaurante físico.',
    features: [
      'Cardápio dividido por categorias com navegação direta',
      'Destaque para hambúrgueres artesanais e acompanhamentos',
      'Layout adaptado para telas de smartphones',
      'Seção de endereços, horários e canais de atendimento direto'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Conceito concluído',
    image: '/src/assets/images/project_burger_district_1792497685294.jpg',
    accentColor: '#f59e0b',
    highlights: [
      {
        title: 'Hierarquia de Cardápio',
        description: 'Organização dos itens por seções legíveis para que o cliente encontre preços e descrições em poucos segundos.'
      },
      {
        title: 'Estética Urbana Noturna',
        description: 'Uso de tons escuros e iluminação quente que remetem a hamburguerias contemporâneas.'
      }
    ]
  },
  {
    id: 'atelier-dolce',
    name: 'Atelier Dolce',
    type: 'Projeto Conceitual',
    category: 'Confeitaria Artesanal',
    shortDescription: 'Estética editorial em tons claros, catálogo visual de doces finos e apresentação delicada para encomendas especiais.',
    fullDescription: 'O Atelier Dolce foi planejado para uma confeitaria artesanal especializada em bolos personalizados e doces finos para celebrações. A direção visual aposta na elegância, com tipografia refinada, fundo em tons neutros claros e destaque para a delicadeza dos produtos.',
    objectives: 'Apresentar o portfólio de bolos e doces para ocasiões especiais, orientar o cliente sobre os tamanhos e sabores disponíveis e simplificar os pedidos sob encomenda.',
    features: [
      'Galeria editorial com fotos em alta definição dos doces',
      'Guia explicativo sobre sabores, recheios e tamanhos de bolo',
      'Formulário direcionado para solicitação de orçamentos de eventos',
      'Design responsivo que preserva a sensação de requinte e leveza'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'CSS Grid'],
    status: 'Conceito concluído',
    image: '/src/assets/images/project_atelier_dolce_1792497686301.jpg',
    accentColor: '#d97706',
    highlights: [
      {
        title: 'Direção Editorial Leve',
        description: 'Superfícies em off-white e tipografia com contraste sutil que valorizam a estética artesanal da pâtisserie.'
      },
      {
        title: 'Fluxo para Encomendas',
        description: 'Estrutura pensada para responder dúvidas prévias sobre prazos, porções e personalização.'
      }
    ]
  },
  {
    id: 'reddart',
    name: 'Reddart',
    type: 'Projeto Publicado',
    category: 'Música & Arte Gráfica',
    shortDescription: 'Plataforma web voltada à curadoria e exploração de capas e álbuns musicais, com interface imersiva e reprodutor interativo.',
    fullDescription: 'O Reddart é um projeto real e publicado focado na apreciação visual e sonora de encartes, capas de álbuns e lançamentos musicais. A aplicação conta com interface escura imersiva, sistema de exploração por filtros de gênero e uma barra de reprodução com visualizador de ondas sonoras.',
    objectives: 'Criar um espaço dedicado aos apreciadores da arte gráfica na música, permitindo navegar por capas em alta resolução e descobrir novas sonoridades.',
    features: [
      'Grid fluido de capas de discos com carregamento otimizado',
      'Filtros por gênero musical, novidades e seleções curatoriais',
      'Barra de player com indicador de forma de onda sonora',
      'Visualização detalhada da ficha técnica de cada lançamento'
    ],
    technologies: ['React', 'TypeScript', 'Web Audio API', 'Tailwind CSS'],
    status: 'Publicado e operacional',
    image: '/src/assets/images/project_reddart_music_1792497686317.jpg',
    liveUrl: 'https://reddart.hubsapiens.com.br/',
    accentColor: '#8b5cf6',
    highlights: [
      {
        title: 'Foco na Arte do Disco',
        description: 'Composição pensada para dar protagonismo às capas dos discos sem distrações na interface.'
      },
      {
        title: 'Interatividade Sonora',
        description: 'Player funcional integrado na base da tela com controle de reprodução e amplitude de áudio.'
      }
    ]
  }
];

export const WHATSAPP_PHONE = '5512992065569';
export const WHATSAPP_DISPLAY_PHONE = '+55 (12) 99206-5569';
export const WHATSAPP_DEFAULT_URL = 'https://api.whatsapp.com/send/?phone=5512992065569&text=Ol%C3%A1%21+Meu+nome+%C3%A9+______.+Tenho+um%28a%29+______+%28neg%C3%B3cio%2Fprofiss%C3%A3o%29+e+gostaria+de+um+or%C3%A7amento+para+um+site.+Minha+ideia%3A+______.&type=phone_number&app_absent=0';

export const SERVICES: Service[] = [
  {
    id: 'institucionais',
    number: '01',
    title: 'Sites Institucionais',
    tagline: 'Presença sólida e confiável para sua empresa ou consultório.',
    description: 'Apresentação estruturada de quem você é, seus diferenciais, equipe, serviços e canais diretos de contato. Projetados para transmitir credibilidade a potenciais clientes.',
    targetAudience: 'Empresas, clínicas, escritórios, consultorias e prestadores de serviços.',
    deliverables: [
      'Página institucional completa com seções personalizadas',
      'Apresentação clara dos serviços ou especialidades',
      'Integração com WhatsApp, e-mail e localização física',
      'Otimização semântica para mecanismos de busca (SEO)'
    ]
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing Pages',
    tagline: 'Páginas diretas com foco em conversão e apresentação de ofertas.',
    description: 'Páginas pensadas para um objetivo único: apresentar um produto, evento, mentoria ou serviço específico com argumento convincente e chamada para ação objetiva.',
    targetAudience: 'Empreendedores, infoprodutores, palestrantes e campanhas pontuais.',
    deliverables: [
      'Estrutura com narrativa clara do problema à solução',
      'Chamadas para ação bem distribuídas pela leitura',
      'Velocidade de carregamento rápida em conexões móveis',
      'Formulário leve ou botão direto para canal de vendas'
    ]
  },
  {
    id: 'catalogos',
    number: '03',
    title: 'Catálogos Digitais',
    tagline: 'Vitrine organizada de produtos e serviços para consulta rápida.',
    description: 'Organização visual dos seus produtos com fotos, medidas, especificações e preços, permitindo que o cliente escolha o que deseja antes de falar com você.',
    targetAudience: 'Lojas físicas, confeitarias, artesãos, ateliês e fornecedores.',
    deliverables: [
      'Separação por categorias e filtros intuitivos',
      'Páginas ou modais de detalhes com especificações',
      'Botão para solicitar orçamento do item específico',
      'Atualização simples e estruturada dos itens'
    ]
  },
  {
    id: 'portfolios',
    number: '04',
    title: 'Portfólios Profissionais',
    tagline: 'Seu trabalho apresentado com a seriedade que ele merece.',
    description: 'Sites para exibir projetos, fotografias, estudos de caso e trabalhos autorais com direção visual que valoriza suas competências reais sem exageros.',
    targetAudience: 'Designers, fotógrafos, arquitetos, desenvolvedores e criadores.',
    deliverables: [
      'Apresentação editorial dos projetos e estudos de caso',
      'Visualizadores de mídia em boa resolução',
      'Breve apresentação da sua abordagem de trabalho',
      'Canais diretos para contratações ou parcerias'
    ]
  },
  {
    id: 'reformulacao',
    number: '05',
    title: 'Reformulação de Sites',
    tagline: 'Modernização de sites desatualizados ou difíceis de usar.',
    description: 'Reconstrução da identidade visual, organização das informações e código de sites existentes que perderam a eficácia ou não funcionam bem no celular.',
    targetAudience: 'Negócios com sites antigos, lentos ou visualmente defasados.',
    deliverables: [
      'Diagnóstico da estrutura e dos pontos que precisam de melhoria',
      'Reescrita do código com tecnologias atuais e sem dependências pesadas',
      'Adaptação completa para navegadores e smartphones modernos',
      'Preservação dos conteúdos e links importantes do site anterior'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Conversa',
    subtitle: 'Compreender a necessidade real',
    description: 'Conversamos sobre o seu negócio, quem são seus clientes e o que o site precisa resolver na prática. Sem termos técnicos complicados ou reuniões desnecessárias.',
    deliverables: ['Definição do objetivo do site', 'Mapeamento do público-alvo', 'Alinhamento de referências e materiais']
  },
  {
    number: '02',
    title: 'Planejamento',
    subtitle: 'Estruturar antes de programar',
    description: 'Definimos a arquitetura de páginas, a ordem das seções, a redação dos textos e a direção visual que combina com seu nicho.',
    deliverables: ['Esboço da estrutura de navegação', 'Rascunho dos textos principais', 'Definição da paleta de cores e tipografia']
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    subtitle: 'Código limpo e atenção aos detalhes',
    description: 'Construção do site do zero utilizando código moderno e leve. Cada componente é testado em diferentes resoluções, de celulares compactos a monitores grandes.',
    deliverables: ['Implementação front-end responsiva', 'Interações sutis e confortáveis', 'Ajustes de contraste e acessibilidade']
  },
  {
    number: '04',
    title: 'Publicação',
    subtitle: 'Revisão e entrada em produção',
    description: 'Realizamos os testes finais de funcionamento, conferimos formulários e links e publicamos o projeto no domínio e hospedagem escolhidos.',
    deliverables: ['Configuração de domínio e hospedagem', 'Validação em dispositivos reais', 'Orientações práticas para manutenção']
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-preco',
    question: 'Quanto custa desenvolver um site?',
    answer: 'O valor depende diretamente do escopo: o número de páginas, a complexidade visual, a quantidade de conteúdo e as funcionalidades necessárias (como catálogo, formulários ou integrações). Depois de entender o que você precisa na etapa de conversa, passo uma proposta clara e fechada, sem custos ocultos.'
  },
  {
    id: 'faq-prazo',
    question: 'Quanto tempo leva para concluir um projeto?',
    answer: 'O prazo varia conforme o tipo de projeto. Uma landing page objetiva costuma levar de 1 a 2 semanas, enquanto um site institucional completo ou catálogo digital leva entre 2 a 4 semanas. O envio pontual de textos e fotos por parte do cliente ajuda a manter o cronograma ágil.'
  },
  {
    id: 'faq-dominio-hospedagem',
    question: 'Preciso contratar domínio e hospedagem?',
    answer: 'Sim, o domínio (exemplo: seunegocio.com.br) e o serviço de hospedagem são contratados em seu nome para que você mantenha total propriedade sobre eles. Se você tiver dúvidas de como fazer isso, oriento a escolha dos melhores serviços com custos acessíveis e auxilio na configuração.'
  },
  {
    id: 'faq-celular',
    question: 'O site funcionará bem no celular?',
    answer: 'Com certeza. O desenvolvimento é pensado desde o início para telas de smartphones, tablets e computadores. Textos permanecem legíveis, menus funcionam de maneira natural e os botões têm dimensões confortáveis para o toque.'
  },
  {
    id: 'faq-alteracoes',
    question: 'Posso solicitar alterações depois da publicação?',
    answer: 'Durante o desenvolvimento, temos rodadas de revisão planejadas para que você aprove cada etapa. Após a entrega, ofereço um período de suporte para eventuais ajustes pontuais e correções. Para novas seções ou mudanças maiores no futuro, combinamos manutenções pontuais conforme a necessidade.'
  },
  {
    id: 'faq-reformulacao',
    question: 'É possível reformular um site que já existe?',
    answer: 'Sim. Podemos manter o domínio atual e o conteúdo relevante, reconstruindo a parte visual e o código com tecnologias modernas para deixar o site mais rápido, bonito e fácil de usar.'
  }
];
