import React from 'react';

import PropTypes from 'prop-types';


const FilmCount = (props) => (
  <div className='film-count'>
    {props.filmNumber} {props.filmNumber? 'movies found': ''}
  </div>
);
FilmCount.propTypes = {
  filmNumber: PropTypes.number
};
FilmCount.defaultProps = {
  filmNumber: null
};

export {FilmCount};