import React from 'react';

import PropTypes from 'prop-types';

const ItemInfo = ({filmTitle, releaseDate, genre}) => {

  let title = filmTitle.length > 16 ? filmTitle.slice(0,18) + '...' :  filmTitle;

return (
  <div className='item-info'>
    <div className='item-info-details'>
      <div className='film-title'>
        {title}
      </div>
      <div className='release-date'>
        {releaseDate.slice(0,4)}
      </div>
    </div>
    <div className='item-info-genre'>
      {genre.join(', ')}
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