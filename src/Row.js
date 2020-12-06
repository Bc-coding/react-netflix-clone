import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // make a request to TMDB to pull info
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  const base_url = "https://image.tmdb.org/t/p/original";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClose = () => {
    setTrailerUrl("");
    setShow(false);
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <div className={`youtube__wrapper ${show && "youtube__wrapper_close"}`}>
          <YouTube videoId={trailerUrl} opts={opts} />
          <button className="btn__close" onClick={handleClose}>
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
}

export default Row;
