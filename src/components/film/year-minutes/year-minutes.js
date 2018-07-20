import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'src/components/common/label/label.js';

export const YearMinutes = ({year, minutes}) => (
    <div className='year-min'>
      <Label content={year.slice(0,4)} labelWhite labelBold />
      <Label content={minutes + ' min'} labelWhite labelBold/>
    </div>
  );

YearMinutes.propTypes = {
  year: PropTypes.string,
  minutes: PropTypes.number
};

YearMinutes.defaultProps = {
  year: 'unknown date',
  minutes: '0'
};