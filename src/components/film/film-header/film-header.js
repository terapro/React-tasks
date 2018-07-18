import React from 'react';
import PropTypes from 'prop-types';

import {Title} from 'src/components/common/title/title.js';
import {Rating} from 'src/components/common/rating/rating.js';


const FilmHeader =({title, rating}) => (
  <div className='film-header' >
    <div>
      <Title content={title} ttlRed ttlBig />
    </div>
    <div>
      <Rating value ={rating}/>
    </div>
  </div>);

FilmHeader.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number
};
FilmHeader.defaultProps = {
  title: 'Film title',
  rating: 0
};



export {FilmHeader};