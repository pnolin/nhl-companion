import React from "react";
import MenuItem from "./menu-item.component";

import "../../styles/menu.css";

const Menu: React.FC = () => {
  return (
    <div id="menu-wrapper">
      <MenuItem iconName="calendar" />
    </div>
  );
};

export default Menu;
