/* Diyar-e-Libas product page behaviour. Page data comes from window.PRODUCT. */
(function(){
  const P = window.PRODUCT || {};
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

  // mobile menu
  const menuBtn = $('#menu-toggle'), nav = $('#primary-nav');
  if (menuBtn && nav) menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  // gallery + colour
  const main = $('#pdp-main-img'), label = $('#pdp-view-label');
  const views = { fabric:['Supplier photo',''], detail:['Detail view','is-detail'], presentation:['Presentation view','is-present'], styling:['Styling inspiration',''] };
  let shade = P.shades[0], view = 'fabric';

  function render(){
    main.className = views[view][1];
    main.src = view === 'styling' ? P.styling : shade.img;
    main.alt = view === 'styling'
      ? 'Styling inspiration; not an exact representation of the selected shade'
      : P.name + ' – ' + shade.name + ' (supplier photo)';
    label.textContent = views[view][0];
    $$('.pdp-thumb').forEach(t => {
      const on = t.dataset.view === view;
      t.classList.toggle('active', on); t.setAttribute('aria-pressed', String(on));
      if (t.dataset.view !== 'styling') $('img', t).src = shade.img;
    });
    $$('.swatch-btn').forEach(b => {
      const on = Number(b.dataset.i) === P.shades.indexOf(shade);
      b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on));
    });
    $('#selected-shade').textContent = shade.name;
    const pi = $('#panel-img'); if (pi) pi.src = shade.img;
  }
  $$('.swatch-btn').forEach(b => b.addEventListener('click', () => { shade = P.shades[Number(b.dataset.i)]; if (view === 'styling') view = 'fabric'; render(); }));
  $$('.pdp-thumb').forEach(t => t.addEventListener('click', () => { view = t.dataset.view; render(); }));

  // quantity
  const qty = $('#qty');
  const clamp = v => Math.min(20, Math.max(1, parseInt(v, 10) || 1));
  $('#qty-minus').addEventListener('click', () => qty.value = clamp(+qty.value - 1));
  $('#qty-plus').addEventListener('click', () => qty.value = clamp(+qty.value + 1));
  qty.addEventListener('change', () => qty.value = clamp(qty.value));

  // add to cart (prototype: counter only, no checkout)
  let count = 0;
  $('#add-cart').addEventListener('click', () => {
    const n = clamp(qty.value); count += n;
    const c = $('#cart-count'); if (c) c.textContent = count;
    $('#cart-msg').textContent = n + ' × ' + P.name + ' (' + shade.name + ') added. Prototype: checkout is not connected yet.';
  });

  // tabs
  const tabs = $$('.tab-btn');
  function selectTab(t, focus){
    tabs.forEach(x => { const on = x === t; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
    if (focus) t.focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => selectTab(t));
    t.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') selectTab(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') selectTab(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  render();
})();
