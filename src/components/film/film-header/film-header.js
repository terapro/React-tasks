import React from 'react';
import PropTypes from 'prop-types';

import {Title} from 'src/components/common/title/title.js';
import {Rating} from 'src/components/common/rating/rating.js';


const FilmHeader =(props) => {

  return (
    <div className='film-header' >
      <div>
        <Title content={props.title} ttlRed={true} ttlBig={true} />
      </div>
      <div>
        <Rating value ={props.rating}/>
      </div>
    </div>
  );

};

FilmHeader.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number
};


export {FilmHeader};