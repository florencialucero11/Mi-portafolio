import React from 'react';

export default function LanguageToggle({ lang }) {
  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLang', newLang);
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.location = url.toString(); // recarga con el nuevo lang
  };

  return (
    <button
      onClick={toggleLang}
      className="px-4 py-2 rounded bg-primary text-bgDarker font-semibold hover:bg-primaryLight transition-colors"
    >
      {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    </button>
  );
}
