import * as scheduleDataService from "./data-services/schedule.data-service";

const getScheduleForDate = async (date: string) => {
  return scheduleDataService.getScheduleForDate(date);
};

export { getScheduleForDate };
