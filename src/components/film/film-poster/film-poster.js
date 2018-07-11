import React from 'react';
import PropTypes from 'prop-types';

const FilmPoster = (props) => (
  <div className="film-poster">
    <img src={props.posterPath} />
    </div>
);

FilmPoster.propTypes ={
  posterPath: PropTypes.string
};




export {FilmPoster};