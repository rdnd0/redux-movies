import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMovies } from "./actions";
// import CountDown from "./CountDown";

class MoviesList extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    !isLoaded && this.props.dispatch(getMovies());

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
  isLoaded: state.movies.moviesLoaded
});

export default connect(mapStateToProps)(MoviesList);
