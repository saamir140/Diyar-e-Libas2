const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const open = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const swatchImages = {
  ww: ['collection1_01.webp','collection1_02.webp','collection1_03.webp','collection1_04.webp','collection1_05.webp','collection1_06.webp','collection1_07.webp','collection1_08.webp'],
  lw: ['collection2_01.webp','collection2_02.webp','collection2_03.webp','collection2_04.webp','collection2_05.webp','collection2_06.webp','collection2_07.webp']
};
document.querySelectorAll('.swatch').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const index = Number(button.dataset.index);
    const card = button.closest('.product-card');
    const image = card.querySelector('.product-image img');
    const filename = swatchImages[product]?.[index - 1];
    if (filename) {
      image.src = `assets/products/${filename}`;
      image.alt = `${product === 'ww' ? 'Wash & Wear' : 'Legend Winter Cotton'} supplied photo sample ${index}; exact colour name to be confirmed`;
    }
    card.querySelectorAll('.swatch').forEach(s => {
      s.classList.toggle('active', s === button);
      s.setAttribute('aria-pressed', String(s === button));
    });
    const note = document.getElementById(`${product}-swatch-note`);
    if (note) note.textContent = `Sample ${index} selected · exact colour names to be confirmed`;
  });
});
