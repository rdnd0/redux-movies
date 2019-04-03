import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMovies } from "./actions";
// import CountDown from "./CountDown";

class MoviesList extends Component {
  componentDidMount() {
    const { isLoaded, moviesLoadedAt } = this.props;
    const hour = 60 * 60 * 1000;
    (!isLoaded || new Date() - new Date(moviesLoadedAt) > hour) &&
      this.props.dispatch(getMovies());

    //not using the mapDispatchtoProps in this case
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h2>Loading</h2>;
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

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt
});

export default connect(mapStateToProps)(MoviesList);
