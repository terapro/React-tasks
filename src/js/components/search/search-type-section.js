import React from 'react';

import {Text} from './../common/text.js';
import {SearchRadioEl} from './search-radio-element';

const SearchTypeSection = () => (
    <div className={'search-type-section'}>
        <Text content={'search by'} />
        <SearchRadioEl name = {'searchby'} id = {'radio-title'} text = {'title'} checked = {true}/>
        <SearchRadioEl name = {'searchby'} id = {'radio-genre'} text = {'genre'} checked = {false} />
    </div>
);

export {SearchTypeSection};