import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';
import {connect} from "react-redux";


const SummaryChild = (props) => {

  const {filmMode, searchPhrase, filmNumber, filmModeGenre, searchType, changeSortItemCallBack, sortParameters} = props;

  let innerContent;

  if (filmMode) {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'Films by ' + filmModeGenre  + ' genre'} />
        <FilmSort sortParameters={sortParameters} changeSortItemCallBack = {changeSortItemCallBack} />
      </div>
    );
  } else {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'Found '+ filmNumber +' films for \'' + searchPhrase + '\' by ' + searchType} />
        <FilmSort sortParameters={sortParameters} changeSortItemCallBack = {changeSortItemCallBack} />
      </div>
    );
  }
  return (
    <div className='summary'>
        {innerContent}
    </div>
  );
};

SummaryChild.propTypes = {
  searchPhrase: PropTypes.string,
  filmModeGenre: PropTypes.string,
  filmMode: PropTypes.bool,
  filmNumber: PropTypes.number,
  changeSortItemCallBack: PropTypes.func
};

SummaryChild.defaultProps = {
  searchPhrase: '',
  filmModeGenre: '',
  filmMode: false,
  filmNumber: 0,
  changeSortItemCallBack: () => {}
};


export const Summary = connect(
  store =>
    ({
      filmMode: store.mode.film,
      searchPhrase: store.search.phrase,
      filmNumber: store.films.searchList.length,
      filmModeGenre: store.mode.filmModeSettings.genre,
      searchType: store.search.type

    }),
  dispatch =>
    ({


    })

)(SummaryChild);

