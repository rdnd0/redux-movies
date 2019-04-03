import React, { Component } from "react";
import Overdrive from "react-overdrive";

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
