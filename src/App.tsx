import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu/menu.component";
import PageController from "./components/page-controller.component";
import { Page } from "./models/Enums/page.enum";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(Page.Schedule);

  return (
    <div className="App">
      <Menu currentPage={currentPage} onPageChange={setCurrentPage}></Menu>
      <PageController currentPage={currentPage}></PageController>
    </div>
  );
};

export default App;
