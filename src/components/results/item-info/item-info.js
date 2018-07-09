import React from 'react';

import PropTypes from 'prop-types';



const ItemInfo = (props) => (

  <div className='item-info'>
    <div className='item-info-details'>
      <div className='film-title'>
        {props.filmTitle}
      </div>
      <div className='release-date'>
        {props.releaseDate.slice(0,4)}
      </div>

    </div>
    <div className='item-info-genre'>
      {props.genre[0]}
    </div>

  </div>);

ItemInfo.propTypes = {
  filmTitle: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.array
};

ItemInfo.defaultProps = {
  filmTitle: 'Fifty Shades Freed',
  releaseDate: '2011-01-01',
  genre: ['Drama']

}




export {ItemInfo};