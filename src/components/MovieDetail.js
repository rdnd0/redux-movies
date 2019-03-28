import React, { Component } from "react";

export default class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    const { match } = this.props;
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie${
        match.url
      }?api_key=4b66406001afb2955162b4ced6315919&language=en-US
      `);
      const movie = await res.json();
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { movie } = this.state;
    console.log(this.state.movie);
    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <h1> {movie.original_title}</h1>
        <h3>Released on: {movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}
