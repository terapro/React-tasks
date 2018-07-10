import React from 'react';

import {Logo} from '../../common/logo/logo.js';
import {Button} from '../../common/button/button.js';

const TopBar = () => (
  <div className={'topbar'}>
    <Logo/>
    <Button content='search' btnWhite={true}/>
  </div>

);

export {TopBar};