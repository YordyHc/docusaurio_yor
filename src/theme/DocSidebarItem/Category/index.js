import React from "react";
import OriginalCategory from "@theme-original/DocSidebarItem/Category";
import { LiaTerminalSolid } from "react-icons/lia";
import {
  FaDesktop,
  FaCode,
  FaFolderOpen,
  FaMobileScreenButton,
  FaPaperclip,
  FaPuzzlePiece,
  FaSpider,
  FaStreetView,
  FaWandMagicSparkles,
  FaWifi,
  FaWindowRestore,
} from "react-icons/fa6";

import { BsSpeedometer2 } from "react-icons/bs";
import { LuAppWindow } from "react-icons/lu";
import { BiSolidLock } from "react-icons/bi";
import { SiLighthouse } from "react-icons/si";

const iconClassName = "sidebar-item-icon";

export default function Category(props) {
  const { item } = props;

  const getIcon = (label) => {
    switch (label) {
      case " Tutorial - Basics":
        return <FaPaperclip className={iconClassName} />;
      case " Tutorial - Extras":
        return <FaPuzzlePiece className={iconClassName} />;
      case "Interfaz grafica":
        return <FaDesktop className={iconClassName} />;
      case "Pestañas":
        return <FaWindowRestore className={iconClassName} />;
      case "Responsive / Mobile":
        return <FaMobileScreenButton className={iconClassName} />;
      case "Casos de uso practicos":
        return <FaStreetView className={iconClassName} />;
      case "Trucos avanzados":
        return <FaWandMagicSparkles className={iconClassName} />;
      case "Elements":
        return <FaCode className={iconClassName} />;
      case "Console":
        return <LiaTerminalSolid className={iconClassName} />;
      case "Source":
        return <FaSpider className={iconClassName} />;
      case "Network":
        return <FaWifi className={iconClassName} />;
      case "Performance":
        return <BsSpeedometer2 className={iconClassName} />;
      case "Application":
        return <LuAppWindow className={iconClassName} />;
      case "Security":
        return <BiSolidLock className={iconClassName} />;
      case "Lighthouse":
        return <SiLighthouse className={iconClassName} />;
      default:
        return <FaFolderOpen className={iconClassName} />;
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
