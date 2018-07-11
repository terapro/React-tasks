import React from 'react';

import PropTypes from 'prop-types';



const ItemInfo = (props) => {

  let title = props.filmTitle.length > 16 ? props.filmTitle.slice(0,18) + '...' :  props.filmTitle;

return (<div className='item-info'>
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

  </div>)

};

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