import React from 'react';
import PropTypes from 'prop-types';

import {Logo} from './../../common/logo/logo.js';
import {Button} from './../../common/button/button.js';

const TopBar = (props) => {
  const {filmMode, setSearchModeCallback} = props;
  return (
  <div className={'topbar'}>
    <Logo/>
    {filmMode? <Button content='search' btnWhite btnClick={setSearchModeCallback} /> : null}
  </div>);
};

TopBar.propTypes ={
  setSearchModeCallback: PropTypes.func,
  filmMode: PropTypes.bool
};

TopBar.defaultProps ={
  setSearchModeCallback: () => {},
  filmMode: false
};
export {TopBar};