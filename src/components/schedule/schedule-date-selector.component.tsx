import React, { useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";

import "../../styles/schedule-date-selector.css";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  date: Date;
  onDateChange: (newDate: Date) => void;
  onDateRefresh: () => void;
}

enum DateMovement {
  backward,
  forward
}

const ScheduleDateSelector: React.FC<Props> = (props: Props) => {
  const [calendar, setCalendar] = useState<DatePicker | null>(null);

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
        className="margin-left-auto"
      />
      <DatePicker
        ref={calendar => setCalendar(calendar)}
        selected={props.date}
        onChange={props.onDateChange}
        todayButton="Today"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        customInput={
          <span className="body-text">
            {moment(props.date).format("DD/MM/YYYY")}
          </span>
        }
      ></DatePicker>
      <FontAwesomeIcon
        icon="angle-right"
        onClick={() => moveInTime(DateMovement.forward)}
      />
      <FontAwesomeIcon
        icon="sync-alt"
        className="margin-left-auto"
        onClick={props.onDateRefresh}
      />
    </div>
  );
};

export default ScheduleDateSelector;
