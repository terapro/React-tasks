import React from 'react';

import {SearchInput} from './../search/search-input.js';
import {SearchTypeSection} from './../search/search-type-section.js';
import {SearchButtonSection} from './../search/search-button-section.js';


const HeaderSearch = () => (
    <form className= {'header-search'}>
        <SearchInput placeholder={'Start typing...'}/>
        <div className={'search-components'}>
            <SearchTypeSection/>
            <SearchButtonSection/>
        </div>
    </form>

);

export {HeaderSearch};