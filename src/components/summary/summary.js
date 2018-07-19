import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';
import {connect} from "react-redux";


const Summary = (props) => {
  const {sortItems, changeSortItemCallBack} = props;
  const {filmMode, searchPhrase, filmNumber, filmModeGenre, searchType} = props;

  let innerContent;

  if (filmMode) {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'Films by ' + filmModeGenre  + ' genre'} />
        <FilmSort sortItems={sortItems} changeSortItemCallBack = {changeSortItemCallBack} />
      </div>
    );
  } else {
    innerContent = (
      <div className='summary-wrapper'>
        <Label content ={'Found '+ filmNumber +' films for \'' + searchPhrase + '\' by ' + searchType} />
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


export const ConnectedSummary = connect(
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

)(Summary);

