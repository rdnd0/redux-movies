import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from "./actions";

const initialState = {
  movies: [],
  movie: {},
  moviesLoaded: false,
  moviesLoadedAt: null,
  movieisLoaded: false
};

export default function(state = initialState, action) {
  const { type, data, movie } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
        moviesLoadedAt: new Date()
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: movie,
        movieisLoaded: true
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieisLoaded: false
      };
    default:
      return state;
  }
}
