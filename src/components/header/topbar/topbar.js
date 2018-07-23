import React from 'react';
import PropTypes from 'prop-types';
import {Logo} from 'src/components/common/logo/logo.js';
import {Button} from 'src/components/common/button/button.js';

export const TopBar = ({filmMode, searchButtonClick}) => (
    <div className={'topbar'}>
      <Logo/>
      {filmMode && <Button content='search' btnWhite btnClick={searchButtonClick} />}
    </div>
);

TopBar.propTypes ={
    searchButtonClick: PropTypes.func.isRequired,
    filmMode: PropTypes.bool
};

TopBar.defaultProps ={
  filmMode: false
};
