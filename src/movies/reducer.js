import { GET_MOVIES, GET_MOVIE } from "./actions";

const initialState = {
  movies: [],
  movie: {},
  moviesLoaded: false,
  movieisLoaded: false
};

export default function(state = initialState, action) {
  const { type, data, movie } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: movie,
        movieisLoaded: true
      };
    default:
      return state;
  }
}
