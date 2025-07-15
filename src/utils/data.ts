import type  { Event, NewsItem, QuickLink } from "./interfaces"

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Campus Vilhena promove ações na Semana Nacional do Meio Ambiente",
        excerpt: "A Semana Nacional do Meio Ambiente foi comemorada entre os dias 2 e 8 de junho no Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO) Campus Vilhena.",
        date: "2024-06-08",
        category: "Meio Ambiente",
        image: "assets/images/new1.jpg"
    },
    {
        id: 2,
        title: "Processo Seletivo 2024 - Editais Publicados",
        excerpt: "Foram publicados os editais para o processo seletivo 2024 dos cursos técnicos integrados ao ensino médio.",
        date: "2024-06-05",
        category: "Educação",
        image: "assets/images/new2.jpg"
    },
    {
        id: 3,
        title: "Feira de Ciências 2024 - Inovação e Tecnologia",
        excerpt: "Estudantes apresentam projetos inovadores na Feira de Ciências do Campus Vilhena, demonstrando criatividade e conhecimento técnico.",
        date: "2024-06-03",
        category: "Ciência",
        image: "assets/images/new3.jpg"
    }
];

export const eventsData: Event[] = [
    {
        id: 1,
        title: "Semana de Tecnologia 2024",
        date: "2024-07-15",
        time: "08:00",
        location: "Auditório Principal",
        participants: "200+ inscritos",
        description: "Palestras, workshops e apresentações sobre as últimas tendências em tecnologia.",
        status: "open"
    },
    {
        id: 2,
        title: "Workshop de Inovação",
        date: "2024-07-20",
        time: "14:00",
        location: "Laboratório de Informática",
        participants: "50 vagas",
        description: "Desenvolvimento de projetos inovadores com foco em sustentabilidade.",
        status: "limited"
    },
    {
        id: 3,
        title: "Feira de Profissões",
        date: "2024-07-25",
        time: "09:00",
        location: "Pátio Central",
        participants: "Entrada livre",
        description: "Conheça os cursos oferecidos e as oportunidades de carreira.",
        status: "confirmed"
    }
];

export const quickLinksData: QuickLink[] = [
    {
        id: 1,
        title: "Portal do Aluno",
        description: "Acesse notas, horários e informações acadêmicas",
        icon: "graduation-cap",
        color: "blue",
        href: "#"
    },
    {
        id: 2,
        title: "Processos Seletivos",
        description: "Editais e informações sobre seleções",
        icon: "file-text",
        color: "green",
        href: "#"
    },
    {
        id: 3,
        title: "Nossos Cursos",
        description: "Conheça os cursos oferecidos",
        icon: "book-open",
        color: "purple",
        href: "#"
    },
    {
        id: 4,
        title: "Calendário Acadêmico",
        description: "Datas importantes e eventos",
        icon: "calendar",
        color: "orange",
        href: "#"
    },
    {
        id: 5,
        title: "Extensão e Pesquisa",
        description: "Projetos e oportunidades",
        icon: "award",
        color: "red",
        href: "#"
    },
    {
        id: 6,
        title: "Ouvidoria",
        description: "Canal de comunicação com a comunidade",
        icon: "users",
        color: "teal",
        href: "#"
    }
];