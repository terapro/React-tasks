import React from 'react';
import PropTypes from 'prop-types';

import {Label} from '../../common/label/label.js';


const YearMin = (props) => {
  return (
    <div className='year-min'>
      <Label content={props.year} labelWhite={true} labelBold={true} />
      <Label content={props.min} labelWhite={true} labelBold={true}/>


    </div>
  );
};
YearMin.propTypes = {
  year: PropTypes.string,
  min: PropTypes.string
};


export {YearMin};