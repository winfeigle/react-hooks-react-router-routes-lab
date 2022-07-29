import React from "react";
import { movies } from "../data";

function Movies() {

    const renderMovies = movies.map(movie => {

      return(
          <div key={movie.title}>
            <p><b>{movie.title}</b></p>
            <p><em>{movie.time} minutes</em></p>
            <ul>
              { movie.genres.map(genre => <li key={genre}>{genre}</li>) }
            </ul>
          </div>
      );
    })

  return (
  <div>
    <h1>Movies Page</h1>
    { renderMovies }
  </div>
  );
}

export default Movies;
