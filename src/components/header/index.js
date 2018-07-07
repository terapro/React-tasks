import React from 'react';
import PropTypes from 'prop-types';

import {HeaderContainer} from './container/container.js';


const Header = (props) => (
        <header className={'header'}>
            <HeaderContainer searchButtonCallBack = {props.searchButtonCallBack}/>
        </header>
);

Header.propTypes = {
  searchButtonCallBack: PropTypes.func
};


export {Header};