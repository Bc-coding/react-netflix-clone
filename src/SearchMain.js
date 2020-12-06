import React from "react";
import "./SearchMain.css";

import Form from "./SearchForm";
import Movies from "./Movies";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

function SearchMain() {
  const {
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    location,
  } = useGlobalContext();

  return (
    <div>
      <Nav openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} location={location} />
      <main className="searchMain" onMouseOver={closeSidebar}>
        <Form />
        <Movies />
      </main>
    </div>
  );
}

export default SearchMain;
