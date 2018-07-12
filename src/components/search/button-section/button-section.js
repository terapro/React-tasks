import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/button/button.js';

const ButtonSection = (props) => (
    <div className={'search-button-section'}>
        <Button content='Search' btnClick={props.searchButtonCallBack} btnRed={true} btnBig={true} />

    </div>
);

ButtonSection.propTypes = {

    searchButtonCallBack: PropTypes.func
};

export {ButtonSection};