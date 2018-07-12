import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';

const Summary = (props) => {
  const {filmMode, searchPhrase, filmNumber, sortItems, changeSortItemCallBack, filmModeGenre} = props;
  let innerContent;

  if (filmMode) {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'Films by ' + filmModeGenre  + ' genre'} />
      </div>
    );
  } else {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'For \''+ searchPhrase +'\' ' + filmNumber + ' movies found'} />
        <FilmSort sortItems={sortItems} changeSortItemCallBack = {changeSortItemCallBack} />
      </div>
    );
  }
  return (
    <div className='summary'>
        {innerContent}
    </div>
  );
};

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