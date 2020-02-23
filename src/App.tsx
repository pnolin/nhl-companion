import React from "react";
import "./App.css";
import Schedule from "./components/schedule/schedule.component";
import Menu from "./components/menu/menu.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu></Menu>
      <div id="content-wrapper">
        <Schedule></Schedule>
      </div>
    </div>
  );
};

export default App;
