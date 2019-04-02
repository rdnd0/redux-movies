import React, { Component } from "react";
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import Toggle from "./components/Toggle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import "./App.css";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

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
      <Provider store={store}>
        <Router>
          <Link to="/">
            <h1>Movies</h1>
          </Link>
          <Toggle />
          <Route
            exact
            path="/"
            render={props => <MoviesList {...props} movies={movies} />}
          />
          <Route path="/:id" component={MovieDetail} />
        </Router>
      </Provider>
    );
  }
}

export default App;
