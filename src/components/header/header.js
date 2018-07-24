import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {openSearch} from "src/actions";
import {TopBar} from 'src/components/header/topbar/topbar.js';
import {Search} from 'src/components/search/search.js';
import {Film} from 'src/components/film/film.js'

const HeaderChild = ({filmMode, currentFilm, onOpenSearch, children}) => (
    <header className={'header'}>
      <div className={'header-container'}>

        <TopBar searchButtonClick={onOpenSearch}  filmMode={filmMode}/>
        {children}
          {/*<Search />
          <Film info={currentFilm} active ={filmMode} />*/}
      </div>
    </header>
);

HeaderChild.propTypes = {
    filmMode: PropTypes.bool,
    currentFilm: PropTypes.shape({
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
    onOpenSearch: PropTypes.func.isRequired
};

HeaderChild.defaultProps = {
    filmMode: false,
    currentFilm: {}
};

export const Header = connect(
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
)(HeaderChild);
