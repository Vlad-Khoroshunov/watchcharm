const showMoreBtn = document.getElementById('show-more-btn');

showMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.catalog-item:nth-child(n+5)')
        .forEach(item => item.classList.add('visible'));
    showMoreBtn.style.display = 'none';
});