import React from 'react';
import PropTypes from 'prop-types';

import {Logo} from 'src/components/common/logo/logo.js';
import {Button} from 'src/components/common/button/button.js';

const TopBar = (props) => {
  const {filmMode, setSearchModeCallback} = props;
  return (
    <div className={'topbar'}>
      <Logo/>
      {filmMode && <Button content='search' btnWhite btnClick={setSearchModeCallback} />}
    </div>);
};

TopBar.propTypes ={
  setSearchModeCallback: PropTypes.func.isRequired,
  filmMode: PropTypes.bool
};

TopBar.defaultProps ={
  filmMode: false
};
export {TopBar};