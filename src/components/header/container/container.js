import React from 'react';

import {Logo} from '../../common/logo/logo.js';
import {Title} from '../../common/title/title.js';
import {Search} from '../search/search.js';

const HeaderContainer = () => (
    <div className={'header-container'}>
        <Logo />
        <Title />
        <Search />
    </div>

);

export {HeaderContainer};