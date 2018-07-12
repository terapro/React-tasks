import React from 'react';
import PropTypes from 'prop-types';



const Input = (props) => (

  <input className={'search-input'} type={'text'} placeholder = 'Start typing...' onInput = {props.searchInputCallback} value = {props.value} onKeyPress={props.onKeyPressedFunc} />
);


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