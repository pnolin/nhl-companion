import React, { useEffect, useState } from "react";
import ScheduleDateSelector from "./schedule-date-selector.component";
import * as scheduleService from "../services/schedule.service";
import { Game } from "../models/schedule.model";
import moment from "moment";
import GamesList from "./games-list.component";

import "../styles/schedule.css";

const Schedule: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const dateAsString = moment(date).format("YYYY-MM-DD");

    scheduleService.getScheduleForDate(dateAsString).then(schedule => {
      const games = schedule.dates.filter(
        scheduleDate => scheduleDate.date === dateAsString
      )[0].games;

      setGames(_ => games);
    });
  }, []);

  return (
    <div id="schedule">
      <ScheduleDateSelector date={date}></ScheduleDateSelector>
      <GamesList games={games}></GamesList>
    </div>
  );
};

export default Schedule;
