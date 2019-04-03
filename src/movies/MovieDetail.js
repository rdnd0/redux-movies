import React, { Component } from "react";
import Overdrive from "react-overdrive";
import { connect } from "react-redux";
import { getMovie, resetMovie } from "./actions";

class MovieDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.dispatch(getMovie(match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(resetMovie());
  }
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div
          style={{
            height: "60vh",
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${
              movie.poster_path
            })`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <Overdrive id={movie.id}>
          <img
            style={{
              position: "relative",
              top: "-10rem",
              margin: "0",
              zIndex: "1"
            }}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </Overdrive>
        <div
          style={{
            height: "20vh",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            top: "-15rem",
            marginLeft: "50px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <h1> {movie.original_title}</h1>
          <h3>Released on: {movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieisLoaded
});

export default connect(mapStateToProps)(MovieDetail);
