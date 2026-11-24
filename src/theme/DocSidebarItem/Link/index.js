import React from "react";
import OriginalLink from "@theme-original/DocSidebarItem/Link";
import { FaHouse, FaFileLines } from "react-icons/fa6";

const iconClassName = "sidebar-item-icon";

export default function Link(props) {
  const { item } = props;

  const getIcon = (label) => {
    switch (label) {
      case "Introducción (DevTools)":
        return <FaHouse className={iconClassName} />;

      default:
        return <FaFileLines className={iconClassName} />;
    }
  };

  return (
    <OriginalLink
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
