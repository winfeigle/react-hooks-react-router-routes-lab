import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map(director => {
    const moviesList = director.movies.map(movie => {
      return <li>{movie}</li>;
    })
    
    return(
      <div>
        <p><b>{director.name}</b></p>
        <ul>
          {moviesList}
        </ul>
      </div>
    );
  })

  return <div>{renderDirectors}</div>;
}

export default Directors;
