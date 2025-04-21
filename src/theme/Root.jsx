import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Evita que Font Awesome inyecte el CSS automáticamente
config.autoAddCss = false;

export default function Root({ children }) {
  return <>{children}</>;
}
