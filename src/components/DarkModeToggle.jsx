import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false); // default: false
  const [mounted, setMounted] = useState(false); // saber si estamos en cliente

  useEffect(() => {
    setMounted(true); // ahora sí estamos en el cliente
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-primaryLight p-2 rounded-full hover:bg-bgLight transition"
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
