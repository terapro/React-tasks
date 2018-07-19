import React from 'react';
import PropTypes from 'prop-types';


const Input = ({onStartTyping,  onKeyEnterPressed, placeholder, value}) => (

  <input className={'search-input'}
         type='text'
         placeholder = {placeholder}
         onInput = {onStartTyping}
         onKeyPress={onKeyEnterPressed}
         value = {value}

  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  searchInputCallback: PropTypes.func.isRequired,
  onKeyPressedFunc: PropTypes.func
};
Input.defaultProps = {
  placeholder: 'Start typing...',
  searchInputCallback: () => {},
  onKeyPressedFunc: () => {}
};
export {Input};