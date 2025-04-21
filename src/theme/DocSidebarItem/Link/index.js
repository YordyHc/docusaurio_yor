import React from "react";
import OriginalLink from "@theme-original/DocSidebarItem/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Link(props) {
  const { item } = props;

  const getIcon = (label) => {
    switch (label) {
      case "Intro":
        return <FontAwesomeIcon icon={faHouse} className="sidebar-item-icon" />;
      default:
        return null;
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
