"use client";
import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // Importar el componente de toggle de tema
import styles from "../styles/Header.module.css"; 

// Define tus elementos de navegación
const navItems = [
  { title: "Home", label: "home", url: "/#home" },
  { title: "Contacto", label: "contacto", url: "mailto:renatosolismedina99@gmail.com" },
];

// Componente Header
const Header: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        navLinks.forEach((link) => {
          if (entry.isIntersecting && link.getAttribute("aria-label") === entry.target.id) {
            link.classList.add("text-blue-500");
          } else {
            link.classList.remove("text-blue-500");
          }
        });
      });
    };

    const observer = new IntersectionObserver(callback, { root: null, rootMargin: "0px", threshold: 0.3 });

    sections.forEach((section) => observer.observe(section));

    // Cleanup function
    document.onvisibilitychange = () => {
      if (document.visibilityState === "hidden") observer.disconnect();
      else sections.forEach((section) => observer.observe(section));
    };

    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        //position: "fixed",
        position: "inherit",
        top: 0,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        //justifyContent: "center",
        justifyContent: "right",
        width: "100%",
        marginTop: "0.5rem",
      }}
    >
      <nav
        className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center ${styles.navbar}`}
        style={{
          animation: "nav-shadown 1s linear both",
        }}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
         {/* Enlace con la palabra "GitHub" que redirige a  perfil */}
         <a
          className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"
          aria-label="github"
          href="https://github.com/RenatoSolis" 
          target="_blank" // Para abrir el enlace en una nueva pestaña
          rel="noopener noreferrer" // Para mejorar la seguridad
        >
          GitHub
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
