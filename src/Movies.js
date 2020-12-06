import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import "./Movies.css";

const NotAvailable_url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const base_url = "https://image.tmdb.org/t/p/original";

function Movies() {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.results.map((movie) => {
        const { id, title, overview, release_date, poster_path } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie__link">
            <article className="movie">
              <div className="movie__img">
                <img
                  src={
                    poster_path === null
                      ? `${NotAvailable_url}`
                      : `${base_url}${poster_path}`
                  }
                  alt={title}
                />
              </div>
              <div className="movie__info">
                <h4 className="movie__title">{title}</h4>
                <p>{release_date}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default Movies;
