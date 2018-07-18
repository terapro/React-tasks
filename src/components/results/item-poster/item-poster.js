import React from 'react';

import PropTypes from 'prop-types';

const ItemPoster = ({posterLink, posterClick, id}) => (
    <div className='item-poster'>
      <img src={posterLink} className='item-poster-img' onClick={posterClick} id={id}/>
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