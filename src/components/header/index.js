import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../header/topbar/topbar.js';
import {Search} from '../search/index.js';


const Header = (props) => (
        <header className={'header'}>
          <div className={'header-container'}>
            <TopBar />
            <Search startSearch = {props.startSearch}/>
          </div>
        </header>
);

Header.propTypes = {
  startSearch: PropTypes.func
};


export {Header};