import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/button/button.js';

const ButtonSection = (props) => (
    <div>
        <Button content='Search' btnClick={props.searchButtonCallBack} btnRed btnBig />
    </div>
);

ButtonSection.propTypes = {
    searchButtonCallBack: PropTypes.func
};
ButtonSection.defaultProps = {
  searchButtonCallBack: () => {}
};


export {ButtonSection};