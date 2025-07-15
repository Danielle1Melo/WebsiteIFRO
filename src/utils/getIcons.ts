export function getIconSVG(iconName: string): string {
    const icons: { [key: string]: string } = {
        'graduation-cap': `<svg data-lucide="graduation-cap" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`,
        'file-text': `<svg data-lucide="file-text" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`,
        'book-open': `<svg data-lucide="book-open" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`,
        'calendar': `<svg data-lucide="calendar" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`,
        'award': `<svg data-lucide="award" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`,
        'users': `<svg data-lucide="users" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>`
    };
    return icons[iconName] || '';
}