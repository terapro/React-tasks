import React from 'react';

import PropTypes from 'prop-types';

const ItemPoster = (props) => (
  <div className='item-poster'>
    <img src={props.posterLink} className='item-poster-img' onClick={props.posterClick} id={props.id}/>

  </div>

);

ItemPoster.propTypes= {
  posterLink: PropTypes.string,
  posterClick: PropTypes.func,
  id: PropTypes.string
};

ItemPoster.defaultProps = {
  posterLink: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg'
};
export {ItemPoster};