import React, { useEffect } from "react";

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
