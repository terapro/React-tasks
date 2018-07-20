import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/button/button.js';

export const ButtonSection = ({searchButtonClick}) => (
    <div>
      <Button content='Search' btnClick={searchButtonClick} btnRed btnBig />
    </div>
  );

ButtonSection.propTypes = {
    searchButtonClick: PropTypes.func.isRequired
};
