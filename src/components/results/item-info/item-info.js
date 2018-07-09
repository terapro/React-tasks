import React from 'react';

import PropTypes from 'prop-types';



const ItemInfo = (props) => (

  <div className='item-info'>
    <div className='item-info-details'>
      <div className='film-title'>
        {props.filmTitle}
      </div>
      <div className='release-date'>
        {props.releaseDate}
      </div>

    </div>
    <div className='item-info-genre'>
      {props.genre}
    </div>

  </div>);

ItemInfo.propTypes = {
  filmTitle: PropTypes.string,
  releaseDate: PropTypes.number,
  genre: PropTypes.string
};

ItemInfo.defaultProps = {
  filmTitle: 'Fifty Shades Freed',
  releaseDate: 2011,
  genre: 'Drama',

}




export {ItemInfo};