document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langToggle');
  if (!btn) return; // Evita error si el botón no existe

  btn.addEventListener('click', () => {
    const currentLang = new URLSearchParams(window.location.search).get('lang');
    const newLang = currentLang === 'es' ? 'en' : 'es';

    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.location.href = url.toString();
  });

  // Cambia el texto del botón según idioma actual
  const currentLang = new URLSearchParams(window.location.search).get('lang');
  btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
});
