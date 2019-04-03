import React from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

export default function Movie({ movie }) {
  return (
    <div>
      <Link to={`/${movie.id}`}>
        <Overdrive id={movie.id}>
          <img
            src={`https:/image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </Overdrive>
      </Link>
    </div>
  );
}
