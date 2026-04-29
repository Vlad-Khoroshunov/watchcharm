document.addEventListener('DOMContentLoaded', () => {
  const saleItems = document.querySelectorAll('.sale-item');
  const salePreviewImg = document.querySelector('.sale-preview-img');

  saleItems.forEach(item => {
    item.addEventListener('click', () => {
      saleItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const thumb = item.querySelector('img');
      if (!thumb) return;

      // если нужен 1x src
      const src = thumb.getAttribute('src');

      // если хочешь поддержать srcset (2x), берём srcset и ставим его в preview
      const srcset = thumb.getAttribute('srcset') || '';
      if (srcset) {
        salePreviewImg.setAttribute('srcset', srcset);
      } else {
        salePreviewImg.removeAttribute('srcset');
      }

      salePreviewImg.setAttribute('src', src);
    });
  });
});