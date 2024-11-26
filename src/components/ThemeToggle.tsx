import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import SystemIcon from "./icons/SystemIcon";

const THEMES = ["Light", "Dark", "System"] as const;

const ThemeToggle: React.FC = () => {
  const [themePreference, setThemePreference] = useState("system");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Estado para saber si estamos en el cliente

  // Solo inicializar matchMedia y localStorage cuando estamos en el cliente
  const matchMedia = isClient ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  const getThemePreference = () => {
    return (
      localStorage.getItem("theme") ??
      (matchMedia?.matches ? "dark" : "light")
    );
  };

  const updateIcon = (theme: string) => {
    document.querySelectorAll<HTMLElement>(".theme-toggle-icon").forEach((element) => {
      element.style.transform = element.id === theme ? "scale(1)" : "scale(0)";
    });
  };

  const updateTheme = () => {
    const theme = getThemePreference();
    const isDark =
      theme === "dark" || (theme === "system" && matchMedia?.matches);

    updateIcon(theme);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  };

  // Usamos un useEffect para asegurarnos de que el código se ejecute solo en el cliente
  useEffect(() => {
    setIsClient(true); // Activamos la detección de cliente cuando el componente se monta

    if (isClient) {
      const handleThemeChange = () => updateTheme();

      matchMedia?.addEventListener("change", handleThemeChange);
      updateTheme();

      return () => {
        matchMedia?.removeEventListener("change", handleThemeChange);
      };
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) updateTheme();
  }, [themePreference, isClient]);

  const handleThemeClick = (theme: string) => {
    localStorage.setItem("theme", theme.toLowerCase());
    setThemePreference(theme.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <span className="sr-only">Elige el tema</span>
        <SunIcon id="light" className="theme-toggle-icon size-5 transition-all" />
        <MoonIcon id="dark" className="theme-toggle-icon absolute size-5 transition-all" />
        <SystemIcon id="system" className="theme-toggle-icon absolute size-5 transition-all" />
      </button>
      {isMenuOpen && (
        <div
          id="themes-menu"
          className="absolute scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
        >
          <ul>
            {THEMES.map((theme) => (
              <li
                key={theme}
                className="themes-menu-option px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
                onClick={() => handleThemeClick(theme)}
              >
                {theme}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
