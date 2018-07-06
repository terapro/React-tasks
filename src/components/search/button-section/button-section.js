import React from 'react';
import PropTypes from 'prop-types';
import {FormButton} from '../../common/form-button/form-button.js';

const ButtonSection = (props) => (
    <div className={'search-button-section'}>
        <FormButton content={'Search'} parentFormId = {props.parentFormId}/>

    </div>
);

ButtonSection.propTypes = {
    parentFormId: PropTypes.string
};

export {ButtonSection};