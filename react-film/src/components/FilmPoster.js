import React from 'react';

const FilmPoster = props => (
  <img
    className={props.className}
    src={props.posterUrlPrefix + props.posterPath}
    alt={props.title}
  />
);

export default FilmPoster;