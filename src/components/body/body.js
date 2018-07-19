import React, {Fragment} from 'react';

import PropTypes from 'prop-types';

import {Header} from 'src/components/header/header.js';
import {Results} from 'src/components/results/results.js';
import {Footer} from 'src/components/footer/footer.js';

const Body = (props) => {
  const {startSearch, searchMode, filmMode, filmInfo, setSearchModeCallback, searchResult, setFilmMode,
    filmModeGenre, searchPhrase, searchInFilmModeByGenre} = props;
  return (
    <Fragment>
      <div className="wrapper">
        <Header startSearch={startSearch}
                searchMode={searchMode}
                filmMode={filmMode}
                filmInfo={filmInfo}
                setSearchModeCallback={setSearchModeCallback}
        />
        <Results searchInFilmModeByGenre={searchInFilmModeByGenre}
                 searchResult={searchResult}
                 setFilmMode={setFilmMode}
                 filmModeGenre={filmModeGenre}
                 filmMode={filmMode}
                 searchPhrase={searchPhrase}
        />
      </div>
      <Footer/>
    </Fragment>
  )
};

Body.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  filmModeGenre: PropTypes.string,
  startSearch: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  setFilmMode: PropTypes.func.isRequired,
  searchMode: PropTypes.bool,
  filmMode: PropTypes.bool,
  filmInfo:  PropTypes.shape({
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
  setSearchModeCallback: PropTypes.func.isRequired,
  searchInFilmModeByGenre: PropTypes.func.isRequired
};
Body.defaultProps = {
  searchMode: true,
  filmMode: false,
  filmModeGenre: ''
};


export {Body};