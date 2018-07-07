import React from 'react';
import PropTypes from 'prop-types';

import {HeaderContainer} from './container/container.js';


const Header = (props) => (
        <header className={'header'}>
            <HeaderContainer startSearch = {props.startSearch} />
        </header>
);

Header.propTypes = {
  startSearch: PropTypes.func
};


export {Header};