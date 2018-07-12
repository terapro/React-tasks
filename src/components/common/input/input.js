import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {searchInputCallback, value, onKeyPressedFunc} = props;
  return (
    <input className={'search-input'}
           type={'text'}
           placeholder = 'Start typing...'
           onInput = {searchInputCallback}
           value = {value}
           onKeyPress={onKeyPressedFunc} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  searchInputCallback: PropTypes.func.isRequired,
  value: PropTypes.string,
  onKeyPressedFunc: PropTypes.func
};
Input.defaultProps = {
  placeholder: '',
  searchInputCallback: () => {},
  value: '',
  onKeyPressedFunc: () => {}
};
export {Input};