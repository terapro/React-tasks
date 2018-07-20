import React from 'react';
import PropTypes from 'prop-types';
import {Spiner} from 'src/components/common/spiner/spiner';


export const ResultsLoading = ({phrase, type}) => (
  <div className='results-loading'>
    Searching <span>&quot;{phrase}&quot;</span> by <span>{type}</span>
    <Spiner/>
  </div>

);

ResultsLoading.propTypes = {
  phrase: PropTypes.string,
  type: PropTypes.string

};