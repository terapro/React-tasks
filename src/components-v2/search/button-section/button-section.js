import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components-v2/common/button/button.js';

export const ButtonSection = ({searchButtonClick}) => (
  <div>
    <Button content='Find it' btnClick={searchButtonClick} id={'search-1'} btnRed btnBig/>
  </div>
);

ButtonSection.propTypes = {
  searchButtonClick: PropTypes.func.isRequired
};
