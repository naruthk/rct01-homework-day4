import React, { useState } from 'react';
import FilmRow from './FilmRow';

const FilmListing = props => {

  const FILTER_TYPE = {
    "all": "ALL",
    "faves": "FAVES"
  }

  const [filter, setFilter] = useState(FILTER_TYPE.all);

  const renderFilmRow = film => (
    <FilmRow
      key={film.id}
      film={film}
      onFaveToggle={props.onFaveToggle}
      onDetailsClick={props.onDetailsClick}
    />
  );

  const allFilms = props.films.map(renderFilmRow);
  
  const faveFilms = props.faves.map(renderFilmRow);

  const handleFilterClick = filter => setFilter(filter);

  const renderListFilters = [FILTER_TYPE.all, FILTER_TYPE.faves].map(item => (
    <div
      className={`film-list-filter ${filter === item && 'is-active'}`}
      onClick={() => handleFilterClick(item)}
      key={item}
    >
      {item.toUpperCase()}
      <span className="section-count">
        {item === FILTER_TYPE.all ?
          props.films.length : props.faves.length}
      </span>
    </div>
  ));
  
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        {renderListFilters}
      </div>
      {filter === FILTER_TYPE.all ? allFilms : faveFilms}
    </div>
  )
};

export default FilmListing;