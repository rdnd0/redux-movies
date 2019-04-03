import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMovies } from "./actions";
// import CountDown from "./CountDown";

class MoviesList extends Component {
  async componentDidMount() {
    await this.props.dispatch(getMovies());

    //not using the mapDispatchtoProps in this case
  }

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

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesList);
