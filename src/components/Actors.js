import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map(actor => {
    const moviesList = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>;
    })

    return(
      <div key={actor.name}>
        <p><b>{actor.name}</b></p>
        <ul>
          {moviesList}
        </ul>
      </div>
    );

  })

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
}

export default Actors;
