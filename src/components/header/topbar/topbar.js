import React from 'react';
import PropTypes from 'prop-types';

import {Logo} from '../../common/logo/logo.js';
import {Button} from '../../common/button/button.js';

const TopBar = (props) => (
  <div className={'topbar'}>
    <Logo/>
    {props.filmMode? <Button content='search' btnWhite={true} btnClick={props.setSearchModeCallback} /> : null}
  </div>
);

TopBar.propTypes ={
  setSearchModeCallback: PropTypes.func,
  filmMode: PropTypes.bool
};

export {TopBar};