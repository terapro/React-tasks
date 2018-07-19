import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/components/common/button/button.js';

const ButtonSection = (props) => {
  const {searchButtonClick} = props;
  return (
    <div>
      <Button content='Search' btnClick={searchButtonClick} btnRed btnBig />
    </div>
  );
};

ButtonSection.propTypes = {
    searchButtonCallBack: PropTypes.func
};
ButtonSection.defaultProps = {
  searchButtonCallBack: () => {}
};


export {ButtonSection};