import type  { NewsItem } from "./interfaces"

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Campus Vilhena promove ações na Semana Nacional do Meio Ambiente",
        excerpt: "A Semana Nacional do Meio Ambiente foi comemorada entre os dias 2 e 8 de junho no Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO) Campus Vilhena.",
        date: "2024-06-08",
        category: "Meio Ambiente",
        image: "/images/new1.jpg"
    },
    {
        id: 2,
        title: "Processo Seletivo 2024 - Editais Publicados",
        excerpt: "Foram publicados os editais para o processo seletivo 2024 dos cursos técnicos integrados ao ensino médio.",
        date: "2024-06-05",
        category: "Educação",
        image: "/images/new2.jpg"
    },
    {
        id: 3,
        title: "Feira de Ciências 2024 - Inovação e Tecnologia",
        excerpt: "Estudantes apresentam projetos inovadores na Feira de Ciências do Campus Vilhena, demonstrando criatividade e conhecimento técnico.",
        date: "2024-06-03",
        category: "Ciência",
        image: "/images/new3.jpg"
    }
];