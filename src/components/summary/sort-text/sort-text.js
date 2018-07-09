import React from 'react';

import PropTypes from 'prop-types';

const SortText = (props) => (
  <span className='sort-text'>
    {props.content}
  </span>

);

SortText.propTypes = {
  content: PropTypes.string
};
SortText.defaulProps = {
  content: ''
};


export {SortText};