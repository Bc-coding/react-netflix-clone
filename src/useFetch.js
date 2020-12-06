import React, { useState, useEffect } from "react";

// for Search function
const API_KEY = process.env.REACT_APP_ACCESS_KEY;
const API_ENDPOINT_QUERY = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

const useFetch = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        setData(data);

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "Movie Not Found." });
      }
      setIsLoading(false);
    } catch (error) {
      setError({ show: true, msg: "Movie Not Found." });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT_QUERY}${query}`);
  }, [query]);
  return { isLoading, error, data };
};

export default useFetch;
