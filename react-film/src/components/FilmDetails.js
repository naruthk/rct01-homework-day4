import React from 'react';
import FilmPoster from "./FilmPoster";

const FilmDetails = props => {

  const RenderCurrentFilmInfo = () => {
    const { current } = props;
    const isEmpty = Object.keys(current).length === 0;
    if (isEmpty) {
      return (
        <div className="film-detail">
          <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
          </p>
        </div>
      );
    }

    const { title, poster_path, backdrop_path, overview } = props.current;

    return (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <FilmPoster
            title={title}
            posterPath={backdrop_path}
            posterUrlPrefix={"https://image.tmdb.org/t/p/w1280/"}
          />
          <h1 className="film-title">{title}</h1>
        </figure>
        <div className="film-meta">
          {/* <h2 className="film-tagline">Your fears are unleashed</h2> */}
          <p className="film-detail-overview">
            <FilmPoster
              title={title}
              posterPath={poster_path}
              className={"film-detail-poster"}
              posterUrlPrefix={'https://image.tmdb.org/t/p/w780'}
            />
            {overview}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
        <RenderCurrentFilmInfo />
    </div>
  )
};

export default FilmDetails;