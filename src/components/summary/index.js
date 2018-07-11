import React from 'react';

import {Label} from '../common/label/label.js';

import {FilmSort} from '../summary/film-sort/film-sort';

import PropTypes from 'prop-types';

const Summary = (props) => (
  <div className='summary'>
    <div className='summary-wrapper'>
      {props.filmMode? null : <Label content ={props.filmNumber + ' movies found'} />}
      {props.filmMode? null : <FilmSort sortItems={props.sortItems} changeSortItemCallBack = {props.changeSortItemCallBack} />}
      {props.filmMode?  <Label content ={'Films by ' + props.filmModeGenre  + ' genre'} /> : null}

    </div>
  </div>
);

Summary.propTypes = {
  filmModeGenre: PropTypes.string,
  filmMode: PropTypes.bool,
  filmNumber: PropTypes.number,
  sortItems: PropTypes.object,
  changeSortItemCallBack: PropTypes.func
};

export {Summary}