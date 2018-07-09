import React from 'react';

import PropTypes from 'prop-types';

const ItemPoster = (props) => (
  <a className='item-poster'>
    <img src={props.posterLink} className='item-poster-img'/>

  </a>

);

ItemPoster.propTypes= {
  posterLink: PropTypes.string
};

ItemPoster.defaultProps = {
  posterLink: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
};
export {ItemPoster};