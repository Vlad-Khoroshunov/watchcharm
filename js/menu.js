const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// закрытие при клике на ссылку
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

const navItems = document.querySelectorAll('.header-nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('current'));
        item.classList.add('current');
    });
});