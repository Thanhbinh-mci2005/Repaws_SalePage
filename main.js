// RePaws — Sales Page Interactivity
(() => {
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

  function formatUSD(n) { return '$' + n.toFixed(2); }

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
        remove.addEventListener('click', () => {
          cart.splice(idx, 1);
          renderCart();
        });
        right.appendChild(remove);
        li.appendChild(left);
        li.appendChild(right);
        cartItemsEl.appendChild(li);
      });
    }
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    cartTotalEl.textContent = formatUSD(total);
    cartCountEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
  }

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const existing = cart.find(i => i.name === name);
      if (existing) existing.qty += 1;
      else cart.push({ name, price, qty: 1 });
      renderCart();
      openCart();

      const original = btn.textContent;
      btn.textContent = 'Added to cart';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 1200);
    });
  });

  // Subscribe form
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

  // Mobile menu toggle
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

  // Reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.card, .ingredient, .review, .story__stats > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(el);
  });

  renderCart();
})();
