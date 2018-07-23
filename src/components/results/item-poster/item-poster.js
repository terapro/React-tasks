import React from 'react';

import PropTypes from 'prop-types';

export const ItemPoster = ({posterLink, posterClick}) => (
    <div className='item-poster'>
      <img src={posterLink} className='item-poster-img' onClick={posterClick} />
    </div>
  );

ItemPoster.propTypes= {
  posterLink: PropTypes.string.isRequired,
  posterClick: PropTypes.func
};

ItemPoster.defaultProps = {
  posterClick: () => {},
};
