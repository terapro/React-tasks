import React from 'react';

import {HeaderLogo} from './header-logo.js';
import {HeaderTitle} from './header-title.js';
import {HeaderSearch} from './header-search.js';

const HeaderContainer = () => (
    <div className={'header-container'}>
        <HeaderLogo/>
        <HeaderTitle/>
        <HeaderSearch/>
    </div>

);

export {HeaderContainer};