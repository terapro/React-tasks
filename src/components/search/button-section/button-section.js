import React from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from '../../common/search-button/search-button.js';

const ButtonSection = (props) => (
    <div className={'search-button-section'}>
        <SearchButton content={'Search'}   searchButtonCallBack = {props.searchButtonCallBack}/>

    </div>
);

ButtonSection.propTypes = {

    searchButtonCallBack: PropTypes.func
};

export {ButtonSection};