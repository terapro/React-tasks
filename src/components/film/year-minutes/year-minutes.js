import React from 'react';
import PropTypes from 'prop-types';

import {Label} from 'src/components/common/label/label.js';


const YearMinutes = (props) => {
  return (
    <div className='year-min'>
      <Label content={props.year.slice(0,4)} labelWhite labelBold />
      <Label content={props.minutes + ' min'} labelWhite labelBold/>
    </div>
  );
};
YearMinutes.propTypes = {
  year: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired
};


export {YearMinutes};