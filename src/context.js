import React, { useState, useContext, useEffect } from "react";

import useFetch from "./useFetch";

const API_KEY = process.env.REACT_APP_ACCESS_KEY;
export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(query);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useState({});

  const openSidebar = (coordinates) => {
    setLocation(coordinates);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        query,
        setQuery,
        isSidebarOpen,
        location,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
