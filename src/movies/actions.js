//keep our action separate so it is easier for us to call them in different components

//this will be used by the reducer to avoid typos
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE = "RESET_MOVIE";

//this function can now dispatch an action
export function getMovies() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4b66406001afb2955162b4ced6315919&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const movies = await res.json();
    //now we want to return de dispatch of a function

    return dispatch({
      type: "GET_MOVIES",
      data: movies.results
    });
  };
}

export function getMovie(url) {
  return async function(dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=4b66406001afb2955162b4ced6315919&language=en-US
    `);
    const movie = await res.json();

    return dispatch({
      type: "GET_MOVIE",
      movie: movie
    });
  };
}

export function resetMovie() {
  return {
    type: "RESET_MOVIE"
  };
}
