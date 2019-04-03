import React from "react";
import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";
import Toggle from "./toggle/Toggle";
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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">
          <h1>Movies</h1>
        </Link>
        <Toggle />
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Router>
    </Provider>
  );
}

export default App;
