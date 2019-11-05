import React, { useState } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films: filmsData, api_key } = TMDB;

const App = () => {
  const [current, setCurrent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [faves, setFaves] = useState([]);
  const [films] = useState(filmsData);

  const onDetailsClick = film => {
    if (current.id === film.id) return setCurrent({});
    
    setIsLoading(true);
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${api_key}&append_to_response=videos,images&language=en`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setCurrent(data);
      });
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
      <FilmDetails isLoading={isLoading} current={current} />
    </div>
  );
};

export default App;
