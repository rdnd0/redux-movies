import React, { Component } from "react";
import Movie from "./components/Movie";
import "./App.css";

class App extends Component {
  state = {
    movies: []
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=4b66406001afb2955162b4ced6315919&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <h1>Movies</h1>
        {movies.map(movie => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default App;
