import React from "react";
import { movies } from "../data";

function Movies() {

    const renderMovies = movies.map(movie => {
      
      const genres = movie.genres.map(genre => {
        return <li>{genre}</li>;
      })

      return(
          <div>
            <p><b>{movie.title}</b></p>
            <p><em>{movie.time} minutes</em></p>
            <ul>
              { genres }
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
