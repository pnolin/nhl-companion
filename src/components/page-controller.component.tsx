import React from "react";
import { Page } from "../models/Enums/page.enum";
import Schedule from "./schedule/schedule.component";
import Rankings from "./rankings/rankings.component";

interface Props {
  currentPage: Page;
}

const PageController: React.FC<Props> = (props: Props) => {
  const getCurrentComponent = () => {
    if (props.currentPage === Page.Schedule) {
      return <Schedule></Schedule>;
    } else if (props.currentPage === Page.Rankings) {
      return <Rankings></Rankings>;
    }

    return <Schedule></Schedule>;
  };

  const component = getCurrentComponent();

  return <div id="content-wrapper">{component}</div>;
};

export default PageController;
