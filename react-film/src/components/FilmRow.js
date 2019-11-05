import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from "./Fave";

const FilmRow = props => {
  const year = new Date(props.film.release_date).getFullYear();

  const handleDetailsClick = film => props.onDetailsClick(film);

  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
      <FilmPoster
        title={props.film.title}
        posterPath={props.film.poster_path}
        posterUrlPrefix={'https://image.tmdb.org/t/p/w780'}
      />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{year}</p>
      </div>
      <Fave film={props.film} onFaveToggle={props.onFaveToggle} />
    </div>
  )
};

export default FilmRow;