import React from 'react';

import PropTypes from 'prop-types';

const ItemPoster = (props) => (
  <div className='item-poster'>
    <img src={props.posterLink} className='item-poster-img' onClick={props.posterClick} id={props.id}/>

  </div>

);

ItemPoster.propTypes= {
  posterLink: PropTypes.string.isRequired,
  posterClick: PropTypes.func,
  id: PropTypes.string
};

ItemPoster.defaultProps = {
  posterClick: () => {},
  id: ''
};
export {ItemPoster};