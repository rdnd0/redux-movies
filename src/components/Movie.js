import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  console.log(movie);
  return (
    <div>
      <h4>{movie.title}</h4>
      <Link to={`/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
}
