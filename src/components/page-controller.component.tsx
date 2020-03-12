import React from "react";
import { Page } from "../models/Enums/page.enum";
import Schedule from "./schedule/schedule.component";

interface Props {
  currentPage: Page;
}

const PageController: React.FC<Props> = (props: Props) => {
  const getCurrentComponent = () => {
    if (props.currentPage === Page.Schedule) {
      return <Schedule></Schedule>;
    }

    return <Schedule></Schedule>;
  };

  const component = getCurrentComponent();

  return <div id="content-wrapper">{component}</div>;
};

export default PageController;
