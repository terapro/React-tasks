import React from 'react';
import PropTypes from 'prop-types';

const Input = ({searchInputCallback, value, onKeyPressedFunc, placeholder}) => (
  <input className={'search-input'}
         type={'text'}
         placeholder = {placeholder}
         onInput = {searchInputCallback}
         value = {value}
         onKeyPress={onKeyPressedFunc} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  searchInputCallback: PropTypes.func.isRequired,
  value: PropTypes.string,
  onKeyPressedFunc: PropTypes.func
};
Input.defaultProps = {
  placeholder: 'Start typing...',
  searchInputCallback: () => {},
  value: '',
  onKeyPressedFunc: () => {}
};
export {Input};