import React from "react";
import OriginalLink from "@theme-original/DocSidebarItem/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFontAwesome } from "@fortawesome/free-solid-svg-icons";

export default function Link(props) {
  const { item } = props;

  const getIcon = (label) => {
    switch (label) {
      case "Introducción (DevTools)":
        return <FontAwesomeIcon icon={faHouse} className="sidebar-item-icon" />;
      default:
        return (
          <FontAwesomeIcon icon={faFontAwesome} className="sidebar-item-icon" />
        );
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
