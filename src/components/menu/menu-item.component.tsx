import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  iconName: IconProp;
}

const MenuItem: React.FC<Props> = (props: Props) => {
  return (
    <div className="menu-item">
      <FontAwesomeIcon icon={props.iconName} className="menu-item-icon" />
    </div>
  );
};

export default MenuItem;
