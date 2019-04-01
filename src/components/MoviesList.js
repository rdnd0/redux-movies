import React, { Component } from "react";
import Movie from "./Movie";
import CountDown from "./CountDown";

export default class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1>Movies</h1>
        {movies.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
        {/* <CountDown /> */}
      </div>
    );
  }
}
