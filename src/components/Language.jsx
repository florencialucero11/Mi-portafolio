import React, { useState, useEffect } from "react";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    // Detecta el parámetro lang en la URL
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");

    if (urlLang === "es" || urlLang === "en") {
      setLang(urlLang);
    } else {
      setLang("es"); // idioma por defecto
    }
  }, []);

  // Clona a los hijos para pasarles el prop lang
  return React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, { lang }) : child
  );
}
