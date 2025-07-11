import { renderNews } from "./utils/renderers";

function setupMobileMenu(): void {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMobileMenu);
} else {
    setupMobileMenu();
}

function init(): void {

    renderNews();

    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}