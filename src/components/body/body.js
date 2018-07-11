import React from 'react';

import PropTypes from 'prop-types';


import {Header} from '../../components/header/index.js';
import {Results} from '../../components/results/index.js';
import {Footer} from '../../components/footer/index.js';

const Body = (props) => ( // Footer is separated for the better design expirience
  <React.Fragment>
    <div className="wrapper">
      <Header startSearch = {props.startSearch}
              searchMode={props.searchMode}
              filmMode={props.filmMode}
              filmInfo={props.filmInfo}
              setSearchModeCallback = {props.setSearchModeCallback}
      />
      <Results searchResult = {props.searchResult}
               setFilmModeCallback ={props.setFilmModeCallback}
      />
    </div>
    <Footer/>
  </React.Fragment>
);

Body.propTypes = {
  startSearch: PropTypes.func,
  searchResult: PropTypes.array,
  setFilmModeCallback: PropTypes.func,
  searchMode: PropTypes.bool,
  filmMode: PropTypes.bool,
  filmInfo: PropTypes.object,
  setSearchModeCallback: PropTypes.func
};

export {Body};