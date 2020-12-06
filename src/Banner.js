import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

function Banner(props) {
  const { closeSidebar } = props;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData();
  }, []);

  const base_url = "https://image.tmdb.org/t/p/original";

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
             ${base_url}${movie?.backdrop_path}
         )`,
        backgroundPosition: "center center",
      }}
      onMouseOver={closeSidebar}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__desc">{truncate(movie?.overview, 200)}</h1>
        <div className="banner__buttons">
          <button className="banner__button play">
            <div>
              <PlayArrowIcon />
            </div>
            <span>Play</span>
          </button>
          <button className="banner__button">
            <div>
              <ErrorOutlineIcon />
            </div>
            <span>My List</span>
          </button>
        </div>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
