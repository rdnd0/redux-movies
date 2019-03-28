import React from "react";

export default function Movie({ movie }) {
  console.log(movie);
  return (
    <div>
      <h4>{movie.title}</h4>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
    </div>
  );
}
