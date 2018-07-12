import React from 'react';

import PropTypes from 'prop-types';

const ItemInfo = (props) => {

  let title = props.filmTitle.length > 16 ? props.filmTitle.slice(0,18) + '...' :  props.filmTitle;

return (
  <div className='item-info'>
    <div className='item-info-details'>
      <div className='film-title'>
        {title}
      </div>
      <div className='release-date'>
        {props.releaseDate.slice(0,4)}
      </div>
    </div>
    <div className='item-info-genre'>
      {props.genre.join(', ')}
    </div>
  </div>
)
};

ItemInfo.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export {ItemInfo};