import React from 'react';

import PropTypes from 'prop-types';

export const ItemPoster = ({posterLink, posterClick, filmIndex}) => (
    <div className='item-poster'>
      <img src={posterLink} className='item-poster-img' onClick={posterClick} id={filmIndex} />
    </div>
  );

ItemPoster.propTypes= {
  posterLink: PropTypes.string.isRequired,
  posterClick: PropTypes.func.isRequired,
  filmIndex: PropTypes.number.isRequired
};
