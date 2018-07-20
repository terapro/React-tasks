import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeItem} from "src/actions";
import {Label} from 'src/components/common/label/label.js';
import {FilmSort} from 'src/components/summary/film-sort/film-sort';

const SummaryChild = (props) => {

  const {filmMode, searchPhrase, filmNumber, filmModeGenre, searchType, sortBy, onChangeItem} = props;
    /**
     * Toggles the current sort parameter
     * @param {element} e
     */
    const sortParameterClick = (e) => {
        onChangeItem(e.target.id);
    };

  return (
    <div className='summary'>
        <div className='summary-wrapper'>
            {filmMode && <Label content ={'Films by ' + filmModeGenre  + ' genre'} />}
            {!filmMode && <Label content ={'Found '+ filmNumber +' films for \'' + searchPhrase + '\' by ' + searchType} />}
            <FilmSort sortParameters={sortBy} onParameterClick = {sortParameterClick} />
        </div>
    </div>
  );
};

SummaryChild.propTypes = {
    filmMode: PropTypes.bool,
    searchPhrase: PropTypes.string,
    filmNumber: PropTypes.number,
    filmModeGenre: PropTypes.string,
    searchType: PropTypes.string,
    sortBy: PropTypes.shape({
        parameters: PropTypes.arrayOf(PropTypes.string),
        chosenParameter: PropTypes.string
    }).isRequired,
    onChangeItem: PropTypes.func
};

SummaryChild.defaultProps = {
    filmMode: false,
    searchPhrase: '',
    filmNumber: 0,
    filmModeGenre: '',
    searchType: 'title',
    onChangeItem: f=>f
};


export const Summary = connect(
  store =>
    ({
      filmMode: store.mode.film,
      searchPhrase: store.search.phrase,
      filmNumber: store.films.searchList.length,
      filmModeGenre: store.mode.filmModeSettings.genre,
      searchType: store.search.type,
      sortBy: store.films.sortBy

    }),
  dispatch =>
    ({
      onChangeItem(newParameter) {
          dispatch(changeItem(newParameter))
        }
    })

)(SummaryChild);

