import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from 'src/components/header/topbar/topbar.js';
import {ConnectedSearch} from 'src/components/search/search.js';
import {Film} from 'src/components/film/film.js'
import {connect} from "react-redux";
import {openSearch} from "src/actions";

const Header = ({filmMode, currentFilm, onOpenSearch}) => (
    <header className={'header'}>
      <div className={'header-container'}>
        <TopBar setSearchModeCallback = {onOpenSearch}  filmMode={filmMode}/>
          <ConnectedSearch />
          <Film info={currentFilm} active ={filmMode} />

      </div>
    </header>
);

Header.propTypes = {
  startSearch: PropTypes.func.isRequired,
  searchMode: PropTypes.bool,
  filmMode: PropTypes.bool,
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
  }),
  setSearchModeCallback: PropTypes.func
};
Header.defaultProps = {
  searchMode: true,
  filmMode: false,
  setSearchModeCallback: () => {},
  filmInfo: {}
};


export const ConnectedHeader = connect(
  store =>
    ({
      filmMode: store.mode.film,
      currentFilm: store.films.currentFilm
    }),
  dispatch =>
    ({
      onOpenSearch(){dispatch(
        openSearch()
      )}

    })

)(Header);

export {Header};