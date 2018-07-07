import React from 'react';
import PropTypes from 'prop-types';

import {HeaderLogo} from '../header-logo/header-logo.js';
import {HeaderTitle} from '../header-title/header-title.js';
import {HeaderSearch} from '../header-search/header-search.js';

const HeaderContainer = (props) => (
    <div className={'header-container'}>
        <HeaderLogo />
        <HeaderTitle />
        <HeaderSearch startSearch = {props.startSearch}/>
    </div>

);
HeaderContainer.propTypes = {
  startSearch: PropTypes.func
};


export {HeaderContainer};