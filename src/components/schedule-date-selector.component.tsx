import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/schedule-date-selector.css";

interface Props {
  date: Date;
  onDateChange: (newDate: Date) => void;
}

enum DateMovement {
  backward,
  forward
}

const ScheduleDateSelector: React.FC<Props> = (props: Props) => {
  const moveInTime = (movement: DateMovement) => {
    const newDate =
      movement === DateMovement.backward
        ? moment(props.date)
            .subtract(1, "day")
            .toDate()
        : moment(props.date)
            .add(1, "day")
            .toDate();

    props.onDateChange(newDate);
  };

  return (
    <div id="schedule-date-selector">
      <FontAwesomeIcon
        icon="angle-left"
        onClick={() => moveInTime(DateMovement.backward)}
      />
      <span className="body-text">
        {moment(props.date).format("DD/MM/YYYY")}
      </span>
      <FontAwesomeIcon
        icon="angle-right"
        onClick={() => moveInTime(DateMovement.forward)}
      />
    </div>
  );
};

export default ScheduleDateSelector;
