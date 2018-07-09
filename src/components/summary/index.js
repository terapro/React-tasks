import React from 'react';

import {FilmCount} from '../summary/film-count/film-count';
import {FilmSort} from '../summary/film-sort/film-sort';

import PropTypes from 'prop-types';

const Summary = (props) => (
  <div className='summary'>
    <div className='summary-wrapper'>
      <FilmCount filmNumber ={props.filmNumber} />
      <FilmSort />

    </div>

  </div>

);

Summary.propTypes = {
  filmNumber: PropTypes.number

};

export {Summary}