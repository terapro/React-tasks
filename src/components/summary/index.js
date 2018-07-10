import React from 'react';

import {Label} from '../common/label/label.js'
import {FilmSort} from '../summary/film-sort/film-sort';

import PropTypes from 'prop-types';

const Summary = (props) => (
  <div className='summary'>
    <div className='summary-wrapper'>
      <Label content ={props.filmNumber + ' movies found'} />
      <FilmSort sortItems={ props.sortItems } changeSortItemCallBack = {props.changeSortItemCallBack} />
    </div>
  </div>
);

Summary.propTypes = {
  filmNumber: PropTypes.number,
  sortItems: PropTypes.object,
  changeSortItemCallBack: PropTypes.func
};

export {Summary}