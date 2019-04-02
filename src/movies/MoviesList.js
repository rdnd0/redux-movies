import React, { Component } from "react";
import Movie from "./Movie";
// import CountDown from "./CountDown";

export default class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-grid">
        {movies.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
        {/* <CountDown /> */}
      </div>
    );
  }
}
