import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Page } from "../../models/Enums/page.enum";

interface Props {
  iconName: IconProp;
  page: Page;
  currentPage: Page;
  onClick: (page: Page) => void;
}

const MenuItem: React.FC<Props> = (props: Props) => {
  const isCurrentPageActive = () => props.currentPage === props.page;

  return (
    <div
      className={`menu-item${isCurrentPageActive() ? " active" : ""}`}
      onClick={() => props.onClick(props.page)}
    >
      <FontAwesomeIcon icon={props.iconName} className="menu-item-icon" />
    </div>
  );
};

export default MenuItem;
