import React from "react";
import OriginalCategory from "@theme-original/DocSidebarItem/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

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
      default:
        return null;
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
