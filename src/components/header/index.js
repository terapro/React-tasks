import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../header/topbar/topbar.js';
import {Search} from '../search/index.js';
import {Film} from '../film/film.js'


const Header = (props) => (
        <header className={'header'}>
          <div className={'header-container'}>
            <TopBar setSearchModeCallback = {props.setSearchModeCallback}  filmMode={props.filmMode}/>
            {props.searchMode? <Search startSearch = {props.startSearch} active={props.searchMode} /> : null }
            {props.filmMode? <Film info={props.filmInfo} active ={props.filmMode} /> : null}
          </div>
        </header>
);

Header.propTypes = {
  startSearch: PropTypes.func,
  searchMode: PropTypes.bool,
  filmMode: PropTypes.bool,
  filmInfo: PropTypes.object,
  setSearchModeCallback: PropTypes.func

};


export {Header};