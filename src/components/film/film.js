import React from 'react';
import PropTypes from 'prop-types';
import {FilmPoster} from 'src/components/film/film-poster/film-poster.js';
import {FilmInfo} from 'src/components/film/film-info/film-info.js';

export const Film = ({active, info}) => {
  if (active) {
    return (<div className="film">
      <FilmPoster posterPath={info['poster_path']}/>
      <FilmInfo info={info}/>
    </div>);
  } else {
    return null;
  }
};
Film.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
  }),
  active: PropTypes.bool
};

Film.defaulProps = {
  active: false,
  info: { }
};
