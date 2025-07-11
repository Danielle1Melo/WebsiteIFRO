import { newsData } from "./data";
import { formatDate } from "./formatDate";

export function renderNews(): void {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    newsGrid.innerHTML = newsData.map(news => `
        <article class="news-card">
            <div class="news-image">
                <img src="${news.image}" alt="${news.title}">
                <div class="news-category">${news.category}</div>
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <div class="news-meta-item">
                         <svg data-lucide="calendar" width="16" height="16"></svg>
                        <span>${formatDate(news.date)}</span>
                    </div>
                    <div class="news-meta-item">
                        <svg data-lucide="clock" width="16" height="16"></svg>
                        <span>3 min</span>
                    </div>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <button class="text-link">
                    Leia mais
                    <svg data-lucide="arrow-right" width="16" height="16"></svg>
                </button>
            </div>
        </article>
    `).join('');
}