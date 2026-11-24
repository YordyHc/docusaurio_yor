import React from "react";
import OriginalCategory from "@theme-original/DocSidebarItem/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faPuzzlePiece,
  faFolderOpen,
  faDesktop,
  faMobileScreenButton,
  faStreetView,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";

export default function Category(props) {
  const { item } = props;

  const getIcon = (label) => {
    switch (label) {
      case " Tutorial - Basics":
        return (
          <FontAwesomeIcon icon={faPaperclip} className="sidebar-item-icon" />
        );
      case " Tutorial - Extras":
        return (
          <FontAwesomeIcon icon={faPuzzlePiece} className="sidebar-item-icon" />
        );
      case "Interfaz grafica":
        return (
          <FontAwesomeIcon icon={faDesktop} className="sidebar-item-icon" />
        );
      case "Pestañas":
        return (
          <FontAwesomeIcon
            icon={faWindowRestore}
            className="sidebar-item-icon"
          />
        );
      case "Responsive / Mobile":
        return (
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            className="sidebar-item-icon"
          />
        );
      case "Casos de uso practicos":
        return (
          <FontAwesomeIcon icon={faStreetView} className="sidebar-item-icon" />
        );
      case "Trucos avanzados":
        return (
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            className="sidebar-item-icon"
          />
        );
      default:
        return (
          <FontAwesomeIcon icon={faFolderOpen} className="sidebar-item-icon" />
        );
    }
  };

  return (
    <OriginalCategory
      {...props}
      item={{
        ...item,
        label: (
          <span className="sidebar-item-label">
            {getIcon(item.label)}
            {item.label}
          </span>
        ),
      }}
    />
  );
}
