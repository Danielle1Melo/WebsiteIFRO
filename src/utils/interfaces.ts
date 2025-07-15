export interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    participants: string;
    description: string;
    status: 'open' | 'limited' | 'confirmed';
}

export interface QuickLink {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    href: string;
}

