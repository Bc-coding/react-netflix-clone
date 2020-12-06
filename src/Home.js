import React, { useState } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import moviesList from "./moviesList";
import Banner from "./Banner";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

import { useGlobalContext } from "./context";

function Home() {
  const {
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    location,
  } = useGlobalContext();

  return (
    <div className="App">
      <div className="billoard">
        <Nav openSidebar={openSidebar} closeSidebar={closeSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} location={location} />

        <Banner closeSidebar={closeSidebar} />
      </div>
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow={true}
      />
      {moviesList.map((movie) => (
        <Row key={movie.title} title={movie.title} fetchURL={movie.fetchURL} />
      ))}
    </div>
  );
}

export default Home;
