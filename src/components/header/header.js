import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from 'src/components/header/topbar/topbar.js';
import {Search} from 'src/components/search/search.js';
import {Film} from 'src/components/film/film.js'


const Header = (props) => {
  const {searchMode, setSearchModeCallback, filmMode, filmInfo, startSearch} = props;
  return (
    <header className={'header'}>
      <div className={'header-container'}>
        <TopBar setSearchModeCallback = {setSearchModeCallback}  filmMode={filmMode}/>
          {searchMode? <Search startSearch = {startSearch} active={searchMode} /> : null }
          {filmMode? <Film info={filmInfo} active ={filmMode} /> : null}
      </div>
  </header>
);
};


Header.propTypes = {
  startSearch: PropTypes.func.isRequired,
  searchMode: PropTypes.bool,
  filmMode: PropTypes.bool,
  filmInfo: PropTypes.object,
  setSearchModeCallback: PropTypes.func
};
Header.defaultProps = {
  searchMode: true,
  filmMode: false,
  filmInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
  }).isRequired,
  setSearchModeCallback: () => {}
};


export {Header};