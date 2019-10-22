import React, { useEffect, useState } from "react";
import * as scheduleService from "../services/schedule.service";
import { Game } from "../models/schedule.model";
import moment from "moment";
import GamesList from "./games-list.component";

const Schedule: React.FC = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    scheduleService.getScheduleForDate(date).then(schedule => {
      const games = schedule.dates.filter(
        scheduleDate => scheduleDate.date === date
      )[0].games;

      setGames(_ => games);
    });
  }, []);

  return (
    <div id="schedule">
      <GamesList games={games}></GamesList>
    </div>
  );
};

export default Schedule;
