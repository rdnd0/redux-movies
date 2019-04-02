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
  componentDidMount() {}

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
