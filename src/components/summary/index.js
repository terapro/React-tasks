import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';

const Summary = (props) => (
  <div className='summary'>
    <div className='summary-wrapper'>
      {props.filmMode? null : <Label content ={'For \''+ props.searchPhrase +'\' ' + props.filmNumber + ' movies found'} />}
      {props.filmMode? null : <FilmSort sortItems={props.sortItems} changeSortItemCallBack = {props.changeSortItemCallBack} />}
      {props.filmMode?  <Label content ={'Films by ' + props.filmModeGenre  + ' genre'} /> : null}
    </div>
  </div>
);

Summary.propTypes = {
  searchPhrase: PropTypes.string,
  filmModeGenre: PropTypes.string,
  filmMode: PropTypes.bool,
  filmNumber: PropTypes.number,
  sortItems: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.string
  }).isRequired,
  changeSortItemCallBack: PropTypes.func
};

Summary.defaultProps = {
  searchPhrase: '',
  filmModeGenre: '',
  filmMode: false,
  filmNumber: 0,
  changeSortItemCallBack: () => {}
};

export {Summary}