// RePaws — Sales Page Interactivity (Business Edition)
(() => {
  // ---------- Product database ----------
  const PRODUCTS = {
    shampoo: {
      sku: 'RPW-SHP-01',
      name: 'Pineapple Shampoo',
      category: 'Skin & Coat Care',
      price: 13,
      priceOriginal: 18,
      rating: '4.5 / 5.0 · 312 reviews',
      image: 'assets/images/product-shampoo.jpg',
      views: ['front', 'angle', 'macro', 'lifestyle'],
      scents: [
        { id: 'pineapple', label: 'Pineapple Original', note: 'Signature' },
        { id: 'coconut',   label: 'Coconut Breeze',    note: '' },
        { id: 'lavender',  label: 'Lavender Calm',     note: 'Sensitive skin' },
        { id: 'oatmeal',   label: 'Oatmeal Soothe',    note: 'Itch relief' }
      ],
      sizes: [
        { id: 'sm', label: '250 ml',  priceMul: 0.62, priceOrigMul: 0.62 },
        { id: 'md', label: '500 ml',  priceMul: 1,    priceOrigMul: 1, default: true },
        { id: 'lg', label: '1000 ml', priceMul: 1.85, priceOrigMul: 1.85 }
      ],
      desc: 'A premium 3-in-1 grooming shampoo formulated with bromelain enzyme recovered from Vietnamese pineapple fiber. Cleanses deeply, deodorizes for up to 48 hours, and conditions in one pass. Designed for sensitive skin, suitable for cats and dogs, and FDA registered for the US market.',
      overview: [
        '3-in-1 cleansing, deodorizing, and conditioning action',
        '4× scent retention (up to 48 hours) via encapsulation technology',
        'Bromelain enzyme from pineapple by-product (80–85% recovery rate)',
        '100% plant-sourced — no parabens, sulfates, or synthetic fragrance',
        'Recommended for sensitive skin (≈ 30% of US pet population)'
      ],
      ingredients: [
        { name: 'Bromelain Enzyme', desc: 'From Vietnamese pineapple fiber — enzymatic cleanser & anti-inflammatory.' },
        { name: 'Soapberry Saponin', desc: 'Sulfate-free natural surfactant from Sapindus mukorossi.' },
        { name: 'Glycerin (vegetable)', desc: 'Deep moisturizer — locks hydration in coat & skin.' },
        { name: 'Vitamin B5 / E complex', desc: 'Strengthens coat, prevents breakage, adds shine.' },
        { name: 'Citric acid', desc: 'pH balancer at 5.5–7.0 (matches canine skin barrier).' },
        { name: 'Natural pineapple essence', desc: 'Subtle scent, no synthetic fragrance.' }
      ],
      how: [
        'Wet your pet thoroughly with warm water.',
        'Apply a quarter-sized amount of shampoo and massage into a rich lather.',
        'Avoid eyes and inner ears. Let foam sit for 60–90 seconds for the enzyme to act.',
        'Rinse fully until water runs clear. Towel-dry, then air-dry or blow on low heat.',
        'For best results, follow with RePaws Nourishing Pet Spray between baths.'
      ],
      specs: {
        'SKU': 'RPW-SHP-01',
        'Volume': '500 ml (16.9 fl oz)',
        'Category': 'Skin & Coat Care',
        'For pets': 'Dogs & cats (all breeds)',
        'pH range': '5.5 – 7.0',
        'Heavy metals': '≤ 10 ppm',
        'Microbial count': '≤ 100 CFU/g',
        'Shelf life': '24 months unopened',
        'Manufactured at': 'GMP / ISO 22716 OEM, Vietnam',
        'Certifications': 'ECOCERT · FDA · VNTEST'
      }
    },
    spray: {
      sku: 'RPW-SPR-01',
      name: 'Nourishing Pet Spray',
      category: 'Between-Bath Care',
      price: 13,
      priceOriginal: 16,
      rating: '4.4 / 5.0 · 168 reviews',
      image: 'assets/images/product-spray.jpg',
      views: ['front', 'angle', 'macro', 'lifestyle'],
      scents: [
        { id: 'pineapple', label: 'Pineapple Original', note: 'Signature' },
        { id: 'mint',      label: 'Fresh Mint',         note: 'Cooling' },
        { id: 'citrus',    label: 'Citrus Burst',       note: 'Energizing' }
      ],
      sizes: [
        { id: 'sm', label: '250 ml', priceMul: 0.62, priceOrigMul: 0.62 },
        { id: 'md', label: '500 ml', priceMul: 1,    priceOrigMul: 1, default: true }
      ],
      desc: 'A no-rinse leave-in spray that refreshes skin, neutralizes odor on contact, and locks in scent up to four times longer than traditional pet sprays. Probiotic fermentation makes the formula compatible with every breed and skin type — even the most sensitive.',
      overview: [
        'Instant odor neutralization on contact',
        '4× scent retention via proprietary encapsulation',
        'Probiotic-fermented base — 100% pet-safe across breeds',
        'Soothes irritation between baths',
        'Spray nozzle delivers an even mist; no flooding the coat'
      ],
      ingredients: [
        { name: 'Bromelain Enzyme', desc: 'Mild enzymatic deodorizer from pineapple fiber.' },
        { name: 'Probiotic Ferment Filtrate', desc: 'Skin-microbiome-friendly base, replaces alcohol.' },
        { name: 'Aloe Vera Extract', desc: 'Calms redness and minor irritation.' },
        { name: 'Panthenol (Pro-vitamin B5)', desc: 'Hydrates skin and coat between baths.' },
        { name: 'Encapsulated Fragrance', desc: 'Time-release pineapple-coconut, 48h hold.' },
        { name: 'Purified water', desc: 'USP-grade, residue-free carrier.' }
      ],
      how: [
        'Hold the bottle 15–20 cm from your pet\'s coat.',
        'Mist evenly across body, avoiding eyes, ears and mouth.',
        'Massage gently with hand or brush for 10–15 seconds.',
        'No rinsing required. Reapply every 2–3 days or after outdoor activity.',
        'Pair with the Pineapple Shampoo for full odor management.'
      ],
      specs: {
        'SKU': 'RPW-SPR-01',
        'Volume': '500 ml (16.9 fl oz)',
        'Category': 'Between-Bath Care',
        'For pets': 'Dogs & cats (all breeds)',
        'Format': 'Leave-in mist',
        'pH range': '5.5 – 6.5',
        'Skin irritation': 'Zero (VNTEST verified)',
        'Shelf life': '24 months unopened',
        'Manufactured at': 'GMP / ISO 22716 OEM, Vietnam',
        'Certifications': 'ECOCERT · FDA · VNTEST'
      }
    },
    balm: {
      sku: 'RPW-BLM-01',
      name: 'Pineapple Pet Balm',
      category: 'Nose, Mouth & Paw',
      price: 20,
      priceOriginal: 25,
      rating: '4.6 / 5.0 · 94 reviews',
      image: 'assets/images/product-balm.jpg',
      views: ['front', 'angle', 'macro', 'lifestyle'],
      scents: [
        { id: 'original', label: 'Unscented Original', note: 'Lick-safe' },
        { id: 'honey',    label: 'Pineapple Honey',    note: 'Subtle' }
      ],
      sizes: [
        { id: 'sm', label: '100 g',  priceMul: 0.45, priceOrigMul: 0.45 },
        { id: 'md', label: '500 g',  priceMul: 1,    priceOrigMul: 1, default: true },
        { id: 'lg', label: '1000 g', priceMul: 1.85, priceOrigMul: 1.85 }
      ],
      desc: 'A multi-area restorative balm formulated for dry noses, cracked paw pads, and irritated mouth folds. Lick-safe, weather-resistant, and packed in recyclable PCR — built for daily use through every season including extreme winter and summer pavement.',
      overview: [
        'Restores cracked paw pads and dry noses in 3–5 days',
        'Lick-safe formula — no toxic ingredients',
        'Forms a protective barrier against hot pavement, ice, and salt',
        'Recyclable PCR jar with soy-ink labelling',
        'Premium 500 g size — value for medium-to-large breeds'
      ],
      ingredients: [
        { name: 'Bromelain Enzyme', desc: 'Aids skin renewal on cracked and calloused areas.' },
        { name: 'Shea Butter (unrefined)', desc: 'Deep emollient, restores lipid barrier.' },
        { name: 'Coconut Oil (cold-pressed)', desc: 'Antimicrobial, lick-safe moisturizer.' },
        { name: 'Beeswax (yellow)', desc: 'Forms a breathable protective film.' },
        { name: 'Calendula Extract', desc: 'Soothes inflammation and supports healing.' },
        { name: 'Tocopherol (Vitamin E)', desc: 'Natural preservative and skin protectant.' }
      ],
      how: [
        'Clean the affected area with a soft, damp cloth.',
        'Scoop a pea-sized amount of balm onto clean fingertips.',
        'Massage gently into paw pads, nose, or mouth folds.',
        'Distract your pet for 60 seconds while the balm absorbs.',
        'Apply 1–2 times daily until skin restores; weekly for maintenance.'
      ],
      specs: {
        'SKU': 'RPW-BLM-01',
        'Net weight': '500 g (17.6 oz)',
        'Category': 'Nose · Mouth · Paw',
        'For pets': 'Dogs & cats (all breeds)',
        'Format': 'Solid balm in PCR jar',
        'Lick-safety': 'Verified non-toxic on ingestion',
        'Heavy metals': '≤ 10 ppm',
        'Shelf life': '24 months unopened',
        'Manufactured at': 'GMP / ISO 22716 OEM, Vietnam',
        'Certifications': 'ECOCERT · FDA · VNTEST'
      }
    }
  };

  const VIEW_LABELS = {
    front:     'Front',
    angle:     '3/4 Angle',
    macro:     'Macro',
    lifestyle: 'In Use'
  };

  // ---------- Cart ----------
  const cart = [];
  const cartEl = document.getElementById('cart');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartCountEl = document.getElementById('cartCount');
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.querySelector('.cart__close');
  const cartOverlay = document.querySelector('.cart__overlay');

  function openCart()  { cartEl.setAttribute('aria-hidden', 'false'); }
  function closeCart() { cartEl.setAttribute('aria-hidden', 'true'); }
  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  const formatUSD = (n) => '$' + n.toFixed(2);

  function addToCart(name, price, qty = 1) {
    const existing = cart.find(i => i.name === name);
    if (existing) existing.qty += qty;
    else cart.push({ name, price, qty });
    renderCart();
  }

  function renderCart() {
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
      const li = document.createElement('li');
      li.className = 'empty';
      li.textContent = 'Your cart is empty.';
      cartItemsEl.appendChild(li);
    } else {
      cart.forEach((item, idx) => {
        const li = document.createElement('li');
        const left = document.createElement('div');
        left.innerHTML = `<strong>${item.name}</strong><br/><span style="color:var(--muted);font-size:.8rem">Qty ${item.qty} · ${formatUSD(item.price)}</span>`;
        const right = document.createElement('div');
        right.style.textAlign = 'right';
        right.innerHTML = `<div>${formatUSD(item.price * item.qty)}</div>`;
        const remove = document.createElement('button');
        remove.className = 'remove-item';
        remove.textContent = 'Remove';
        remove.addEventListener('click', () => { cart.splice(idx, 1); renderCart(); });
        right.appendChild(remove);
        li.appendChild(left); li.appendChild(right);
        cartItemsEl.appendChild(li);
      });
    }
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    cartTotalEl.textContent = formatUSD(total);
    cartCountEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
  }

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.name, parseFloat(btn.dataset.price), 1);
      openCart();
      const original = btn.textContent;
      btn.textContent = 'Added to cart';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 1200);
    });
  });

  // ---------- Product Modal ----------
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalImageWrap = document.querySelector('.modal__image');
  const modalThumbs = document.getElementById('modalThumbs');
  const modalSku = document.getElementById('modalSku');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');
  const modalPriceOriginal = document.getElementById('modalPriceOriginal');
  const modalPriceSave = document.getElementById('modalPriceSave');
  const modalRating = document.getElementById('modalRating');
  const modalDesc = document.getElementById('modalDesc');
  const modalOverview = document.getElementById('modalOverview');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalHow = document.getElementById('modalHow');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalScents = document.getElementById('modalScents');
  const modalSizes = document.getElementById('modalSizes');
  const modalQtyEl = document.getElementById('modalQty');
  const modalAddBtn = document.getElementById('modalAdd');
  let modalQty = 1;
  let activeProductKey = null;
  let activeScent = null;
  let activeSize = null;

  function recalcPrice() {
    const p = PRODUCTS[activeProductKey];
    if (!p) return;
    const size = p.sizes.find(s => s.id === activeSize) || p.sizes[0];
    const price = p.price * size.priceMul;
    const orig  = p.priceOriginal * size.priceOrigMul;
    const save  = orig - price;
    const pct   = Math.round((save / orig) * 100);
    modalPrice.textContent = formatUSD(price);
    modalPriceOriginal.textContent = formatUSD(orig);
    modalPriceSave.textContent = `Save ${formatUSD(save)} · ${pct}%`;
  }

  function setView(viewKey) {
    if (!modalImageWrap) return;
    modalImageWrap.className = 'modal__image view-' + viewKey;
  }

  function openModal(key) {
    const p = PRODUCTS[key];
    if (!p) return;
    activeProductKey = key;
    modalQty = 1;
    modalQtyEl.textContent = modalQty;
    activeScent = p.scents[0].id;
    activeSize  = (p.sizes.find(s => s.default) || p.sizes[0]).id;

    modalImage.src = p.image;
    modalImage.alt = `RePaws ${p.name}`;
    setView(p.views[0]);
    modalSku.textContent = `SKU · ${p.sku}`;
    modalTitle.textContent = p.name;
    modalCategory.textContent = p.category;
    modalRating.textContent = p.rating;
    modalDesc.textContent = p.desc;

    modalOverview.innerHTML = p.overview.map(x => `<li>${x}</li>`).join('');
    modalIngredients.innerHTML = p.ingredients.map(x => `<li><strong>${x.name}</strong><span>${x.desc}</span></li>`).join('');
    modalHow.innerHTML = p.how.map(x => `<li>${x}</li>`).join('');
    modalSpecs.innerHTML = Object.entries(p.specs).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

    // Scent options
    modalScents.innerHTML = p.scents.map((s, i) => `
      <button type="button" class="variant${s.id === activeScent ? ' is-active' : ''}" data-scent="${s.id}">
        <span class="variant__label">${s.label}</span>
        ${s.note ? `<span class="variant__note">${s.note}</span>` : ''}
      </button>
    `).join('');
    modalScents.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        activeScent = b.dataset.scent;
        modalScents.querySelectorAll('button').forEach(x => x.classList.toggle('is-active', x === b));
      });
    });

    // Size options
    modalSizes.innerHTML = p.sizes.map(s => {
      const price = p.price * s.priceMul;
      return `
        <button type="button" class="variant variant--size${s.id === activeSize ? ' is-active' : ''}" data-size="${s.id}">
          <span class="variant__label">${s.label}</span>
          <span class="variant__price">${formatUSD(price)}</span>
        </button>
      `;
    }).join('');
    modalSizes.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        activeSize = b.dataset.size;
        modalSizes.querySelectorAll('button').forEach(x => x.classList.toggle('is-active', x === b));
        recalcPrice();
      });
    });

    // Gallery thumbnails (multiple views of the same product image)
    modalThumbs.innerHTML = p.views.map((v, i) => `
      <li class="${i === 0 ? 'is-active' : ''} thumb-${v}" data-view="${v}" title="${VIEW_LABELS[v]}">
        <div class="thumb__inner thumb__inner--${v}">
          <img src="${p.image}" alt="${VIEW_LABELS[v]}" />
        </div>
        <span class="thumb__caption">${VIEW_LABELS[v]}</span>
      </li>
    `).join('');
    modalThumbs.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        const view = li.dataset.view;
        modalThumbs.querySelectorAll('li').forEach(x => x.classList.toggle('is-active', x === li));
        setView(view);
      });
    });

    // Reset tabs
    document.querySelectorAll('.modal__tab').forEach(t => t.classList.toggle('is-active', t.dataset.tab === 'overview'));
    document.querySelectorAll('.modal__pane').forEach(pn => pn.classList.toggle('is-active', pn.dataset.pane === 'overview'));

    recalcPrice();
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open');
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-modal-open');
  }

  document.querySelectorAll('.card[data-product]').forEach(card => {
    const open = () => openModal(card.dataset.product);
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart')) return;
      open();
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  document.querySelectorAll('.modal__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;
      document.querySelectorAll('.modal__tab').forEach(t => t.classList.toggle('is-active', t === tab));
      document.querySelectorAll('.modal__pane').forEach(pn => pn.classList.toggle('is-active', pn.dataset.pane === key));
    });
  });

  document.querySelectorAll('.qty-btn').forEach(b => {
    b.addEventListener('click', () => {
      if (b.dataset.act === 'inc') modalQty += 1;
      else if (modalQty > 1) modalQty -= 1;
      modalQtyEl.textContent = modalQty;
    });
  });

  modalAddBtn.addEventListener('click', () => {
    if (!activeProductKey) return;
    const p = PRODUCTS[activeProductKey];
    const size  = p.sizes.find(s => s.id === activeSize) || p.sizes[0];
    const scent = p.scents.find(s => s.id === activeScent) || p.sizes[0];
    const variantName = `${p.name} · ${size.label} · ${scent.label}`;
    const price = p.price * size.priceMul;
    addToCart(variantName, price, modalQty);
    const original = modalAddBtn.textContent;
    modalAddBtn.textContent = `Added ${modalQty} to cart`;
    modalAddBtn.disabled = true;
    setTimeout(() => {
      modalAddBtn.textContent = original; modalAddBtn.disabled = false;
      closeModal(); openCart();
    }, 900);
  });

  // ---------- Subscribe form ----------
  const form = document.getElementById('subscribeForm');
  const note = document.getElementById('subscribeNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        note.style.color = '#E0997C';
        note.textContent = 'Please enter a valid email address.';
        return;
      }
      note.style.color = '';
      note.textContent = `Thank you. Your 15% subscription code has been sent to ${email}.`;
      form.reset();
    });
  }

  // ---------- Mobile menu ----------
  const burger = document.querySelector('.nav__burger');
  const links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      links.style.display = open ? '' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--ivory)';
      links.style.padding = '20px';
      links.style.borderBottom = '1px solid var(--line)';
      links.style.gap = '14px';
    });
  }

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.card, .ingredient, .review, .story__panel-stats > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(el);
  });

  renderCart();
})();
