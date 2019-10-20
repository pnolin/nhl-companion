import React, { useEffect, useState } from "react";
import * as scheduleService from "../services/schedule.service";
import { Schedule as ScheduleModel } from "../models/schedule.model";

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleModel | undefined>(
    undefined
  );

  useEffect(() => {
    scheduleService.getScheduleForDate("2019-10-20").then(result => {
      setSchedule(result);
    });
  });

  return <div id="schedule"></div>;
};

export default Schedule;
