// Taylor Webvitation — light interactions only (no parallax)
(function () {
  const nav = document.getElementById('nav');

  // Navbar blur on scroll
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Details page: chip → open maps (placeholder demo)
  document.querySelectorAll('[data-map]').forEach(chip => {
    chip.addEventListener('click', e => {
      e.preventDefault();
      const which = chip.getAttribute('data-map');
      // Replace with real map links
      const link = which === 'ceremony'
        ? 'https://maps.apple.com/?q=Saint+Cecilia+Nashville'
        : 'https://maps.apple.com/?q=The+Hermitage+Hotel+Nashville';
      window.open(link, '_blank', 'noopener');
    });
  });

  // RSVP demo logic (front-end only)
  const gate = document.getElementById('gate');
  const form = document.getElementById('rsvpForm');
  const thanks = document.getElementById('thanks');
  if (gate && form && thanks) {
    gate.addEventListener('submit', e => {
      e.preventDefault();
      // Accept any non-empty code for demo
      const code = document.getElementById('code').value.trim();
      if (!code) return;
      gate.classList.add('hidden');
      form.classList.remove('hidden');
      document.getElementById('first').focus();
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      // Persist demo to localStorage (optional)
      try { localStorage.setItem('rsvp-demo', JSON.stringify(payload)); } catch (_) {}
      form.classList.add('hidden');
      thanks.classList.remove('hidden');
    });
  }
})();
