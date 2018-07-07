import React from 'react';

import {HeaderLogo} from '../header-logo/header-logo.js';
import {HeaderTitle} from '../header-title/header-title.js';
import {HeaderSearch} from '../header-search/header-search.js';

const HeaderContainer = () => (
    <div className={'header-container'}>
        <HeaderLogo />
        <HeaderTitle />
        <HeaderSearch />
    </div>

);

export {HeaderContainer};