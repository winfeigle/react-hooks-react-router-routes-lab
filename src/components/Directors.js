import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map(director => {
    const moviesList = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>;
    })
    
    return(
      <div key={director.name}>
        <p><b>{director.name}</b></p>
        <ul>
          {moviesList}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors;
