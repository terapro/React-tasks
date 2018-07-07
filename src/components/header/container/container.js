import React from 'react';
import PropTypes from 'prop-types';

import {HeaderLogo} from '../header-logo/header-logo.js';
import {HeaderTitle} from '../header-title/header-title.js';
import {HeaderSearch} from '../header-search/header-search.js';

const HeaderContainer = (props) => (
    <div className={'header-container'}>
        <HeaderLogo />
        <HeaderTitle />
        <HeaderSearch searchButtonCallBack = {props.searchButtonCallBack} />
    </div>

);
HeaderContainer.propTypes = {
  searchButtonCallBack: PropTypes.func
};


export {HeaderContainer};