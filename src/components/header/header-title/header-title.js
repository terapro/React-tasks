import React from 'react';

import {appSettings} from '../../../app/config.js';

import {Title} from '../../common/title/title.js';



const HeaderTitle = () => (
    <div className={'header-title'}>
    <Title content={appSettings.headerSearchTitle} />
    </div>

);

export {HeaderTitle};