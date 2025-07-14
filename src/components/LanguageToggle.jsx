import React from 'react';

export default function LanguageToggle({ lang }) {
  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('preferredLang', newLang);
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.location = url.toString(); 
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full bg-primary text-bgDarker text-sm font-semibold hover:bg-primaryLight transition-colors"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
