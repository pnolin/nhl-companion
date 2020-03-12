import React, { useEffect, useState } from "react";
import ScheduleDateSelector from "./schedule-date-selector.component";
import * as scheduleService from "../../services/schedule.service";
import { Game } from "../../models/schedule.model";
import moment from "moment";
import GamesList from "./games-list.component";

import "../../styles/schedule.css";

const Schedule: React.FC = () => {
  const getGames = () => {
    const dateAsString = moment(date).format("YYYY-MM-DD");

    scheduleService.getScheduleForDate(dateAsString).then(schedule => {
      const daysThatMatchToday = schedule.dates.filter(
        scheduleDate => scheduleDate.date === dateAsString
      );

      const games =
        daysThatMatchToday.length > 0 ? daysThatMatchToday[0].games : [];

      setGames(_ => games);
    });
  };

  const onDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  const [date, setDate] = useState(new Date());
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getGames();
  }, [date]);

  return (
    <div id="schedule">
      <ScheduleDateSelector
        date={date}
        onDateChange={onDateChange}
        onDateRefresh={getGames}
      ></ScheduleDateSelector>
      <div id="game-list-wrapper">
        <GamesList games={games}></GamesList>
      </div>
    </div>
  );
};

export default Schedule;
