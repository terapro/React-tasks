import React from 'react';

import {appSettings} from '../../../app/config.js';

const NoResults = () => (
  <div className={'no-results'}>
    {appSettings.noResultsText}
  </div>

);

export {NoResults};