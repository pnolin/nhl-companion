import * as http from "../http.service";
import { baseUrl } from "../../constants";
import { Schedule } from "../../models/schedule.model";

const getScheduleForDate = async (date: string) => {
  const url = `${baseUrl}schedule?date=${date}`;
  const data = await http.get(url);
  const schedule = data as Schedule;

  return schedule;
};

export { getScheduleForDate };
