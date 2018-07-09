import React from 'react';

import PropTypes from 'prop-types';

const SortItem = (props) => (
  <span className='sort-item'>
    {props.name}
  </span>

);

SortItem.propTypes ={
  name: PropTypes.string.isRequired
};

export {SortItem};