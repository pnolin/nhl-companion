import React from "react";
import MenuItem from "./menu-item.component";
import { Page } from "../../models/Enums/page.enum";

import "../../styles/menu.css";

interface Props {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Menu: React.FC<Props> = (props: Props) => {
  return (
    <div id="menu-wrapper">
      <MenuItem
        iconName="calendar"
        page={Page.Schedule}
        currentPage={props.currentPage}
        onClick={props.onPageChange}
      />
      <MenuItem
        iconName="trophy"
        page={Page.Rankings}
        currentPage={props.currentPage}
        onClick={props.onPageChange}
      />
    </div>
  );
};

export default Menu;
