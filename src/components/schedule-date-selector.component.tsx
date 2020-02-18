import React from "react";
import moment from "moment";

import "../styles/schedule-date-selector.css";

interface Props {
  date: Date;
}

const ScheduleDateSelector: React.FC<Props> = (props: Props) => {
  return (
    <div id="schedule-date-selector">
      <span className="body-text">
        {moment(props.date).format("DD/MM/YYYY")}
      </span>
    </div>
  );
};

export default ScheduleDateSelector;
