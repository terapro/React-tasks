import React from 'react';
import PropTypes from 'prop-types';


const Input = (props) => (

  <input className={'search-input'} type={'text'} placeholder = 'Start typing...' onInput = {props.searchInputCallback} value = {props.value} onKeyPress={props.onKeyPressedFunc} />
);


Input.propTypes = {
  placeholder: PropTypes.string,
  searchInputCallback: PropTypes.func,
  value: PropTypes.string,
  onKeyPressedFunc: PropTypes.func
};

export {Input};