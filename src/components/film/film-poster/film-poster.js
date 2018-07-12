import React from 'react';
import PropTypes from 'prop-types';

const FilmPoster = (props) => {
  const {posterPath} = props;
  return (
    <div className="film-poster">
      <img src={posterPath} />
    </div>
  );
};

FilmPoster.propTypes ={
  posterPath: PropTypes.string.isRequired
};

export {FilmPoster};