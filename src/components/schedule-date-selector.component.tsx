import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/schedule-date-selector.css";

interface Props {
  date: Date;
}

const ScheduleDateSelector: React.FC<Props> = (props: Props) => {
  return (
    <div id="schedule-date-selector">
      <FontAwesomeIcon icon="angle-left" />
      <span className="body-text">
        {moment(props.date).format("DD/MM/YYYY")}
      </span>
      <FontAwesomeIcon icon="angle-right" />
    </div>
  );
};

export default ScheduleDateSelector;
