//keep our action separate so it is easier for us to call them in different components

export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE"; //this will be used by the reducer to avoid typos
export const GET_MOVIES = "GET_MOVIES";

export function toggleMessage() {
  return {
    type: TOGGLE_MESSAGE
  };
}

//this function can now dispatch an action
export function getMovies() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4b66406001afb2955162b4ced6315919&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const movies = await res.json();
    //now we want to return de dispatch of a function

    return dispatch({
      type: GET_MOVIES,
      data: movies.results
    });
  };
}
