import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "./axios";
import "./SingleMovie.css";

import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const NotAvailable_url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const base_url = "https://image.tmdb.org/t/p/original";

const API_KEY = process.env.REACT_APP_ACCESS_KEY;

function SingleMovie() {
  const {
    openSidebar,
    closeSidebar,
    isSidebarOpen,
    location,
  } = useGlobalContext();

  const [singleMovie, setSingleMovie] = useState([]);
  const [show, setShow] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");
  const { id } = useParams();
  const fetchSingleMovieURL = `/movie/${id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function fetchSingleMovie() {
      const request = await axios.get(fetchSingleMovieURL);

      setSingleMovie(request.data);
      return request.data;
    }

    fetchSingleMovie();
  }, [fetchSingleMovieURL, id]);

  console.log(singleMovie);

  const {
    title,
    release_date: date,
    overview,
    poster_path: poster,
  } = singleMovie;

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
    <div>
      <Nav openSidebar={openSidebar} closeSidebar={closeSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} location={location} />

      <section className="single__movie" onMouseOver={closeSidebar}>
        <div className="single__movie__img">
          <img
            src={
              poster === null ? `${NotAvailable_url}` : `${base_url}${poster}`
            }
            alt={title}
            onClick={() => handleClick(singleMovie)}
          />
        </div>

        <div className="single__movie__info">
          <h2>{title}</h2>
          <h4>{date}</h4>
          <p>{singleMovie.overview}</p>
          <Link to="/search">
            <p className="backToSearch"> back to search for movies</p>
          </Link>
        </div>
      </section>
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

export default SingleMovie;
