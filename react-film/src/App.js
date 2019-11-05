import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const filmsData = TMDB.films;

const App = () => {
  const [current, setCurrent] = useState({});
  const [faves, setFaves] = useState([]);
  const [films] = useState(filmsData);

  const onDetailsClick = film => {
    if (current === film) return setCurrent({});
    setCurrent(film);
  }

  const onFaveToggle = (film, isFave) => {
    if (isFave) return setFaves([...faves, film]);
    const faveListWithoutCurrentFilm = [...faves].filter( existingFilm => existingFilm.id !== film.id);
    setFaves(faveListWithoutCurrentFilm);
  };

  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        onFaveToggle={onFaveToggle}
        onDetailsClick={onDetailsClick}
      />
      <FilmDetails current={current} />
    </div>
  );
};

export default App;
