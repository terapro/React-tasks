import React, {Fragment} from 'react';

import PropTypes from 'prop-types';

import {Header} from 'src/components/header/header.js';
import {Results} from 'src/components/results/results.js';
import {Footer} from 'src/components/footer/footer.js';


const Body = (props) => { // Footer is separated for the better design expirience
  const {startSearch, searchMode, filmMode, filmInfo, setSearchModeCallback, searchResult, setFilmModeCallback,
    filmModeGenre, searchPhrase} = props;
  return (
    <Fragment>
      <div className="wrapper">
        <Header startSearch={startSearch}
                searchMode={searchMode}
                filmMode={filmMode}
                filmInfo={filmInfo}
                setSearchModeCallback={setSearchModeCallback}
        />
        <Results searchResult={searchResult}
                 setFilmModeCallback={setFilmModeCallback}
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