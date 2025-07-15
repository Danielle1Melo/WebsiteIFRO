import { eventsData, newsData, quickLinksData } from "./data";
import { formatDate } from "./formatDate";
import { getIconSVG } from "./getIcons";
import { getStatusText } from "./getStatusText";

export function renderNews(): void {
  const newsGrid = document.getElementById("newsGrid");
  if (!newsGrid) return;

  newsGrid.innerHTML = newsData
    .map(
      (news) => `
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
    `
    )
    .join("");
}

export function renderEvents(): void {
  const eventsList = document.getElementById("eventsList");
  if (!eventsList) return;

  eventsList.innerHTML = eventsData
    .map(
      (event) => `
        <div class="event-card">
            <div class="event-status ${event.status}">${getStatusText(
        event.status
      )}</div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-description">${event.description}</p>
            <div class="event-details">
                <div class="event-detail">
                    <svg data-lucide="calendar" width="16" height="16"></svg>
                    <span>${formatDate(event.date)}</span>
                </div>
                <div class="event-detail">
                    <svg data-lucide="clock" width="16" height="16"></svg>
                    <span>${event.time}</span>
                </div>
                <div class="event-detail">
                    <svg data-lucide="map-pin" width="16" height="16"></svg>
                    <span>${event.location}</span>
                </div>
                <div class="event-detail">
                    <svg data-lucide="users" width="16" height="16"></svg>
                    <span>${event.participants}</span>
                </div>
            </div>
            <button class="event-button">Inscrever-se</button>
        </div>
    `
    )
    .join("");
}

export function renderQuickLinks(): void {
  const quickLinksGrid = document.getElementById("quickLinksGrid");
  if (!quickLinksGrid) return;

  quickLinksGrid.innerHTML = quickLinksData
    .map(
      (link) => `
        <a href="${link.href}" class="quick-link-card">
            <div class="quick-link-content">
                <div class="quick-link-icon ${link.color}">
                    ${getIconSVG(link.icon)}
                </div>
                <div class="quick-link-text">
                    <h3>${link.title}</h3>
                    <p>${link.description}</p>
                </div>
            </div>
        </a>
    `
    )
    .join("");
}
