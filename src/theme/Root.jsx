import React, { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Evita que Font Awesome inyecte el CSS automáticamente
config.autoAddCss = false;

export default function Root({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector(".navbar")
        ?.classList.toggle("navbar--scrolled", window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return children;
}
