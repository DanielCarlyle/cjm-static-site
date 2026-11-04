
(() => {
  'use strict';

  /* ==========================================
     Mobile Navigation
  ========================================== */

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-list');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');

    toggle.setAttribute('aria-expanded', String(open));
  });

  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });


  /* ==========================================
     Editing Work Gallery Filters

     Supports multiple categories per poster:
     all
     scripted
     documentary
     vfx-editor
     trailer-editor
  ========================================== */

  document.querySelectorAll('[data-filter]').forEach(button => {

    button.addEventListener('click', () => {

      const filter = button.dataset.filter;

      // Update active filter button
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.setAttribute(
          'aria-pressed',
          String(b === button)
        );
      });

      // Filter gallery posters
      document.querySelectorAll('.gallery-item').forEach(item => {

        const categories = (item.dataset.category || '')
          .split(/\s+/);

        item.hidden = (
          filter !== 'all' &&
          !categories.includes(filter)
        );

      });

    });

  });


  /* ==========================================
     Vimeo Video Players
  ========================================== */

  document.querySelectorAll('.video-launch').forEach(button => {

    button.addEventListener('click', () => {

      const id = button.dataset.vimeoId;
      const start = Number(button.dataset.start || 0);

      if (!/^\d+$/.test(id)) return;

      const iframe = document.createElement('iframe');

      iframe.src =
        `https://player.vimeo.com/video/${id}` +
        `?title=0&byline=0&portrait=0&autoplay=1` +
        (start ? '#t=' + start + 's' : '');

      iframe.title = button.dataset.title || 'Vimeo video';

      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';

      button.replaceWith(iframe);

    });

  });


  /* ==========================================
     Back to Top Button
  ========================================== */

  const back = document.querySelector('.back-top');

  const update = () => {
    back?.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', update, {
    passive: true
  });

  update();

  back?.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches ? 'instant' : 'smooth'
    });

  });


  /* ==========================================
     Portfolio Image Lightbox
  ========================================== */

  const dialog = document.querySelector('.lightbox');

  document.querySelectorAll('[data-lightbox]').forEach(a => {

    a.addEventListener('click', e => {

      if (!dialog?.showModal) return;

      e.preventDefault();

      const img = dialog.querySelector('img');

      img.src = a.href;
      img.alt = a.querySelector('img')?.alt || '';

      dialog.showModal();

    });

  });

  // Close lightbox using close button
  dialog?.querySelector('.lightbox-close')?.addEventListener(
    'click',
    () => dialog.close()
  );

  // Close lightbox by clicking outside the image
  dialog?.addEventListener('click', e => {

    if (e.target === dialog) {
      dialog.close();
    }

  });

})();
