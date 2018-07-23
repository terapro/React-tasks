import React from 'react';
import PropTypes from 'prop-types';

export const FilmPoster = ({posterPath}) => (
    <div className="film-poster">
      <img src={posterPath} />
    </div>
  );

FilmPoster.propTypes ={
  posterPath: PropTypes.string.isRequired
};
