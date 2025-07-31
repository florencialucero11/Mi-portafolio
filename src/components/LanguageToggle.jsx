import { useEffect, useState } from 'react';

export default function LanguageToggle( {lang }) {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsEnglish(window.location.pathname.startsWith('/en'));
    }
  }, []);

  const toggleLang = () => {
    if (isEnglish) {
      window.location.href = '/';
    } else {
      window.location.href = '/en/';
    }
  };

  return (
    <button
      onClick={toggleLang}
      className="px-2 py-1 text-sm border border-primary rounded hover:bg-primary hover:text-bgDarker transition"
    >
      {isEnglish ? 'ES' : 'EN'}
    </button>
  );
}

