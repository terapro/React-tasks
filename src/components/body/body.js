import React, {Fragment} from 'react';

import PropTypes from 'prop-types';

import {Header} from 'src/components/header/index.js';
import {Results} from 'src/components/results/index.js';
import {Footer} from 'src/components/footer/index.js';

const Body = (props) => ( // Footer is separated for the better design expirience
  <Fragment>
    <div className="wrapper">
      <Header startSearch = {props.startSearch}
              searchMode={props.searchMode}
              filmMode={props.filmMode}
              filmInfo={props.filmInfo}
              setSearchModeCallback = {props.setSearchModeCallback}
      />
      <Results searchResult = {props.searchResult}
               setFilmModeCallback ={props.setFilmModeCallback}
               filmModeGenre={props.filmModeGenre}
               filmMode={props.filmMode}
               searchPhrase={props.searchPhrase}
      />
    </div>
    <Footer/>
  </Fragment>
);

Body.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  filmModeGenre: PropTypes.string.isRequired,
  startSearch: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  setFilmModeCallback: PropTypes.func.isRequired,
  searchMode: PropTypes.bool.isRequired,
  filmMode: PropTypes.bool.isRequired,
  filmInfo: PropTypes.object.isRequired,
  setSearchModeCallback: PropTypes.func.isRequired
};

export {Body};